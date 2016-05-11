var React = require('react-native'); // 引用React库

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Picker,PickerIOS,
  } = React; // 使用简写


var PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal','Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle','Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

var App = React.createClass({
    getInitialState: function() {
      return {
        carMake: 'cadillac',
        modelIndex: 2,
      };
    },
    render: function() {
      var make = CAR_MAKES_AND_MODELS[this.state.carMake];
      var selectionString = make.name + '==' + make.models[this.state.modelIndex];
      return (
        <View>
          <Text>请选择:</Text>
          <PickerIOS
            selectedValue={this.state.carMake}
            onValueChange={(carMake) => this.setState({carMake:carMake, modelIndex: 0})}>
            {
              Object.keys(CAR_MAKES_AND_MODELS).map(
                (carMake) => (
                    <PickerItemIOS
                      key={carMake}
                      value={carMake}
                      label={CAR_MAKES_AND_MODELS[carMake].name}
                    />
                 )
              )
          }
          </PickerIOS>
          <Text>请选择name</Text>
          <PickerIOS
            selectedValue={this.state.modelIndex}
            key={this.state.carMake}
            onValueChange={(modelIndex) => this.setState({modelIndex})}>
            {CAR_MAKES_AND_MODELS[this.state.carMake].models.map(
              (modelName, modelIndex) => (
                <PickerItemIOS
                  key={this.state.carmake + '_' + modelIndex}
                  value={modelIndex}
                  label={modelName}
                />
              ))
            }
          </PickerIOS>
          <Text>你的选择是 : {selectionString}</Text>
        </View>
      );
    },
});

AppRegistry.registerComponent('Hello', () => App);
