import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SectionProps = {
  title: string;
}

const tmp: SectionProps = {title: 'title'}

console.log(tmp)

const App = () => (
 <View style={styles.home}>
    <Text>
      Im a man!!! Congratulations Apollo 11 🍾🍾. You had a great ride so far 🖖🏽. Will see
      you at Mars next time 🚀.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;