import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export default class LineH extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	width: new Animated.Value(0)	  	
	  };

	  Animated.timing(
	  	this.state.width,
	  	{ toValue:300, duration:2000, easing:Easing.elastic(1.5) }
	  ).start();

	}

	render() {

		let w = this.state.width.interpolate({
			inputRange:[0, 300],
			outputRange:['0%', '100%']
		});

		return (
			<Animated.View style={styles.area} >
				<Animated.View style={[styles.arrow, {width:w} ]} ></Animated.View>				
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
	arrow: {
		width: 8,
		height: 3,
		borderRadius: 1.5,
		position: 'relative',
		backgroundColor: '#FF0000',		
	}
});