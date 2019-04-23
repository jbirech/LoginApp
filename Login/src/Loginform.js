import React, {Component} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Loginform extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <TextInput placeholder="email or username" style={Styles.input} />
                <TextInput placeholder="password" style={Styles.input} />
            </View>
        );
    }
}

const Styles = StyleSheet.create({
container:{
    padding: 4,
},
input:{
    backgroundColor:'#fff',
    height:40,
    marginBottom: 20,
}
});