
import React, { Component } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { Container, Header, Content, Tab, Tabs,Left, Body, Right, Title,Text, View } from 'native-base';
const { width } = Dimensions.get('window');
export default class NoInternet extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#009387'}} noLeft hasTabs >
        <Left/>
          <Body>
            <Title>News App</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
                <View style={styles.offlineContainer}>
                    <Text style={styles.offlineText}>
                        No Internet Connection.
                    </Text>
                </View>
                <View style={styles.welcome_section}>
                    <Text style={{textAlign:'center'}}>Welcome To News App</Text>
                    <Text style={{textAlign:'center'}} numberOfLines={2}>Enable your internet connection and enjoy news</Text>
                </View>
            </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    offlineContainer: {
       backgroundColor: '#b52424',
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'row',
    },
    offlineText: { color: '#fff' },
    welcome_section:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'#C1C1C1',
        justifyContent:'center',
        flexWrap:'wrap',
    }
  });

