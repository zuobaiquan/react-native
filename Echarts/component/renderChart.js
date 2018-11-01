// import echarts from './echarts.min';
function toString(obj) {
  let result = JSON.stringify(obj, function(key, val) {
        if (typeof val === 'function') {
            return `~--demo--~${val}~--demo--~`;
        }
        return val;
    });
    do {
        result = result.replace('\"~--demo--~', '').replace('~--demo--~\"', '').replace(/\\n/g, '').replace(/\\\"/g,"\"");//最后一个replace将release模式中莫名生成的\"转换成"
    } while (result.indexOf('~--demo--~') >= 0);
    return result;
}

export default function renderChart(props) {
  const height = `${props.height || 400}px`;
  const width = props.width ? `${props.width}px` : 'auto';
  const chartContext = props.chartContext
  return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    var myChart = echarts.init(document.getElementById('main'));
    var chartContext = ${toString(chartContext)};
    myChart.setOption(${toString(props.option)});
    myChart.on('click', function(params) {
      var seen = [];
      var paramsString = JSON.stringify(params, function(key, val) {
        if (val != null && typeof val == "object") {
          if (seen.indexOf(val) >= 0) {
            return;
          }
          seen.push(val);
        }
        return val;
      });
      window.postMessage(paramsString);
    });
  `
}
