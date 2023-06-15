import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';

const Wellcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello</Text>
      <Text style={styles.heading}>React Native</Text>
      <TouchableOpacity
        onPress={() => {
            navigation.navigate('home');
        }}
        style={styles.btn}>
        <Text style={styles.text}>Next Screen</Text>
      </TouchableOpacity>
     

    
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical:35
  },
  text: {
    color: '#FFFFFF',
    fontSize:20,
    
  },
  btn: {
    backgroundColor: 'blue',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:60,
    borderRadius:20,

  },
  heading:{
    fontSize:30,
    
  },
});
