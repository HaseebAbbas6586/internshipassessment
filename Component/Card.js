import { StyleSheet, Text, View, Image , TouchableOpacity  } from 'react-native'

import React from 'react'

const Card = ({title , author , image , description}) => {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity
        
      onPress={() => {
        navigation.navigate("detail")
    }}
        >
        <View style={styles.card}>
            <Image
            source={image && {uri:image}}
            style={{width:350 , height: 130 , borderTopLeftRadius:25 , borderTopRightRadius :25}}
            />
        <Text numberOfLines={1} style={styles.title} >{title}</Text>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
        <Text style={styles.author}>{author}</Text>
        </View>
        </TouchableOpacity>
      
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    card:{
        backgroundColor:'#FFFFFF',
        width:350,
        height:250,
        borderRadius:25,
        elevation:2,
        marginVertical:10
    },
    author:{
        marginHorizontal:10,
        fontSize:15,
        marginBottom:10
    },
    title:{
        marginTop:10,
        marginHorizontal:10,
        fontSize:23
    },
    description:{
        fontSize:15,
        marginHorizontal:10
    },
})