import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, View} from 'react-native';
import {Actions} from 'react-native-router-flux';


class Login extends Component{
  signup() {
		Actions.signup()
	}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        <Text style={styles.welcome}>ClubMeme</Text>
        <Text style={styles.description}>Where fun begins...</Text>
        <TextInput placeholder="Email or Username" style={styles.input}/>
        <TextInput placeholder="Password" 
        secureTextEntry={true}
        style={styles.input}/>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
        <Form type="SignUp"/>
        <View style={styles.signUpText}>
          <Text style={styles.bottomText}>Don't have an account?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.loginText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  loginButton:{
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


export default Login;