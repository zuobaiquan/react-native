import React, { Component } from 'react';
import { WebView, View, StyleSheet,Platform } from 'react-native';
import renderChart from './renderChart';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      // 解决数据改变时页面闪烁的问题
      this.refs.chart.injectJavaScript(renderChart(nextProps))
    }
  }
  // 预防过渡渲染
  shouldComponentUpdate(nextProps, nextState) {
  	const thisProps = this.props || {}
  	nextProps = nextProps || {}
  	if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
  		return true
  	}
  	for (const key in nextProps) {
  		if (JSON.stringify(thisProps[key]) != JSON.stringify(nextProps[key])) {
  			return true
  		}
  	}
  	return false
  }
  render() {
    const source = (Platform.OS == 'ios') ? require('./chart.html') : { uri: 'file:///android_asset/chart.html' }
    return (
      <View style={{flex: 1, height: this.props.height || 400,}}>
        <WebView
          ref="chart"
          scrollEnabled = {false}
          injectedJavaScript = {renderChart(this.props)}
          style={{
            height: this.props.height || 400,
            backgroundColor: this.props.backgroundColor || 'transparent'
          }}
          scalesPageToFit={Platform.OS === 'android'}
          source={require('./chart.html')}
          onMessage={event => this.props.onPress ? this.props.onPress(JSON.parse(event.nativeEvent.data)) : null}
        />
      </View>
    );
  }
}
