
import React, { Component, Fragment } from 'react';
import {
  SafeAreaView
} from 'react-native';
import HomeScreen from './home';
import SettingsScreen from './setting';
import ForecastScreen from './forecast';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { connectTo } from '../utils';
import LoadingComponent from '../components/loading';
import TabBarComponent from '../components/tabBar';
import {
  Lang
} from '../langs';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Setting: {
    screen: SettingsScreen
  },
  Forecast: {
    screen: ForecastScreen
  }
}, {
  headerMode: 'none',
  mode: 'modal',
});


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator
  }
},{
  tabBarComponent: props => {
    return (
      <TabBarComponent
      {...props}
    />
    )},
  tabBarOptions: {
    activeTintColor: "#EB008B",
    inactiveTintColor: "#ddd"
  }
});

export const ScreenController = createAppContainer(TabNavigator);

class Container extends Component {
  render() {
    const {
      language,
      Theme
    } = this.props;
    const lang = Lang.config(language);
    return (
      <Fragment>
        <SafeAreaView style={{
          flex: 1
        }}>
          <ScreenController
            screenProps={{
              language: lang,
              Theme: Theme
            }}
          />
        </SafeAreaView>
        <LoadingComponent/>
      </Fragment>
    );
  }
}

export default connectTo(
  state => ({
    language: state.lang,
    Theme: state.theme.type
  }),
  {
  },
  Container
);