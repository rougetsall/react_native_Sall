/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Afficher from "./components/afficher"




export default class App extends React.Component {
  render() {
    return (
      <Afficher />
     
    );
  }
  
}



// constructor() {
//   super();
//   this.dat=[{journombre:5,jours:"tue"},
//               {journombre:6,jours:"Wed"},
//               {journombre:7,jours:"Fri"},
//               {journombre:8,jours:"Sat"},
//               {journombre:9,jours:"Sun"}
//           ];

// }