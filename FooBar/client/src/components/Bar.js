import React, { Component } from 'react';
import BarImg from './images/bar.jpg';
class Bar extends Component {
    render() {
        return (
            <div class="col-sm-6 offset-sm-6">
                <div class="jumbotron d-flex justify-content-center align-items-center">
                    <img alt="" src={BarImg} style= {{
                        height: "250px",
                        width: "250px"
                    }} />
                </div>            
            </div>
        );
    }
}

export default Bar;