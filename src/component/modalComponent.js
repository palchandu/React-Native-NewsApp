import React, { Component } from 'react';
import { Dimensions,Modal,Share,ActivityIndicator,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import {Container,Header,Content,Body,Left,Right,Icon,Title,Button} from 'native-base'
const webViewHeight=Dimensions.get('window').height-56;
class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClose=()=>{
      return this.props.onClose();
  }
  handleShare=()=>{
    const {url,title}=this.props.articleData
    var message=`${title}\n\nRead More @${url}\n\n Shared via RN News App`;
    return Share.share(
        {title,message,url:message},
        {dialogTitle:`Share ${title}`}
    );
  }
  render() {
      const {showModal,articleData}=this.props
      const {url}=articleData
      const ActivityIndicatorElement = () => {
        return (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.activityIndicatorStyle}
          />
        );
      };

      if(url!=undefined && url!=null){
        return (
        <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}
        >
            <Container style={{margin:15,marginBottom:0,backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#009387'}}>
                    <Left>
                        <Button onPress={this.handleClose}>
                            <Icon name="close" style={{color:'white',fontSize:12,width:12}}/>
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right>
                    <Button onPress={this.handleShare}>
                            <Icon name="share" style={{color:'white',fontSize:12}}/>
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={{height:webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}} renderLoading={ActivityIndicatorElement}
                            onError={this.handleClose} startInLoadingState javaScriptEnabled scrollEnabled
                        />
                </Content>
            </Container>
        </Modal>
        );
      }else{
          return null;
      }
  }
}
const styles = StyleSheet.create({

    activityIndicatorStyle: {
      flex: 1,
      justifyContent: 'flex-start',
    },
  });

export default ModalComponent;
