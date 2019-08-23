import React,  { Component } from 'react';
import {
  Text,
  View,
  Switch,
  StyleSheet
} from 'react-native';

const stylesheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 10
  }
});

class Toggle extends Component {
  constructor(props){
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  toggleSwitch (value) {
    const {
      onValueChange
    } = this.props;
    onValueChange && onValueChange(value);
  }
  render() {
    const {
      label,
      styles,
      value
    } = this.props;
    return (
      <View style={stylesheet.container}>
        <Text style={styles.text}>{label}</Text>
        <Switch
          trackColor={{
            true: styles.trackColor.color
          }}
          style={stylesheet.marginLeft}
          onValueChange = {this.toggleSwitch}
          value = {value}/>
      </View>
    );
  }
}

export default Toggle;