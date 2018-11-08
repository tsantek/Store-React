import React, { Component } from 'react';

class Receipt extends Component {

    render() {
        return (
            <div>
                <ul className="receipt">
                    {this.props.coffes.map(coffe => coffe.count > 0 &&
                        <li key={coffe.id}>
                            <p className="coffe-name">{coffe.name}</p>
                            <p className="coffe-price">{coffe.price}$</p>
                            <p className="coffe-count">Count: {coffe.count}</p>
                            <button onClick={() =>this.props.handleRemove(coffe)} className="btn btn-danger button-remove">REMOVE</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Receipt;