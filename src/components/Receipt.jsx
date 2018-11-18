import React, { Component } from 'react';

class Receipt extends Component {

    render() {
        return (
            <div>
                <ul className="receipt">
                    {this.props.coffees.map(coffee => coffee.count > 0 &&
                        <li key={coffee.id}>
                            <p className="coffee-name">{coffee.name}</p>
                            <p className="coffee-price">{coffee.price}$</p>
                            <p className="coffee-count">Count: {coffee.count}</p>
                            <button onClick={() =>this.props.handleRemove(coffee)} className="btn btn-danger button-remove">REMOVE</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Receipt;