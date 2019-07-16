import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title , Content, Text,} from 'native-base';
import {AppRegistry, WebView,} from "react-native";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icons from 'react-native-vector-icons/MaterialIcons';
//import { StackNavigator } from 'react-navigation';

type Props = {};
export default class Heading extends Component<Props> {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu1 = () => {
    this._menu.hide(<Icon
       name=""
       size={24}
      source={{uri: 'https://bitboard.bit-corp.work/users_courses'}}
     />);
  };
  hideMenu2 = () => {
    this._menu.hide(<Icon name="" size={24} />);
  };
  hideMenu3 = () => {
    this._menu.hide(<Icon name="" size={24} />);
  };
  hideMenu4 = () => {
    this._menu.hide(<Icon
      name=""
      size={24}
      source={{url: 'https://bitboard.bit-corp.work/users/login'}}
      />);
  };

  showMenu = () => {
    this._menu.show();
  };
/* goBack = () => {
   this._navigator.pop();
 };*/
  goBack = () => {
    this.props.navigation.navigate()
  };
  render() {

    return (
      <Container>
        <Header>
        <Left>
        <Button transparent
         onPress={() => goBack(null)} title="Go back " >
          <Icon name='arrow-back' />
          <Button transparent
           title="go back" onPress={() => this.props.navigation.goBack()} />

        </Button>
        </Left>
        <Body>
          <Title>ようこそ〇〇さん</Title>
        </Body>
    <Right>
    <Menu
        ref={ this. setMenuRef}
        button ={<Icon onPress={this.showMenu} name='menu'/>}>

        <MenuItem onPress={this.hideMenu1}
         source={{url: 'https://bitboard.bit-corp.work/'}}
        >
        <Icons name="home" size={24}/>　ホーム
        </MenuItem>
       <MenuItem onPress={this.hideMenu2}>
       <Icons name="announcement" size={24}></Icons>お知らせ
        </MenuItem>
        <MenuItem onPress={this.hideMenu3}>
        <Icons name="account-circle" size={24}></Icons>マイページ
        </MenuItem>
        <MenuItem onPress={this.hideMenu4}>
        <Icons name="account-balance" size={24}></Icons><Text>ログアウト</Text>
        </MenuItem>

      </Menu>
    </Right>
  </Header>
       <Content contentContainerStyle={{ flex:1}}>
        <WebView
         source={{uri: 'https://bitboard.bit-corp.work/'}}
         style={{marginTop: 40}}
        />
       </Content>
  </Container>
   );
  }
}
