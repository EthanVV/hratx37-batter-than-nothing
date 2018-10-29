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
      donutBases: [],
      donutTypes: [],
      toppings: [],
      page: 'home',
      items: 0,
      cartList: []
    };
    // routes: {
    //     home: true,
    //     donuts: false,
    //     customize: false,
    //     order: false,=
    // }
  }

  componentDidMount() {
    fetch(`${url}/api/donuts`)
      .then(res => res.json())
      .then(res => {
          console.log('dunuts retrieved:',res);
          this.setState({donuts: res})
      });
    
    fetch(`${url}/api/donut_bases`)
      .then(res => res.json())
      .then(res => {
        console.log('donutBases retrieved:', res);
        this.setState({donutBases: res})
      });

    fetch(`${url}/api/donut_types`)
      .then(res => res.json())
      .then(res => {
        console.log('donutTypes retrieved:', res);
        this.setState({donutTypes: res})
      });

    fetch(`${url}/api/toppings`)
    .then(res => res.json())
      .then(res => {
        console.log('toppings retrieved:', res);
        this.setState({toppings: res})
      });
  }

  homeClick(el) {
    // have the home page clicked by default
    el.click();
  }

  updateCart(action, cartEntry) {
    //refactor to take object
    console.log('updateCart invoked');
    switch(action) {
      case 'rem':
        
        break;
      case 'add':
        let updatedCart = this.state.cartList.slice();
        updatedCart.push(cartEntry);
        this.setState({cartList: updatedCart});
        console.log('add:', cartEntry);
        console.log('cartList(async problems)',this.state.cartList)
        break;
      case 'set':
        
        break;
      default:
        break;
    }
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
        this.setState({ page:
          <Donuts
            donuts={this.state.donuts}
            updateCart={this.updateCart.bind(this)}
          />
        })
        break;
      case 'customize':
        this.setState({ page: 
          <Customize 
            addCustomDonut={this.addCustomDonut.bind(this)} 
            donutBases={this.state.donutBases}
            donutTypes={this.state.donutTypes}
            toppings={this.state.toppings}
            url={url}
          /> 
        })
        break;
      case 'cart':
        console.log('cartRoute reached');
        this.setState({ page:
          <Cart
            donuts={this.state.donuts}
            cartList={this.state.cartList}
            updateCart={this.updateCart.bind(this)}
          /> }) //using donuts as makeshift cart for testing
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
        <TopBar
          handleRoute={this.handleRoute.bind(this)}
          homeClick={this.homeClick}
          cartList={this.state.cartList}
        />
        <div>
          {this.state.page}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));