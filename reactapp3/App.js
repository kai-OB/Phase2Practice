/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Node from 'react';
import Section from './Components/Section/content';
import Button from './Components/Button/content';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Section
        title= 'To Do List:'
        children='Hopefully with authentication and backend'>
      </Section>
      <Button content= {'Hello'}/>
    </SafeAreaView>
  );
};

export default App;
