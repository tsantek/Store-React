import React, { Component } from 'react';


class Total extends Component {
    render() {

        console.log(this.state);
        return (
            <div className="total">
               <h3> Total: {this.props.total}</h3>
            </div>
        );
    }
}

export default Total;
