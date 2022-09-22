/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import InputFields from './Components/InputFields/content'
import Result from './Components/Result/content'

function App () {

  return (
    <SafeAreaView>
      <Text>Morgage Calculator</Text>
        <View>
         <InputFields
          title={'Desired Loan Amount'}
          value = {'2'}/>
           <InputFields
          title={'Estimated APR'}
          value = {'2'}/>
          <InputFields
          title={'Desired Term'}
          value = {'2'}/>
          {/* <Button
            onPress={}>
          </Button> */}
          <Result/>
        </View>
    </SafeAreaView>
  );
};
export default App;
