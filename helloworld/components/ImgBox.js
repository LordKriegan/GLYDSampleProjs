import React from 'react';
import { Platform, Share, View, Image, TouchableOpacity, Text } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

const imgUrl = 'https://lh3.googleusercontent.com/--8F8OajU2S8/Wg7SBWjExII/AAAAAAAAFnM/BKdkLVYELzwm0jhHdEMHGLbjmjc8MNcKACJoC/w530-h691-n/images%252520%252816%2529.jpg';
class ImgBox extends React.Component {

  state = {
    location: '',
    errorMsg: ''
  };
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  shareImg = () => {
    let shareOpts = {};
    if (Platform.OS === "ios") {
      shareOpts.url = imgUrl;
    } else {
      shareOpts.message = imgUrl;
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
              uri: imgUrl,
            }}
          />
        </TouchableOpacity>
        <Text>Your name is {this.props.user}</Text>
        {this.state.location 
          ? <Text>
            I FOUNDZEDDD YOUUU! You are at {JSON.stringify(this.state.location.coords.latitude)}, {JSON.stringify(this.state.location.coords.longitude)}!!
            </Text>
         :  <Text>I iz lookin for you.....</Text>
          }
        {this.state.errorMsg 
         ? <Text> But I can't findzded you... :(</Text>
         : <View></View>
         }
      </View>
    );
  }
}

export default ImgBox;
