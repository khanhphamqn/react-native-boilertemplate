import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import SlideShow from '../../components/slideshow';
import {
  paddingHorizontal,
} from '../../utils';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paddingHorizontal: {
    paddingHorizontal: paddingHorizontal
  },
  slideShowStyle: {
    height: 200,
  }
});




const data = [
  {
    text: 'My name is Pham Quoc Khanh. I am 36 years old',
  },
  {
    text: 'I do have more than 7 years experience in frontend. Currently I am a freelancer',
  },
  {
    text: 'I am truely finding a full time Frontend job. If you are interested me kindly contact via my email'
  },
];


class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }
  renderItem ({ item, dimensions }) {
    const {
      Theme
    } = this.props.screenProps
    return (
    <View
      style={[
        styles.mainContent,
        {
          width: dimensions.width,
          ...Theme.backgroundColorSlider,
        },
      ]}
    >
      <View style={styles.paddingHorizontal}>
        <Text style={Theme.header}>{item.text}</Text>
      </View>
    </View>
  )};

  render() {
    const {
      screenProps
    } = this.props;
    const {
      Theme
    } = screenProps;
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          ...styles.container,
          ...Theme.backgroundColor
        }}>
        <SlideShow
          slideShowStyle={styles.slideShowStyle}
          data={data}
          renderItem={this.renderItem}
          extraData={Theme}
        />
      </ScrollView>
    );
  }
}

export default HomeScreen;