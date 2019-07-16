import React, {Component} from "react";
import {AppRegistry, } from "react-native";
import App from './App';
import {name as appName} from './app.json';


/*class BitBoard extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://bitboard.bit-corp.work/'}}
        style={{marginTop: 40}}
      />
    );
  }
}*/

AppRegistry.registerComponent('BitBoard', () => App);
