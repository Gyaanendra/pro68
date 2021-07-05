import React from 'react';
import { Text, View, StyleSheet, Button , Image} from 'react-native';


export default class Insta extends React.Component{
  render(){
    return(
       <View>
           <Image 
           style={css.img}
           source={'https://t3y4b2m7.rocketcdn.me/wp-content/uploads/2016/12/instagram-logo-gradient3-ss-1920.jpg'}  
           />
       </View>       
    )
  }
}


const css= StyleSheet.create({
  img:{
    margin:10,
    width:250,
    height:100,
    
  }

})