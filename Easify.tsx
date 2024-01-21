import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Easify = () => {

  return(
  <ImageBackground
      source={require("./assets/bg.jpeg")}
      resizeMode="cover"
      style={styles.backdrop}
  >
  <View style={styles.container}>
  <Text style={styles.heading}> Easify v1.0.0 </Text>
  <Text style={styles.subheading}> Soon Will be Available </Text>
  </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subheading: {
    fontSize: 15,
  },

  backdrop:{
    flex:1,
    flexDirection:"column"
  }
});

export default Easify;