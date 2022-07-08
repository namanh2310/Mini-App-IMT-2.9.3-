import React from "react";
import { TextInput, StyleSheet, Text, View, Button } from "react-native";
import { MyHeader } from '../components/MyHeader'
import { Error } from "../components/Error";

const Members = () => {
  return (
    <View style={styles.container}>
      <MyHeader
      title={'Members'}
      />
      <Error />
    </View>
  );
}

export default Members

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  
});