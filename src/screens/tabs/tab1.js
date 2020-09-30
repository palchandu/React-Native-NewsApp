import React, { Component } from 'react';
import { Alert,ActivityIndicator,SafeAreaView,LogBox} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item, View } from 'native-base';
import { getArticle } from '../../service/news';
import  DataItem  from '../../component/dataitem';
import ModalComponent from '../../component/modalComponent'
export default class tab1 extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            data:null,
            setModalVisible:false,
            modalArticleData:{}
        }
    }

    componentDidMount(){
        getArticle().then(data=>{
            this.setState({
                isLoading:false,
                data:data
            })
        },error=>{
            Alert.alert('Error','Something went wrong!')
        })
    }

    componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }

    handleItemDataOnPress=(articleData)=>{
      this.setState({
        setModalVisible:true,
        modalArticleData:articleData
      })
    }
    handleModalClose=()=>{
      this.setState({
        setModalVisible:false,
        modalArticleData:{}
      })
    }
  render() {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested', // TODO: Remove when fixed
      'missing keys for items'
    ])
      console.log(this.state.data);
      let view=this.state.isLoading?(
        <View>
          <ActivityIndicator animating={this.state.isLoading} />
          <Text style={{marginTop:10}}>Please wait...</Text>
        </View>
      ):(
        <SafeAreaView style={{flex:1}}>
          <List
            dataArray={this.state.data}
            renderRow={(item,index)=>{
              return <DataItem onPress={this.handleItemDataOnPress} data={item} key={index}  />
            }} 
            />
          </SafeAreaView>
      )
    return (
      <Container>
        <Content>
          {view}
        </Content> 
        <ModalComponent 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}