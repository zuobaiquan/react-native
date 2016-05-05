
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
} = React;

var THUMB_URLS = [
  require('./img/my1.png'),
  require('./img/my2.png'),
  require('./img/my1.png'),
  require('./img/my2.png'),
  require('./img/my1.png'),
  require('./img/my2.png'),
  require('./img/my2.png'),
  require('./img/my1.png'),
  require('./img/my2.png'),
  require('./img/my1.png'),
  require('./img/my2.png'),
  require('./img/my1.png'),
];

var App =React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource:ds.cloneWithRows(this._genRows({})),
      };
    },

    render: function() {
      return (
        <ListView style={{marginTop:25}}
          contentContainerStyle={styles.list}
          initialListSize={6}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      );
    },

    _renderRow:function(rowData: string,sectionID: number, rowID: number) {
        var imgSource = THUMB_URLS[rowID];
        return (
          <TouchableOpacity>
            <View>
              <View style={styles.row}>
                <Image style={styles.thumb} source={imgSource} />
                <Text style={styles.text}>
                  {rowData}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
    },
    _genRows: function(){
      var dataBlob = [];
      for (let i = 0; i < THUMB_URLS.length;i++){
        dataBlob.push('单元格 ' + i);
      }
      return dataBlob;
    },
});
var styles =StyleSheet.create({
    list: {
      marginTop:5,
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    row: {
      justifyContent: 'center',
      padding: 5,
      margin: 3,
      width: 85,
      height: 85,
      backgroundColor: '#F6F6F6',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 85,
      borderColor: '#CCC'
    },
    thumb: {
      width: 45,
      height: 45
    },
    text: {
      flex: 1,
      marginTop: 5,
      fontWeight: 'bold'
    },
});

AppRegistry.registerComponent('Hello', ()=>App);
