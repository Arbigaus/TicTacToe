import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export default class X extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	height: new Animated.Value(0),
	  	width: new Animated.Value(0)
	  };

	  Animated.timing(
	  	this.state.height,
	  	{ toValue:60, duration:600, easing:Easing.elastic(1.3) }
	  ).start();	

	  Animated.timing(
	  	this.state.width,
	  	{ toValue:60, duration:600, easing:Easing.elastic(1.3) }
	  ).start();

	}

	render() {

		return (
			<Animated.View style={styles.area} >
				<Animated.View style={[styles.circle, {height:this.state.height, width:this.state.width} ]} ></Animated.View>
			</Animated.View>	

		);

	}

}

const styles = StyleSheet.create({
	area: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	circle: {		
		borderRadius: 30,
		backgroundColor: '#0000FF',		
	}
});