import React, {Component} from 'react';
import Login  from './src/Login';

export default class App extends Component {
  render() {
    return (
        <Login />
    );
  }
}



// import React, { Component } from 'react';
// import { Alert, Button, StyleSheet, View, Text } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton(){
//     Alert.alert("you pressed the button")
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <Button style={styles.login}
//           onPress={this._onPressButton}
//           title="Login"
//           />
//         <Text>HOPE U APPEAAR KATIKATO</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//    backgroundColor: '#fff',
//    alignItems: 'center',
//   },
//   login:{
//     backgroundColor: 'red',
//     justifyContent: 'flex-end',
//   },
// });
