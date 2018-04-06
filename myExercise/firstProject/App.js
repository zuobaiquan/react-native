import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      times:0
    }
  }
  timePlus(){
    let time=this.state.times
    time++
    this.setState({
      times:time
    })
  }
  render() {
    console.log(111);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.timePlus.bind(this)}>
          有本事点我呀
        </Text>
        <Text style={styles.instructions}>
          你点了我{this.state.times}次
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
