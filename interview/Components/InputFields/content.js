import styles from './styles'
import {
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  View,
} from 'react-native';

const InputFields = ({title},{value})=>{
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <Text>{title}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={value}/>

    </View>
  );
};
export default InputFields;