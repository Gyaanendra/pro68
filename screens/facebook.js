import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default class Face extends React.Component {
  render() {
    return (
      <View>

      <View style={css.container}>
     
        <Image
          style={css.img2}
          source={"https://www.citypng.com/public/uploads/small/11595326663d6hcouykf9472uzsolnywgppitxwse2yjpefelx3ligmjrxwyjf7jhy7uh6ckys9j1ejaxn89ol1ijc6uojce3jgfnyhmpywtglw.png"}
        />
      
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({

container:{
flex:1,
},

  img2: {
    width: 310,
    height: 100,
    justifyContent:'center',
  },
 
});
