import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import ImgBox from './ImgBox';

class InputBox extends React.Component {
  state = {
    user: ''
  }

  handleInput = (name) => {
    this.props.closetxtBox(name)
  }
  render() {
    return (
      <View style={{ width: Dimensions.get('window').width }}>
        {this.state.changeBox 
         ? <ImgBox user={this.state.user} />
         : <TextInput onChangeText={(user) => this.setState({ user })} onSubmitEditing={() => this.handleInput(this.state.user)} style={{height: 40, borderColor: 'gray', borderWidth: 1}} value={this.state.user} />
        }
        
      </View>
    );
  }
}

export default InputBox;