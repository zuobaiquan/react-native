'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
var TimerMixin=require('react-timer-mixin');
const Screen_Width = Dimensions.get('window').width;

export default class Myswiper extends Component {
  mixins:[TimerMixin];
  playTimer: null;
  static propTypes = {
      autoplay:PropTypes.bool.isRequired, // 是否自动轮播
      delay:PropTypes.number.isRequired, //设置延迟时间 ,单位是秒
      item:PropTypes.array.isRequired,//图片来源，存放在一个数组里面
      isHasDot:PropTypes.bool,//是否显示轮播小点点
      height:PropTypes.number.isRequired,
      width:PropTypes.number.isRequired,
      onDotolor:PropTypes.string.isRequired,
      dotColor:PropTypes.string.isRequired,
  };
  static defaultProps = {
      autoplay:true,
      delay:1,
      isHasDot:true,
      height:300,
      width:Screen_Width,
      onDotolor:'red',
      dotColor:'green'
  };
  constructor(props, context) {
      super(props, context);
      this.defaultStyles=_styles;
      this.state=({
          nowPage:0,
      });
  }
  handlePress(i){
      clearInterval(this.playTimer);
      let handelNum = i - this.state.nowPage;
      this.changePageNum(handelNum);
      this.autoplay();
  }
  render() {
    let i;
    const dotStyle = {
      height:12,
      width:12,
      borderRadius:12,
      marginRight:3,
      backgroundColor:this.props.onDotolor,
    }
    const onDotStyle = {
      height:12,
      width:12,
      borderRadius:12,
      marginRight:3,
      backgroundColor:this.props.dotColor,
    }
    return(
      <View style={[this.getStyle('container'), this.props.style]}>
          <View style={[this.getStyle('viewcontent'),{width:this.props.width,height:this.props.height}]}>
              <Image style={{width:this.props.width,height:this.props.height}}  source={{uri:this.props.item[this.state.nowPage].url}} />
              <View style={this.getStyle('imgBottom')}>
                  <Text style={this.getStyle('leftText')} numberOfLines={1}>{this.props.item[this.state.nowPage].title}</Text>
                  {this.props.isHasDot?
                    <View style={{flexDirection:'row'}}>
                        {this.props.item.map((item,i) => {
                            return (
                              <TouchableWithoutFeedback key={i} onPress={this.handlePress.bind(this,i)}>
                                  <View style={i===this.state.nowPage?onDotStyle:dotStyle}></View>
                              </TouchableWithoutFeedback>
                            );
                        })}
                    </View>
                    :null
                  }
              </View>
          </View>
      </View>
    );
  }
  componentDidMount() {
      this.autoplay();
  }
  autoplay() {
      // 如果设置自动轮播，就执行
      if(this.props.autoplay) {
        this.playTimer=setInterval(()=> {
          this.changePageNum(1);
        },this.props.delay*1000);
      }
  }
  changePageNum(n){
      var chang_n=this.state.nowPage + n;
      if(chang_n>=this.props.item.length) {
        chang_n-=this.props.item.length;
      }
      if(chang_n < 0) {
        chang_n+=this.props.item.length;
      }
      this.setState({nowPage: chang_n});
  }
  componentWillUnmount(){
      clearInterval(this.playTimer);
  }
}
var _styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
    },
    viewcontent:{
        backgroundColor:'#ddd',
    },
    imgBottom:{
        flex:1,
        backgroundColor:'#ddd',
        height:40,
        marginTop:-30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        opacity:0.5,
    },
    leftText:{
        flex:2,
        opacity:1,
        height:30,
        lineHeight:22,
        marginRight:16,
        marginLeft:6,
    },
    rightDot:{
        height:12,
        width:12,
        borderRadius:12,
        marginRight:3,
    },
    rightDotNo:{
      height:12,
      width:12,
      borderRadius:12,
      marginRight:3,
    }
});


//调用：
'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from 'react-native';

import LAB, {
  Page,
  Link,
} from 'lab4';

import SimplePage from 'lab4/demo/SimplePage';
import TestHelper from 'lab4/demo/TestHelper';

//测试数据 对象数组
const testImg = [
  {
    title: '多彩志愿行，激情文化宴',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20160420/1461126325434276-lp.jpg'
  },
  {
    title: '志愿交流产生新思想',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151130/1448886024156119-lp.jpg'
  },
  {
    title: '校总队志愿之行，晚会交流收获颇多',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151130/1448885282795270-lp.jpg'
  },
  {
    title: '园博会第一期志愿者培训成功举办',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151115/1447578349224195-lp.jpg'
  },
  {
    title: '志愿“铁军”展科大精神，老师现场表深切慰问',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20151115/1447577261912574-lp.jpg'
  },
  {
    title: '志愿普法走进社区 白衣天使为民服务',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20150411/1428715039101886-lp.jpg'
  },
  {
    title: '12.5宣誓大会暨志愿者文化月总结大会顺利落幕',
    url: 'http://zyz.wust.edu.cn/ueditor/php/upload/image/20150411/1428716832367061-lp.png'
  }
];

export default class MyswiperDemo extends SimplePage {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.configPage({
      scrollable: true, //页面可滚动
    });
  }

  renderContent() {
    return (
          <View>
              <cps.com.Myswiper item={testImg} isHasDot={true} autoplay={true}  delay={1} height={200} onDotolor={'blue'} dotColor={'red'} />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


