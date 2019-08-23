import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { viewportWidth, paddingHorizontal } from '../../utils';

const styles = StyleSheet.create({
	card:{
		backgroundColor:'#EB008B',
		borderWidth:0,
    borderRadius:20,
    width: viewportWidth - paddingHorizontal*2,
    padding: paddingHorizontal,
    marginBottom: 10,
    marginHorizontal: paddingHorizontal
	},
	time:{
		fontSize:38,
		color:'#fff'
	},
	notes: {
		fontSize: 18,
		color:'#fff',
		textTransform:'capitalize'
  },
  divider: {
    width: viewportWidth - paddingHorizontal*4,
    borderWidth:1,
    borderColor: '#fff',
    marginVertical:20
  }
});

class ForecastComponent extends Component {

	render() {
		let time;

		// Create a new date from the passed date time
		var date = new Date(this.props.detail.dt*1000);

		// Hours part from the timestamp
		var hours = date.getHours();
		
		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();

		time = hours + ':' + minutes.substr(-2);

		return (
			<View style={styles.card}>
				<Text style={styles.notes}>{this.props.location}</Text>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
					<Image style={{width:100, height:100}} source={{uri:"https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png"}} />
					<Text style={styles.time}>{time}</Text>
				</View>

				<View style={styles.divider} />
				
				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Text style={styles.notes}>{this.props.detail.weather[0].description}</Text>
					<Text style={styles.notes}>{Math.round( this.props.detail.main.temp * 10) / 10 }&#8451;</Text>
				</View>
			</View>
		);
	}
}

export default ForecastComponent;