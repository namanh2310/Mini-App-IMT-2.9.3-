import React from "react";
import { TextInput, StyleSheet, Text, View, Button } from "react-native";
import { MyHeader } from '../components/MyHeader'
import { Slider } from '../components/Slider'
import { NewFeed } from '../components/NewFeed'

const Home = () => {
  return (
    <View style={styles.container}>
      <MyHeader
      title={'News'}
      />
      <Slider/>
      <NewFeed />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  
});