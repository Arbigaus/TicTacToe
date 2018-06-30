import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Platform,
  Animated,
  Button,
  Text,
  View
} from 'react-native';

import X from './src/X';
import O from './src/O';

export default class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      opacityA1: new Animated.Value(1),
      opacityA2: new Animated.Value(1),
      opacityA3: new Animated.Value(1),
      opacityB1: new Animated.Value(1),
      opacityB2: new Animated.Value(1),
      opacityB3: new Animated.Value(1),
      opacityC1: new Animated.Value(1),
      opacityC2: new Animated.Value(1),
      opacityC3: new Animated.Value(1),
      status:1,
      info:'',
      turn:'x',
      a1:'',
      a2:'',
      a3:'',
      b1:'',
      b2:'',
      b3:'',
      c1:'',
      c2:'',
      c3:''
    };

  this.clicou = this.clicou.bind(this);
  this.restart = this.restart.bind(this);
  this.check = this.check.bind(this);
  this.opacity = this.opacity.bind(this);
  this.returnOpacity = this.returnOpacity.bind(this);

  }

  clicou(p){
    let state = this.state;    

    if (eval('state.'+p) == '' && state.status == 1) {

      eval('state.'+p+' = state.turn');
      if(state.turn == 'x'){
        state.turn = 'o';
      } else {
        state.turn = 'x';
      }

    }

    this.setState(state);

    this.check('o');
    this.check('x');
  }

  opacity(i){

    Animated.timing(
      eval('this.state.'+i),
      { 
        toValue:0.3, 
        duration:1000 
      }
    ).start();
  }

  returnOpacity(i){
    Animated.timing(
      eval('this.state.'+i),
      { 
        toValue:1, 
        duration:100 
      }
    ).start();
  }

  check(i){
    let s = this.state; 

    // Hortizontal   
    
    if(s.a1 == i && s.b1 == i && s.c1 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA2');
      this.opacity('opacityA3');
      this.opacity('opacityB2');
      this.opacity('opacityB3');
      this.opacity('opacityC2');
      this.opacity('opacityC3');
    }
    
    if(s.a2 == i && s.b2 == i && s.c2 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA1');
      this.opacity('opacityA3');
      this.opacity('opacityB1');
      this.opacity('opacityB3');
      this.opacity('opacityC1');
      this.opacity('opacityC3');
    }
    if(s.a3 == i && s.b3 == i && s.c3 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA1');
      this.opacity('opacityA2');
      this.opacity('opacityB1');
      this.opacity('opacityB2');
      this.opacity('opacityC1');
      this.opacity('opacityC2');
    }

    // Vertical
    
    if(s.a1 == i && s.a2 == i && s.a3 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityB1');
      this.opacity('opacityB2');
      this.opacity('opacityB3');
      this.opacity('opacityC1');
      this.opacity('opacityC2');
      this.opacity('opacityC3');
    }
    if(s.b1 == i && s.b2 == i && s.b3 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA1');
      this.opacity('opacityA2');
      this.opacity('opacityA3');
      this.opacity('opacityC1');
      this.opacity('opacityC2');
      this.opacity('opacityC3');
    }
    if(s.c1 == i && s.c2 == i && s.c3 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA1');
      this.opacity('opacityA2');
      this.opacity('opacityA3');
      this.opacity('opacityB1');
      this.opacity('opacityB2');
      this.opacity('opacityB3');
    }

    // Diagonal

    if(s.a1 == i && s.b2 == i && s.c3 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA2');
      this.opacity('opacityA3');
      this.opacity('opacityB1');
      this.opacity('opacityB3');
      this.opacity('opacityC1');
      this.opacity('opacityC2');
    }
    if(s.a3 == i && s.b2 == i && s.c1 == i) {
      s.info = i.toUpperCase()+' Ganhou!!';
      s.status = 0;
      this.opacity('opacityA1');
      this.opacity('opacityA2');
      this.opacity('opacityB1');
      this.opacity('opacityB3');
      this.opacity('opacityC2');
      this.opacity('opacityC3');
    }

    if(s.status == 1) {
      if( s.a1 != '' && s.a2 != '' && s.a3 != '' &&
          s.b1 != '' && s.b2 != '' && s.b3 != '' &&
          s.c1 != '' && s.c2 != '' && s.c3 != ''
        ) {          
          s.info = 'EMPATE!!';
          s.status = 0;

      }
    }

    this.setState(s);
  }

  restart(){    
    let state = this.state;

    state.status = 1;
    state.info = '';
    state.turn = 'x';

    for (var i = 1; i < 4; i++) {
      this.returnOpacity('opacityA'+i);
      this.returnOpacity('opacityB'+i);
      this.returnOpacity('opacityC'+i);
      
      eval('state.a'+i+' = ""');
      eval('state.b'+i+' = ""');
      eval('state.c'+i+' = ""');
    }

    // alert(state.opacityC1);

    this.setState(state);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.area}>
          <View style={[styles.columns, {borderLeftWidth:0}]} >
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('a1')}} underlayColor='#EEEEEE' onPress={()=>{this.clicou('a1')}} style={[styles.rows, {borderTopWidth:0}]}>
            <Animated.View style={{opacity:this.state.opacityA1}}>
              {this.state.a1 == 'x' && <X />}
              {this.state.a1 == 'o' && <O />}
            </Animated.View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('a2')}} style={styles.rows}>
              <Animated.View style={{opacity:this.state.opacityA2}}>
                {this.state.a2 == 'x' && <X />}
                {this.state.a2 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('a3')}} style={styles.rows}>
              <Animated.View style={{opacity:this.state.opacityA3}}>
                {this.state.a3 == 'x' && <X />}
                {this.state.a3 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
          </View>
          <View style={styles.columns} >
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('b1')}} style={[styles.rows, {borderTopWidth:0}]}>
              <Animated.View style={{opacity:this.state.opacityB1}}>
                {this.state.b1 == 'x' && <X />}
                {this.state.b1 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('b2')}} style={styles.rows}>
              <Animated.View style={{opacity:this.state.opacityB2}}>
                {this.state.b2 == 'x' && <X />}
                {this.state.b2 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('b3')}} style={styles.rows}>
              <Animated.View style={{opacity:this.state.opacityB3}}>
                {this.state.b3 == 'x' && <X />}
                {this.state.b3 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
          </View>
          <View style={styles.columns} >
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('c1')}} style={[styles.rows, {borderTopWidth:0}]}>
              <Animated.View style={{opacity:this.state.opacityC1}}>
                {this.state.c1 == 'x' && <X />}
                {this.state.c1 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('c2')}} style={styles.rows}>
              <Animated.View style={{opacity:this.state.opacityC2}}>
                {this.state.c2 == 'x' && <X />}
                {this.state.c2 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={()=>{this.clicou('c3')}} style={styles.rows}>
              <Animated.View style={{opacity:this.state.opacityC3}}>
                {this.state.c3 == 'x' && <X />}
                {this.state.c3 == 'o' && <O />}
              </Animated.View>
            </TouchableHighlight>
          </View>

        </View>

        <View style={styles.infoArea} >
          <View style={styles.infoTurn} >
            <Text>Vez de:</Text>
            {this.state.turn == 'x' && <X />}
            {this.state.turn == 'o' && <O />}
          </View>

          <View style={styles.infoWarn} >
             <Text>{this.state.info}</Text>
          </View>
        </View>

        <View style={styles.viewButton} >
          <Button title="Reiniciar" onPress={()=>{this.restart()}} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  area:{
    width:300,
    height:300,
    flexDirection: 'row'
  },
  columns: {
    flex:1,    
    borderLeftWidth: 5,
    borderLeftColor: '#000000'
  },
  rows: {
    flex:1,
    borderTopWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#000000'
  },
  infoArea:{
    marginTop: 30,
    flexDirection: 'row'
  },
  infoTurn:{
    width: 90,
    height: 90,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',    
    padding: 5
  },
  infoWarn:{
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',  
    padding: 5
  },
  viewButton:{
    marginTop: 30
  }
});
