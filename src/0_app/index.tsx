import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Home} from '~/1_pages/home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 25,
  },
});

export default App;
