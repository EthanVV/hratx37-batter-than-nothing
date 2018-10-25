import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './topBar.jsx';
import Donuts from './donuts.jsx';
import Home from './home.jsx';
import Customize from './customize.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
        donuts: [],
        page: 'home',
        items: 0
    };
    // routes: {
    //     home: true,
    //     donuts: false,
    //     customize: false,
    //     order: false,
    // }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/donuts')
      .then(res => res.json())
      .then(results => {
          this.setState({ donuts: results })
      })
  }

  homeClick(el){
    // have the home page clicked by default
    el.click();
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
        this.setState({ page: <Donuts donuts={this.state.donuts} /> })
        break;
      case 'customize':
        this.setState({ page: <Customize /> })
        break;
      case 'cart':
        this.setState({ page: 'cart component goes here' })
        break;
      default:
        this.setState({ page: <Home handleRoute={this.handleRoute.bind(this)}/>})
        break;
    }
  }

  render() {
    return (
      <div>
        <TopBar handleRoute={this.handleRoute.bind(this)}/>
        <div>
          {this.state.page}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));