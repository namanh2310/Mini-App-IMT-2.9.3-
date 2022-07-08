import React from "react";
import { SafeAreaView,TextInput, StyleSheet, Text, View, Button } from "react-native";
import { MyHeader } from '../components/MyHeader'
import { Error } from "../components/Error";

const Announc = () => {
  return (
    <View style={styles.container}>
      <MyHeader
      title={'Annoucments'}
      />
      <Error />
    </View>
  );
}

export default Announc

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  
});