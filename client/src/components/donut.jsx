import React from 'react';

const donutDiv = {
  textAlign: 'center'
}

class Donut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('donut render reached');
    return (
      <div style={donutDiv}>
        <a href="https://via.placeholder.com/350x200?text=Donut+Image"><img src="https://via.placeholder.com/350x200?text=Donut+Image"></img></a>
        <p>{this.props.donut.name}</p>
        <span>
          <select>
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="6">6</option>
           <option value="12">12</option>
          </select>
          <input type="submit" value="Order"/>
        </span>
      </div>
    );
  }
}

export default Donut;