import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import ImgBox from './components/ImgBox';
class App extends Component {
  render() {
    state = {
      imgBoxVisible: false
    }
    openImgBox = () => {
      this.setState({
        imgBoxVisible: !this.state.imgBoxVisible
      })
    }
    return (
      <View>
        <TouchableHighlight onClick={this.openImgBox}>Kon'nichiwa sekai!</TouchableHighlight>
        {this.state.imgBoxVisible ? <ImgBox /> : ""}
      </View>
    );
  }
}

export default App;