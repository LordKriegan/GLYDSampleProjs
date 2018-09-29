import React, { Component } from 'react';
import {Platform, View, Image, TouchableOpacity, Text } from 'react-native';

class ImgBox extends Component {
  state = {
    location: '',
  };
  componentDidMount() {
    geolocation.getCurrentPosition(pos => {
      this.setState({
        location: {
          lat: JSON.stringify(pos.coords.latitude),
          long: JSON.stringify(pos.coords.longitude),
        },
      });
    });
  }
  shareImg = () => {
    let shareOpts = {};
    if (Platform.OS === "ios") {
      shareOpts.url = 'https://lh3.googleusercontent.com/--8F8OajU2S8/Wg7SBWjExII/AAAAAAAAFnM/BKdkLVYELzwm0jhHdEMHGLbjmjc8MNcKACJoC/w530-h691-n/images%252520%252816%2529.jpg'
    } else {
      shareOpts.message = 'https://lh3.googleusercontent.com/--8F8OajU2S8/Wg7SBWjExII/AAAAAAAAFnM/BKdkLVYELzwm0jhHdEMHGLbjmjc8MNcKACJoC/w530-h691-n/images%252520%252816%2529.jpg'
    }
    Share.share(shareOpts).then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.shareImg}>
          <Image
            style={{
              height: 400,
              width: 300,
            }}
            source={{
              uri:              'https://lh3.googleusercontent.com/--8F8OajU2S8/Wg7SBWjExII/AAAAAAAAFnM/BKdkLVYELzwm0jhHdEMHGLbjmjc8MNcKACJoC/w530-h691-n/images%252520%252816%2529.jpg',
            }}
          />
        </TouchableOpacity>
        <Text>Your name is {this.props.user}</Text>
        {this.state.location ? (
          <Text>
            I FOUNDZEDDD YOUUU! You are at {this.state.location.latitude},{' '}
            {this.state.location.longitude}!!
          </Text>
        ) : (
          <Text>I iz lookin for you.....</Text>
        )}
      </View>
    );
  }
}

export default ImgBox;
