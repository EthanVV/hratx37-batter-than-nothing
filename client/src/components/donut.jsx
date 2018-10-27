import React from 'react';

const donutDiv = {
  textAlign: 'center'
}

class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 1
    }
  }

  render() {
    console.log('donut render reached');
    return (
      <div style={donutDiv}>
        <a href="https://via.placeholder.com/350x200?text=Donut+Image"><img src="https://via.placeholder.com/350x200?text=Donut+Image"></img></a>
        <p>{this.props.donut.name}</p>
        <p>{this.props.donut.description}</p>
        <span>
          <select onChange={(e) => this.setState({selection: e.target.value})}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="6">6</option>
           <option value="12">12</option>
          </select>
          <input type="submit" value="Order" onClick={() =>
             this.props.updateCart('add', {
               name: this.props.donut.name,
               id: parseInt(this.props.donut.id, 10),
               quantity: parseInt(this.state.selection, 10)
             })}
            />
        </span>
      </div>
    );
  }
}

export default Donut;