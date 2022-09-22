import { StyleSheet,useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//const isDarkMode =useColorScheme() === 'dark';

const styles = StyleSheet.create({
  
  container:{
   width:'60%',
   marginLeft: '20%',
  },
  buttonStyle: {
    backgroundColor: Colors.darker,
    height: 40,
    borderRadius: 20, //radius half of height (rounds corners)
    alignItems: 'center',
    justifyContent:'center',
   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  },
  buttonTitle: {
    //color: isDarkMode ? Colors.black : Colors.white,
    fontSize:85,
    color: 'white',
  }
});

export default styles;
