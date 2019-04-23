import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Loginform from './Loginform';

class Login extends Component{
    render(){
        return(
           <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require('./components/Images/batman.png')}/>
                </View>
               <Text> Hello Yellow</Text>
               <View style={styles.formContainer}>
                    <Loginform />
                </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        height: 100,
    }
})

export default Login;