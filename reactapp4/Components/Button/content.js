/*
* Section is a section of text
* An optional title and an optional Description
*/
import React from 'react';
import {Text, View, useColorScheme,Pressable} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

const Button = (props) =>{    // will take a primary or a secondary type
  // const type = props.type;
  const content = props.content;
  const onPress = props.onPress;
  // since they have the same name, this is the same as
  //const { type, content, onPress} = props;

  return(
      <View style = {styles.container}>
          <Pressable 
            style={styles.buttonStyle}
            onPress={()=>{ onPress()}}>
              <Text style = {[styles.buttonText,{color:Colors.lighter}]}>{content}</Text>
          </Pressable>
      </View>
  );
};
export default Button;