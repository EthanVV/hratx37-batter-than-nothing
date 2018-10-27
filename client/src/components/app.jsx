import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './topBar.jsx';
import Donuts from './donuts.jsx';
import Home from './home.jsx';
import Customize from './customize.jsx';
import Cart from './cart.jsx';

const url = 'http://localhost:3001';

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
        donuts: [],
        page: 'home',
        items: 0,
        cartItems: ['test']
    };
    // routes: {
    //     home: true,
    //     donuts: false,
    //     customize: false,
    //     order: false,
    // }
  }

  componentDidMount() {
    fetch(`${url}/api/donuts`)
      .then(res => res.json())
      .then(res => {
          this.setState({donuts: res})
      })
  }

  homeClick(el){
    // have the home page clicked by default
    el.click();
  }

  addToCart(item) {
    let updatedCart = null;
    if (this.state.cartItems.length > 0) {
      updatedCart = this.state.cartItems.slice().push(item);
    } else {
      updatedCart = [item];
    }

    console.log(updatedCart);

    this.setState({
      cartItems: updatedCart
    }, () => console.log(this.cartItems));
  }

  addCustomDonut(item) {
    console.log('addDonut invoked w/', item);
    fetch(`${url}/api/donuts`, {
      method: 'post',
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
  }

  handleRoute(clickedRoute = 'home'){
    // Sets boolean value to help determine what component should show
    // for (const route in this.state.routes) {
    //     this.state.routes[route] = false;
    // }
    // this.state.routes[clickedRoute] = true;
    switch (clickedRoute) {
      case 'donuts':
        console.log('donutsRoute reached');
        this.setState({ page: <Donuts donuts={this.state.donuts} addToCart={this.addToCart.bind(this)} /> })
        break;
      case 'customize':
        this.setState({ page: <Customize addCustomDonut={this.addCustomDonut.bind(this)} url={url}/> })
        break;
      case 'cart':
        console.log('cartRoute reached');
        this.setState({ page: <Cart cartItems={this.state.donuts}/> }) //using donuts as makeshift cart for testing
        break;
      default:
        this.setState({ page: <Home handleRoute={this.handleRoute.bind(this)}/>})
        break;
    }
  }

  render() {
    console.log(this.state.donuts);
    return (
      <div>
        <TopBar handleRoute={this.handleRoute.bind(this)} homeClick={this.homeClick}/>
        <div>
          {this.state.page}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));