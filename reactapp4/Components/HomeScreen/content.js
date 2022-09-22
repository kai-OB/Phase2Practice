import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function HomeScreen () {
  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title="Home Screen" />
        <Text style= {styles.text}>Hi</Text>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    fontSize:80,
  },
});

export default HomeScreen