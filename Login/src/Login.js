import React, { Component } from 'react';
import { View, Stylesheet, Image } from 'react-native';

class Login extends Component{
    render(){
        return(
            <View  style={styles.container}>
                <View style={styles.container1}/>

                <Image style={styles.imageContainer}
                    source={{
                    uri: "http://cdn.intra.42.fr/users/jobirech.jpg"
                }}/>
            </View>
        );
    }
}

const styles = Stylesheet.create({
container:{
    backgroundColor: 'blue',
    flex: 1,
    justifyContents: 'center',
    alignItems: 'center',
},
container1:{
    flex: 1,
    justifyContents: 'center',
    alignItems: 'center',
}
})

export default Login;