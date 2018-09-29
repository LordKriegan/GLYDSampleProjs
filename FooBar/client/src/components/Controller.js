import React, { Component } from 'react';

class Controller extends Component {
    render() {
        return (
            <div class="col-sm-6 offset-sm-3">
                <div class="jumbotron d-flex justify-content-center align-items-center">
                    <div class="form-check">
                        <input onClick={this.props.chgFooBar} class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label h4" for="defaultCheck1">
                            Smash the checkbox to see the magic!
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controller;