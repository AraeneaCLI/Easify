import React, {useEffect} from 'react';
import {View, Text, Stylesheet} from 'react-native';

const App = () => {

  return(
  <View style={styles.container}>
  <Text style={styles.heading}> Easify v1.0.0 </Text>
  <Text style={styles.subheading}> Soon Will be Available </Text>
  </View>
  );
};

const styles = Stylesheet.create({
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
});

export default App;