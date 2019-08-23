import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  viewportWidth,
  viewportHeight
} from '../../utils';

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDotStyle: {
    backgroundColor: 'rgba(255, 255, 255, .9)',
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

class SlideShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewportWidth,
      viewportHeight,
      activeIndex: 0
    }
    this.renderPagination = this.renderPagination.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
    this.onPaginationPress = this.onPaginationPress.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }
  goToSlide (pageNum) {
    this.setState({ activeIndex: pageNum });
    this.flatList.scrollToOffset({
      offset: pageNum * this.state.viewportWidth,
    });
  };

  onPaginationPress(index){
    const activeIndexBeforeChange = this.state.activeIndex;
    this.goToSlide(index);
    this.props.onSlideChange && this.props.onSlideChange(index, activeIndexBeforeChange);
  };
  renderPagination(){
    const {
      data
    } = this.props;
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.dot,
                  i === this.state.activeIndex
                    ? styles.activeDotStyle
                    : styles.dotStyle,
                ]}
                onPress={() => this.onPaginationPress(i)}
              />
            ))}
        </View>
      </View>
    );
  };
  onMomentumScrollEnd(e){
    const offset = e.nativeEvent.contentOffset.x;
    const newIndex = parseInt(offset / this.state.viewportWidth);
    if (newIndex === this.state.activeIndex) {
      return;
    }
    const lastIndex = this.state.activeIndex;
    this.setState({ activeIndex: newIndex });
    this.props.onSlideChange && this.props.onSlideChange(newIndex, lastIndex);
  };
  renderItem (flatListArgs){
    const { viewportWidth, viewportHeight } = this.state;
    const props = { ...flatListArgs, dimensions: { width: viewportWidth, height: viewportHeight } };
    return (
      this.props.renderItem(props)
    );
  };
  render() {
    const {
      renderItem,
      data,
      slideShowStyle,
      ...otherProps
    } = this.props;
    return (
      <View style={slideShowStyle}>
        <FlatList
          ref={ref => (this.flatList = ref)}
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.flatList}
          keyExtractor={(item, index) => `${index}`}
          renderItem={this.renderItem}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          {...otherProps}
        />
        {this.renderPagination()}
      </View>
    );
  }
}

export default SlideShow