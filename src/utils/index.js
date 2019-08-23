import { Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export const IS_ANDROID = Platform.OS == 'android';
export const paddingHorizontal = 15;

export const connectTo = (mapStateToProps, actions, Container) => {
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
}

export function isIphoneX() {
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&

    // Check either, iPhone X or XR
    (isIPhoneXSize() || isIPhoneXrSize())
  );
}

export function isIPhoneXSize() {
  return viewportHeight == 812 || viewportWidth == 812;
}

export function isIPhoneXrSize() {
  return viewportHeight == 896 || viewportWidth == 896;
}

export function isIPhone() {
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&

    // Check either, iPhone X or XR
    (isIPhone678() || isIPhone678Plus())
  );
}


export function isIPhone678() {
  return viewportHeight == 667 || viewportWidth == 667
}

export function isIPhone678Plus() {
  return viewportHeight == 736 || viewportWidth == 736
}