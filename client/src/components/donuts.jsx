import React from 'react';
import Donut from './donut.jsx';

// 
// const Donuts = ({donuts}) => donuts.map(donut => <div>{donut.name}</div>)

const aligner = {
  textAlign: 'center'
}
const wrapper = {
  display: 'grid',
  textAlign: 'center',
  gridTemplateColumns: 'repeat(auto-fill, 400px)',
  justifyContent: 'space-evenly',
  padding: '20px',
  gridAutoRows: 'minmax(500, auto)',
  gridColumnGap: '10px',
  gridRowGap: '50px',
  backgroundColor: 'grey'
}
class Donuts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
    <div style={aligner}>
      <div style={wrapper}>
        {this.props.donuts.map((donut) => <Donut donut={donut} updateCart={this.props.updateCart.bind(this)}/>)}
      </div>
    </div>
    )
    // this.props.donuts.map((donut, index) => { <Donut name={donut}/>});
  }
}

export default Donuts;