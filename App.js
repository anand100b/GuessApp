import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';


export default class Game extends Component{
  //set initial state
  state = {
    secret : 0,
    input: '',
    feedback: ''

  }

  //function to pick a random number
  generateRandom(){
    return Math.round( Math.random() * 100 )
 }

 //function to initialize the game
 init(){
  const secretNumber = this.generateRandom()
  this.setState({secret: secretNumber})
 }


//lifecycle function
componentDidMount(){
  this.init()
}

//update input state when user enters their guess
updateInput = (value) => {
  this.setState({input: value})
}

//check the value
checkGuess = () =>{
  const userGuess = parseInt(this.state.input);
  const secretNumber = this.state.secret;
  if(userGuess==secretNumber){
    this.setState({feedback:'You guessed right, the number is ' + secretNumber})
    this.init()
    return
  }
  if(userGuess<secretNumber){
    this.setState({feedback:'The number is larger than'+ userGuess})
  }
  if(userGuess>secretNumber){
    this.setState({feedback:'The number is smaller than'+ userGuess})

  }
  return
}

  render () {
    return (
      <View style ={styles.container}>
        <Text style={styles.text}>Guess my number, now</Text>
        <TextInput 
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={this.updateInput}>
        </TextInput>

        <TouchableHighlight 
        style = {styles.button}
        underlayColor='white'
        onPress={this.checkGuess}>
        <Text>Submit Guess</Text>
        </TouchableHighlight>
    <Text>{this.state.feedback}</Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
width:115,
padding :10,
backgroundColor: 'lightblue',
marginTop:20,
alignItems:'center'
},

  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color: '#ff33ff',
    fontSize:32,
  },
  input:{
    backgroundColor:'#ffffff',
    width :115,
    marginTop:20,
    padding:10,
    textAlign:'center'
  }
});
