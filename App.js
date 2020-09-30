import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabScreen from './src/screens/TabScreen'
import NetInfo from "@react-native-community/netinfo";
import NoInternet from './src/screens/NoInternet';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected:true
    };
  }

  componentDidMount() {
    //NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    NetInfo.addEventListener(state=>{
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({
        isConnected:state.isConnected
      })
    })
  }

  componentWillUnmount() {
    //NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    NetInfo.addEventListener(state=>{
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({
        isConnected:state.isConnected
      })
    })
 }

  render() {
    return (
      this.state.isConnected?<TabScreen />:<NoInternet />
    );
  }
}
