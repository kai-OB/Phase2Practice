/**
* Function to calculate monthly amounts
* @param {number} loanAmount   Numeric value of the total loan: 123456
* @param {number} rate   Numeric value of the interest: 3.125
* @param {number} term   Numeric value of the number of months of the loan: 360
*/
import styles from './styles'
import {
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  View,
} from 'react-native';
import InputFields from './Components/InputFields/content'

const Result = ()=>{
  return (
    <View>
      <Text>
        Your Monthly Principle would be
      </Text>
      {calculatePrinciple()}
    </View>
  );
};


function calculatePrinciple(loanAmount, rate, term) {
  const monthlyRate = rate / 1200;
  return (
    (loanAmount * monthlyRate) / (1 - Math.pow(1 / (1 + monthlyRate), term))
  );
 }
 export default Result;