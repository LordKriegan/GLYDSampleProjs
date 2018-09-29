import React, {Component} from 'react';
import {Image} from 'react-native';
import ImgFile from './images/nani.jpg'
class ImgBox extends Component {
  render() {
    return (
      <Image source={ImgFile} />
    );
  }
}

export default ImgBox;