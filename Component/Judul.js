import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';

import Biodata from './Biodata';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
            <Biodata/>
			<Image source ={require('./foto.jpg')} style={{width: 200, height: 200}}/> 
			<Text style = {warna.adel}> Hoi Hoi !! </Text>
			<Text style = {salon.feli} > Felisiana Ardelia Azzahra</Text>
			<Text style = {salon.feli} > XI RPL 2 </Text>
			<Text style = {salon.feli} > SMK TELKOM Purwokerto</Text>
			   <Text style = {{ marginBottom : 50}}></Text>
			   <Button title = " Next " color = "#0984e3" onPress = {() => {this.redirect()}}/>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container : {
	flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#74b9ff',
	}
});
const warna = {
	adel  : {
		color : "white",
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	feli : {
		color : "white",
		fontSize : 20,
	}
}