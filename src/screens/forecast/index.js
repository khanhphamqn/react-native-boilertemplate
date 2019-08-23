import React,  { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import ForecastComponent from '../../components/forecastCard';
import { connectTo } from '../../utils';
import { loadingChanged } from '../../actions/loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class ForecastScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
			latitude: 0,
			longitude: 0,
			forecast: [],
			error:''
    };
    this.getWeather = this.getWeather.bind(this);
  }
  componentDidMount(){
    const {
      loadingChanged
    } = this.props;
    loadingChanged(true);
		this.getLocation();
	}
  getLocation(){
		Geolocation.getCurrentPosition(
			(position) => {
				this.setState(
					(prevState) => ({
					latitude: position.coords.latitude, 
					longitude: position.coords.longitude
					}), () => { this.getWeather(); }
				);
			},
			(error) => this.setState({ forecast: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);
  }
  getWeather(){
    const {
      loadingChanged
    } = this.props;
    loadingChanged(true);
		let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=849338767c0e95025b5559533d26b7c4';

		fetch(url)
		.then(response => response.json())
		.then(data => {
			this.setState(() => ({
				forecast: data
      }));
      loadingChanged(false);
		})
	}
  render() {
    const {
      screenProps
    } = this.props;
    const {
      Theme
    } = screenProps;
    return (
      <ScrollView
        contentContainerStyle={{
          ...styles.container,
          ...Theme.backgroundColor
        }}>
        <FlatList data={this.state.forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_txt} renderItem={({item}) => <ForecastComponent detail={item} location={this.state.forecast.city.name} />} /> 
      </ScrollView>
    );
  }
}

export default connectTo(
  state => ({
  }),
  {
    loadingChanged: (status) => loadingChanged(status),
  },
  ForecastScreen
);