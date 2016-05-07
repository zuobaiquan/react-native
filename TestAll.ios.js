var React = require('react-native');
var Dimensions=require('Dimensions');
var {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  StatusBar,
  TextInput,
  NavigatorIOS,
  TabBarIOS,
  TouchableOpacity,
  TouchableHighlight,
  AlertIOS,
  ActionSheetIOS,
} = React;


var minwidth=React.PixelRatio.get();
var [maxwidth,maxheight]=[Dimensions.get('window').width,Dimensions.get('window').height];

//测试数据 对象数组
var testData = [
  {
    id: '1',
    title: '多彩志愿行，激情文化宴',
    date:'2016-05-06 16:10',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20160420/1461126325434276-lp.jpg'
  },
  {
    id:'2',
    title: '志愿交流产生新思想',
    date:'2016-05-06 16:20',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151130/1448886024156119-lp.jpg'
  },
  {
    id:'3',
    title: '校总队志愿之行，晚会交流收获颇多',
    date:'2016-05-06 16:30',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151130/1448885282795270-lp.jpg'
  },
  {
    id:'4',
    title: '园博会第一期志愿者培训成功举办',
    date:'2016-05-06 16:40',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151115/1447578349224195-lp.jpg'
  },
  {
    id:'5',
    title: '志愿“铁军”展科大精神，老师现场表深切慰问',
    date:'2016-05-06 16:50',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151115/1447577261912574-lp.jpg'
  },
  {
    id:'6',
    title: '志愿普法走进社区 白衣天使为民服务',
    date:'2016-05-06 17:00',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20150411/1428715039101886-lp.jpg'
  },
  {
    id:'6',
    title: '12.5宣誓大会暨志愿者文化月总结大会顺利落幕',
    date:'2016-05-06 17:10',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20150411/1428716832367061-lp.png'
  }
];


//对象数组
var buttons=[
    {
      text:'提示按钮1(取消)',
      onPress(){
        alert('点击按钮1取消');
      }
    },
    {
      text:'提示按钮2(确认)',
      onPress(){
        alert('点击按钮2确认');
      }
    },
    {
      text:'提示按钮3(不知道干啥)',
      onPress(){
        alert('点击按钮3不知道干啥');
      }
    },
];
//路由
var myApp = React.createClass({

  getInitialState: function(){
    return {
      tab: 'newslist',
      valueid:'sss',
      valuename:'sss',
    };
  },
  setId: function(val){
    this.setState({
      valueid: val,
    });
  },
  setName: function(val){
    this.setState({
      valuename: val,
    });
  },
  selectTab: function(tabName){
    this.setState({
      tab: tabName,
    });
  },
  myAlert:function(){
      var id=this.state.valueid;
      var name=this.state.valuename;
      var info={
        userid:id,
        username:name,
      };
      console.log(info);
      AlertIOS.alert('第一个参数title','第二个参数message',buttons);

  },
  render: function(){
    return(
      <TabBarIOS>
          <TabBarIOS.Item title="新闻列表" systemIcon="recents" onPress={()=>this.selectTab('newslist')} selected={this.state.tab==='newslist'}>
              <NavigatorIOS style={{flex:1}} initialRoute={{component: listItem,title: '新闻频道',passProps: {},}}  />
          </TabBarIOS.Item>
          <TabBarIOS.Item title="栏目导航" systemIcon="bookmarks" onPress={this.selectTab.bind(this,'piclist')} selected={this.state.tab==='piclist'}>
              <View style={ styles.person }>
                 <Image style={ styles.personImage } source={{uri:'http://zyz.wust.edu.cn/uploads/allimg/151203/1_1915141322.PNG'}} />
              </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item title="个人中心" systemIcon="contacts" onPress={this.selectTab.bind(this,'person')} selected={this.state.tab==='person'}>
              <View style={styles.person_container}>
                  <Text style={styles.personTitle}>账号绑定</Text>
                  <Image style={styles.personImg} source={{uri:'http://www.longzhang.net/includes/myweixin/public/images/logo.png'}} />
                  <View style={styles.textContainer}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#ddd',paddingLeft:5,borderBottomWidth:0}}>
                          <Image source={{uri:'http://www.longzhang.net/includes/myweixin/public/images/user.png'}} style={{height:15,width:15}} />
                          <TextInput style={styles.input} onChangeText={this.setId.bind(this,this.state.valueid)} placeholder="请输入您的学号" />
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#ddd',paddingLeft:5,}}>
                          <Image source={{uri:'http://www.longzhang.net/includes/myweixin/public/images/user.png'}} style={{height:15,width:15}} />
                          <TextInput style={styles.input} onChangeText={this.setName.bind(this,this.state.valuename)} placeholder="请输入您的姓名" password="true"   />
                      </View>
                  </View>
                  <View style={styles.personBtn}>
                    <TouchableHighlight underlayColor='#E1F6FF' onPress={this.myAlert} >
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18,}}>绑定账号</Text>
                    </TouchableHighlight>
                  </View>
              </View>
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var listItem =React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
          dataSource:ds.cloneWithRows(this.genRows({})),
        };
    },
    renderRow: function(rowData: string,sectionID: number, rowID: number) {
        var imgSource = testData[rowID];
        return (
            <TouchableOpacity onPress={this.jumpDetail}>
              <View style={styles.container}>
                <View style={styles.rowLeft}>
                      <Image style={styles.myImg} source={{uri:testData[rowID]['url']}} />
                </View>
                <View  style={styles.rowRight}>
                      <Text style={{fontSize:15,color:'#F20428'}} >
                          {testData[rowID]['title']}
                      </Text>
                      <Text style={{fontSize:12,marginTop:7,color:'#776955'}}>{testData[rowID]['date']}</Text>
                </View>
              </View>
            </TouchableOpacity>
        );
   },
   genRows:function(){
      var initialData = [];
      for (let i = 0; i < testData.length;i++) {
        initialData.push('第'+i+'一条数据未更新，请稍后再来哦');
      }
      return initialData;
  },
  jumpDetail(){
    this.props.navigator.push({
      component: Detail,
      title: '新闻详细内容',
      rightButtonTitle:'分享',
      onRightButtonPress:this.shareEvent,
    });
  },
  shareEvent:function(){
    ActionSheetIOS.showShareActionSheetWithOptions({url:'http://www.baidu.com'},()=>alert("分析失败"),()=>alert("分享成功"));
  },
  render: function() {
      return (
        <ListView  dataSource={this.state.dataSource}  renderRow={this.renderRow}
        />
      );
    }
});


var Detail = React.createClass({
  render: function(){
    return (
      <ScrollView>
        <Text style={{marginTop:10}}>新闻详情界面新闻详情界面新闻详情界面新闻详情界面新闻详情界面</Text>
      </ScrollView>
    );
  }
});


var styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    marginLeft:10,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
  },
  rowLeft:{
    flex:0.2,
  },
  myImg:{
    height:80,
    width:80,
    backgroundColor:'#ddd',
    borderRadius:2,
    overflow:'hidden'
  },
  rowRight:{
    flex:0.6,
  },
  person_container:{
    marginTop:25,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  personTitle:{
    width:maxwidth,
    backgroundColor:'#058158',
    height:45,
    textAlign:'center',
    fontSize:18,
    color:'#fff',
    paddingTop:14,
  },
  personImg:{
    width:maxwidth-20,
    height:82,
    marginTop:10,
    marginBottom:30,
  },
  textContainer:{
    flexDirection: 'column',
    borderRadius:5,

  },
  input:{
    height:40,
    borderWidth:0,
    width:maxwidth-80,
    paddingLeft:10,
  },
  personInfo:{
      fontSize:18,
      color:'#ddd',
      fontWeight:'bold',
  },
  personBtn:{
    width:maxwidth-60,
    backgroundColor:'#005C3F',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:20,
  },

  person: {
    flex: 1,
    margin: 10,
    marginTop:25,
    borderRadius: 3,
    overflow: 'hidden'
  },
  personImage: {
    height: 200,
    width:maxwidth-20,
  },


});
StatusBar.setBarStyle('default');
AppRegistry.registerComponent('Hello', () => myApp);
