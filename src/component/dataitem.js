import React, { Component } from 'react';
import { ListItem,Left,Thumbnail,Body,Text,Right,Button, View} from 'native-base'
import TimeAgo from './time';
import moment from 'moment'
export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.data=props.data
    this.key=props.key_data
  }
  handlePress=()=>{
    const {url,title}=this.data;
    this.props.onPress({url,title});
  }
  render() {
    return (
        <ListItem thumbnail key={moment(this.data.publishedAt).unix()}>
        <Left>
          <Thumbnail square source={this.data.urlToImage?{ uri: this.data.urlToImage}:{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>{this.data.description}</Text>
          <View style={{flex:1,flexDirection:'row'}}>
            <Text note>{this.data.source.name}</Text>
            <TimeAgo time={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
