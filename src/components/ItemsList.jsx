import React, { Component } from 'react';

class ItemsList extends Component {


    render() {
        return (
            <ul>
                {this.props.coffees.map(coffee => {
                    return (
                        <li onClick={() => this.props.handleAdd(coffee)} key={coffee.id}>
                            <p>{coffee.name}</p>
                            <p>{coffee.price}$</p>
                        </li>
                    )
                })}
            </ul>
        );
    }

}

export default ItemsList;