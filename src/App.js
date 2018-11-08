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
    coffes: [
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

  handleAdd = coffe => {      // Adding 1 to count 
    const coffes = [...this.state.coffes];
    const index = coffes.indexOf(coffe);
    coffes[index] = { ...coffe };
    coffes[index].count++;
    this.setState({ coffes });
    // Total price
    const result = coffe.price;
    this.setState({ total: result + this.state.total });
  };

  handleRemove = coffe => {   //removing 1 of count
    const total = this.state.total;
    this.setState({
      coffe: [
        coffe.count = coffe.count - 1
      ],
      total: total - coffe.price
    })

    console.log(coffe.count);
    console.log(this.state.coffes);
  }

  refreshPage() {  // reload app
    window.location.reload();
  }

  render() {

    return (
      <div className="container">
        <Header name={this.state.name} nameCustomer={this.nameCustomer} />
        <div className="row app-container">
          <div className="col-8"><ItemsList coffes={this.state.coffes} handleAdd={this.handleAdd} /></div>
          <div className="col-4"><Receipt coffes={this.state.coffes} handleRemove={this.handleRemove} /></div>
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
