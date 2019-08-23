import React, { Component, Fragment } from 'react';
import {
  View , 
  StyleSheet, 
  ActivityIndicator
} from 'react-native';
import {
  connectTo
} from '../../utils';

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  centerScreen: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});
class LoadingComponent extends Component {
  render(){
    const {
      isLoading,
      Theme
    } = this.props;
    return(
      <Fragment>
        {isLoading && <View style={styles.constainer}>
          <ActivityIndicator style={styles.centerScreen} size="large" color={Theme.colors.main.color}/>
        </View>}
      </Fragment>
    )
  }
}

export default connectTo(
  state => ({
    isLoading: state.loading.isLoading,
    Theme: state.theme.type,
  }),
  {

  },
  LoadingComponent
);