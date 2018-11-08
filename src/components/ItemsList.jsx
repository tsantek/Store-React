import React, { Component } from 'react';

class ItemsList extends Component {


    render() {
        return (
            <ul>
                {this.props.coffes.map(coffe => {
                    return (
                        <li onClick={() => this.props.handleAdd(coffe)} key={coffe.id}>
                            <p>{coffe.name}</p>
                            <p>{coffe.price}$</p>
                        </li>
                    )
                })}
            </ul>
        );
    }

}

export default ItemsList;