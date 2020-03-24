import React, {Component} from 'react';
import {View, Text , StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Hello World !</Text>
      </View>
    );  
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  }
});
export default App;