import React from 'react';
import Donut from './donut.jsx';

// 
// const Donuts = ({donuts}) => donuts.map(donut => <div>{donut.name}</div>)

class Donuts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return this.props.donuts.map((donut) => <Donut donut={donut} updateCart={this.props.updateCart.bind(this)}/>);
    
    // this.props.donuts.map((donut, index) => { <Donut name={donut}/>});
  }
}

export default Donuts;