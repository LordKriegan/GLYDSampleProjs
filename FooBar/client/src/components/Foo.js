import React, { Component } from 'react';
import FooImg from './images/foo.jpg'
class Foo extends Component {
    render() {
        return (
            <div class="col-sm-6">
                <div class="jumbotron d-flex justify-content-center align-items-center">
                    <img alt="" src={FooImg} style= {{
                        height: "250px",
                        width: "250px"
                    }} />
                </div>                
            </div>
        );
    }
}

export default Foo;