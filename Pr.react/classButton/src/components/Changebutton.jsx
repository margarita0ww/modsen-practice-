import React, { Component } from 'react';

class Changebutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }
clickButton = () => {
    this.setState ((prevState) => ({
        isShow : !prevState.isShow
    })
    
    );
}

render () {
    return (
        <button onClick={this.clickButton}>
            {this.state.isShow ? 'hide' : 'show'}
        </button>
    );
}


}
export default Changebutton;