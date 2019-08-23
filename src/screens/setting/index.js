import React,  { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import Toggle from '../../components/toggle';
import { connectTo } from '../../utils';
import { changeTheme } from '../../actions/theme';
import { changeLanguge } from '../../actions/lang';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class SettingsScreen extends Component {
  constructor(props){
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {
      isChangeLanguage: false
    }
  }
  onValueChange (value) {
    const {
      changeTheme
    } = this.props;
    changeTheme({
      type: value ? 'Dark' : 'Light',
      value: value
    });
  }
  changeLanguage(value){
    const {
      changeLanguge
    } = this.props;
    this.setState({isChangeLanguage: value});
    changeLanguge(value ? 'vn' : 'en');
  }
  render() {
    const {
      isChangeLanguage
    } = this.state;
    const {
      screenProps,
      isDart
    } = this.props;
    const {
      Theme,
      language
    } = screenProps;
    return (
      <ScrollView
        contentContainerStyle={{
          ...styles.container,
          ...Theme.backgroundColor
        }}>
        <Toggle
          value={isChangeLanguage}
          styles={Theme}
          label={language.text.changeLanguage}
          onValueChange={this.changeLanguage}
        />
        <Toggle
          value={isDart}
          styles={Theme}
          label={language.text.changeTheme}
          onValueChange={this.onValueChange}
        />
      </ScrollView>
    );
  }
}

export default connectTo(
  state => ({
    isDart: state.theme.isDart
  }),
  {
    changeTheme: (type) => changeTheme(type),
    changeLanguge: (lang) => changeLanguge(lang),
  },
  SettingsScreen
);