import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import InputBox from './components/InputBox';
import ImgBox from './components/ImgBox';
export default class App extends React.Component {
  state = {
    txtBoxVisible: false,
    user: ''
  };
  opentxtBox = () => {
    this.setState({
      txtBoxVisible: true
    });
  };

  closetxtBox = (name) => {
    this.setState({
      txtBoxVisible: false,
      user: name
    })
  }
  render() {
    return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
      }}>
        {
        this.state.txtBoxVisible ? 
        <InputBox closetxtBox={this.closetxtBox} /> :
        <TouchableHighlight onPress={this.opentxtBox}>
          <Text>Kon'nichiwa sekai!</Text>
        </TouchableHighlight> 
        }
        {
        this.state.user ?
        <ImgBox user={this.state.user} /> : 
        <View></View>
        }
      </View>
    );
  }
}
