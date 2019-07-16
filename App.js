import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Text
} from "native-base";
import { AppRegistry, WebView } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import Icons from "react-native-vector-icons/MaterialIcons";
//import { StackNavigator } from 'react-navigation';

export default class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "https://bitboard.bit-corp.work/"
    };
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu1 = () => {
    this.setState({
      source: "https://bitboard.bit-corp.work"
    });
    this._menu.hide(
      <Icon
        name=""
        size={24}
        source={{ uri: "https://bitboard.bit-corp.work/users_courses" }}
      />
    );
  };
  hideMenu2 = () => {
    this._menu.hide(<Icon name="" size={24} />);
  };
  hideMenu3 = () => {
    this.setState({
      source: "https://bitboard.bit-corp.work/users/setting"
    });
    this._menu.hide(<Icon name="" size={24} />);
  };
  hideMenu4 = () => {
    this.setState({
      source: "https://bitboard.bit-corp.work/users/logout/"
    });
    this._menu.hide(
      <Icon
        name=""
        size={24}
        source={{ url: "https://bitboard.bit-corp.work/users/login" }}
      />
    );
  };

  showMenu = () => {
    this._menu.show();
  };
  /* goBack = () => {
   this._navigator.pop();
 };*/
  goBack = () => {
    this.props.navigation.navigate();
  };
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>ようこそ〇〇さん</Title>
          </Body>
          <Right>
            <Menu
              ref={this.setMenuRef}
              button={<Icon onPress={this.showMenu} name="menu" />}
            >
              <MenuItem onPress={this.hideMenu1}>
                <Icons name="home" size={24} />
                　ホーム
              </MenuItem>
              <MenuItem onPress={this.hideMenu2}>
                <Icons name="announcement" size={24} />
                お知らせ
              </MenuItem>
              <MenuItem onPress={this.hideMenu3}>
                <Icons name="account-circle" size={24} />
                マイページ
              </MenuItem>
              <MenuItem onPress={this.hideMenu4}>
                <Icons name="account-balance" size={24} />
                <Text>ログアウト</Text>
              </MenuItem>
            </Menu>
          </Right>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <WebView
            source={{ uri: this.state.source }}
            style={{ marginTop: 40 }}
          />
        </Content>
      </Container>
    );
  }
}
