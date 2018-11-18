import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import './styles/receipt.css';
import './styles/total.css';
import './styles/itemslist.css';
import './styles/header.css';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import Receipt from './components/Receipt';
import Total from './components/Total';


class App extends Component {

  state = {
    coffees: [
      { id: 1, name: 'Aroma Mocha', count: 0, price: 10 },
      { id: 2, name: 'Baristas', count: 0, price: 12 },
      { id: 3, name: 'Tatianas Cafe', count: 0, price: 13 },
      { id: 4, name: 'The Grind', count: 0, price: 14 },
      { id: 5, name: 'Expresso', count: 0, price: 15 },
      { id: 6, name: 'Late', count: 0, price: 16 },
      { id: 7, name: 'Wake Up Cafe', count: 0, price: 17 },
      { id: 8, name: 'Americana', count: 0, price: 18 },
      { id: 9, name: 'The Roasted Bean', count: 0, price: 19 },
      { id: 10, name: 'The Grind', count: 0, price: 10 }
    ],
    total: 0
  };

  handleAdd = coffee => {      // Adding 1 to count 
    const coffees = [...this.state.coffees];
    const index = coffees.indexOf(coffee);
    coffees[index] = { ...coffee };
    coffees[index].count++;
    this.setState({ coffees });
    // Total price
    const result = coffee.price;
    this.setState({ total: result + this.state.total });
  };

  handleRemove = coffee => {   //removing 1 of count
    const total = this.state.total;
    this.setState({
      coffee: [
        coffee.count = coffee.count - 1
      ],
      total: total - coffee.price
    })

    console.log(coffee.count);
    console.log(this.state.coffees);
  }

  refreshPage() {  // reload app
    window.location.reload();
  }

  render() {

    return (
      <div className="container">
        <Header name={this.state.name} nameCustomer={this.nameCustomer} />
        <div className="row app-container">
          <div className="col-8"><ItemsList coffees={this.state.coffees} handleAdd={this.handleAdd} /></div>
          <div className="col-4"><Receipt coffees={this.state.coffees} handleRemove={this.handleRemove} /></div>
        </div>
        <div className="row border-line">
          <div className="col">
            <button className="btn btn-primary" onClick={this.refreshPage}> Reload</button>
          </div>
          <div className="col">
            <Total total={this.state.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
