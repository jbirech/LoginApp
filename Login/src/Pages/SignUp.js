import React, {Component} from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View } from 'react-native';

class SignUp extends Component{
    _onpressButton(){
      alert("Registered succesfull")
    }
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
  
          <Text style={styles.welcome}>ClubMeme</Text>
          <Text style={styles.description}>Where the fun is...</Text>
          
          <TextInput 
            placeholder="Email" 
            style={styles.input}/>
            <TextInput 
            placeholder="Confirm Email" 
            style={styles.input}/>
            <TextInput 
            placeholder="Username" 
            style={styles.input}/>
          
          <TextInput placeholder="Password" 
            secureTextEntry={true}
            style={styles.input}/>
            <TextInput placeholder="Confirm Password" 
            secureTextEntry={true}
            style={styles.input}/>
          
          <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.signUpButton}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.signUpText}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <TouchableOpacity onPress={this._onpressButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          
        </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#60496C',
      paddingHorizontal: 10,
    },
    welcome: {
      fontSize: 50,
      textAlign: 'center',
    },
    input: {
      width: 200,
      height: 40,
      color: '#333333',
      textAlign: 'center',
      marginBottom: 5,
      marginTop: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    button:{
      backgroundColor: '#660066',
      paddingHorizontal: 80,
      paddingVertical: 10,
      marginTop: 10,
      borderRadius: 5,
    },
    signUPButton:{
      fontSize: 20,
    },
    description:{
      marginBottom: 60,
    },
    signUpText:{
     flexDirection:'row',
     paddingVertical: 30,
    },
    bottomText:{
        alignItems: 'flex-end',
        fontSize: 20,
    },
    loginText:{
        fontSize: 20,
        color: '#660066',
    }
   });

export default SignUp;