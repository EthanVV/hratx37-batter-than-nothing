import React from 'react';
import ToppingSelector from './toppingSelector.jsx'

class ToppingSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toppings: ['topping1', 'topping2', 'topping3'],
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
    return (
      <span>
        Topping
        <select onChange={(event) => this.setState({selection: event.target.value})}>
          <option value="">none</option>
          {this.state.toppings.map(topping => 
            <option value={topping}>{topping}</option>
          )}
        </select>
        <input type="submit" value="add+" onClick={() => this.addTopping()}/>
      </span>
    )
  }


  render() {
    return (
      <div>
        {this.toppingMaster()}
        {this.state.selectedToppings.map((topping, index) => (
          <div>
            <ToppingSelector toppingOptions={this.state.toppings} default={topping} index={index} updateDonut={this.props.updateDonut}/>
          </div>
        ))}
      </div>
    )
  }
}

export default ToppingSelectForm;