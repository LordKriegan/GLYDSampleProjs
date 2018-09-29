import React, { Component } from 'react';
import './App.css';
import Foo from './components/Foo';
import Bar from './components/Bar';
import Controller from './components/Controller';

class App extends Component {
  state = {
    foobar: true
  }
  chgFooBar = () => {
    this.setState({
      foobar: !this.state.foobar
    }, () => {
      console.log("TEST!", this.state.foobar)
    })
    
  }
  render() {
    return (
      <div class="container" style= {{
        paddingTop: "25px"
      }}>
        <div class="row">
          <Controller chgFooBar={this.chgFooBar} />
        </div>
        <div class="row">
          {this.state.foobar ? <Foo /> : <Bar />}
        </div>
      </div>
    );
  }
}

export default App;
