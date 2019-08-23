import React,  { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    elevation: 2
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class TabBarComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {
      activeTintColor,
      inactiveTintColor,
      navigation,
      screenProps
    } = this.props;

    const {
      language
    } = screenProps;

    const routes = navigation.state.routes[0].routes;
    const activeRouteIndex = routes[routes.length -1].routeName;
    const tabs = Object.keys(navigation.router.childRouters.Home.childRouters);
    return(<View style={styles.container}>
      {tabs.map((route, routeIndex) => {
        const isRouteActive = route === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
        return(
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => {
              navigation.navigate(route);
            }}
            onLongPress={() => {
              navigation.navigate(route);
            }}
          >
            <Text style={{
              color: tintColor
            }}>{language.screen.tabBarLabel[route.toLowerCase()]}</Text>
          </TouchableOpacity>
          )
      } )}
    </View>)
  }
}

export default TabBarComponent;