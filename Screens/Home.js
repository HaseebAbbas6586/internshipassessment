import { StyleSheet, Text, View , ActivityIndicator , FlatList } from 'react-native'
import React , {useEffect, useState} from 'react'
import Card from '../Component/Card'




const Home = () => {

    
    const [Data , setData] = useState([])

    useEffect(() => {
        const gattingdata = async()=>{
             let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ec398ea2e01495ea75627ae5501ba08';
            let data = await fetch(url);
             let parseddata = await data.json();

             setData(parseddata.articles)
            
           }
        
          
        gattingdata()
      });
  return (
    <View style={styles.container}>
       
        <FlatList
       data={Data}
       renderItem={({item}) => <Card  title={item.title} author={item.author} image={item.urlToImage} description={item.description}/>}
       keyExtractor={item => item.publishedAt}
     
       
     />
        
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginVertical:15
    },
})