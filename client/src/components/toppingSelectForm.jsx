import React from 'react';
import ToppingSelector from './toppingSelector.jsx'

class ToppingSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      selectedToppings: []
    }
  }
  
  addTopping() {
    let newToppings = this.state.selectedToppings;
    if (this.state.selection != '') {
      newToppings.push(this.state.selection);
    }
    this.setState({
      selectedToppings: newToppings
    }, () => console.log(this.state.selectedToppings)
    );
  }

  hanldeChange(index, value) {
    let updatedSelectedToppings = this.state.selectToppings.slice();
    updatedSelectedToppings[index] = value;
    this.setState({
      selectedToppings: updatedSelectedToppings
    })
  }

  toppingMaster() {
    console.log('toppingsMaster:', this.props.toppings);
    return (
      <span>
        Topping
        <select onChange={(e) => this.setState({selection: e.target.value})}>
          <option value="">none</option>
          {this.props.toppings.map(topping => 
            <option value={topping.id}>{topping.name} - ${topping.price}</option>
          )}
        </select>
        <input type="submit" value="add+" onClick={() => this.addTopping()}/>
      </span>
    )
  }


  render() {
    console.log('@toppingSelectForm:', this.props.toppings)
    return (
      <div>
        {this.toppingMaster()}
        {this.state.selectedToppings.map((topping, index) => (
          <div>
            <ToppingSelector toppingOptions={this.props.toppings} default={this.props.toppings[topping]} index={index} updateDonut={this.props.updateDonut}/>
          </div>
        ))}
      </div>
    )
  }
}

export default ToppingSelectForm;