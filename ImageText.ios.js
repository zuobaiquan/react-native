var React = require('react-native');
var Dimensions=require('Dimensions');
var {
  StyleSheet,
  View,
  Image,
  Text,
  AppRegistry
} = React;

var [width,height]=[Dimensions.get('window').width,Dimensions.get('window').height];
var App = React.createClass({
  render: function() {
    return (
      <View style={ styles.person }>
          <Image style={ styles.personImage } source={{uri:'http://zyz.wust.edu.cn/uploads/allimg/151203/1_1915141322.PNG'}} />
          <View style={ styles.personInfo }>
                <Text style={ styles.personName }>实事求是 表里如一</Text>
                <View style={ styles.personScore }>
                  <Text style={ styles.personScoreHeader }>点击数</Text>
                  <Text style={ [styles.personScoreValue, styles.won] }>2333</Text>
                </View>
                <View style={ styles.personScore }>
                    <Text style={ styles.personScoreHeader }>阅读数</Text>
                    <Text style={ [styles.personScoreValue, styles.lost] }>2333</Text>
                </View>
                <View style={ styles.personScore }>
                    <Text style={ styles.personScoreHeader }>评论数</Text>
                    <Text style={ styles.personScoreValue }>100</Text>
                </View>
          </View>
      </View>
    )
  }
});
var styles = StyleSheet.create({
  person: {
    flex: 1,
    margin: 10,
    marginTop:25,
    borderRadius: 3,
    overflow: 'hidden'
  },
  personImage: {
    height: 200,
    width:width-20,
  },
  personInfo: {
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  personName: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 5,
    //backgroundColor:'red'
  },
  personScore: {
    flex: 0.25,
    alignItems: 'center',
    //backgroundColor:'#eeeeee'
  },
  personScoreHeader: {
    color: 'rgba( 0, 0, 0, 0.3 )',
    fontSize: 10,
    fontWeight: 'bold'
  },
  personScoreValue: {
    color: 'rgba( 0, 0, 0, 0.6 )',
    fontSize: 16
  },
  won: {
    color: '#93C26D'
  },
  lost: {
    color: '#DD4B39'
  }
});

AppRegistry.registerComponent('Hello', () => App);
