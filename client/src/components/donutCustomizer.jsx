import React from 'react';
import ToppingSelectForm from './toppingSelectForm.jsx';
import NewToppingForm from './newToppingForm.jsx';
const title = {
  fontWeight: 'bold'
}

const textEntry = {
  padding: '10px'
}

class DonutCustomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donutBases: this.props.donutBases,
      donutTypes: this.props.donutTypes,
      customDonut: {
        name: '',
        description: '',
        base_id: '',
        type_id: '',
        toppings: []
      }
    };
  }

  updateDonut(e) {
    let updatedDonut = Object.assign({}, this.state.customDonut);
    updatedDonut[e.target.name] = e.target.value;
    this.setState({ customDonut: updatedDonut }, () => console.log(this.state.customDonut))
    // console.log(e.target.value);
    // console.log(e.target.name);
  }

  render() {
    console.log('from donutCustomizer:', this.props.donutBases);
    console.log('donutCusomizer State: ', this.state);
    return (
      <div>
        <p style={title}>Create a custom donut</p>
        <div>
          <div style={textEntry}>
            Donut Name<input type="text" name="name" onChange={(e) => this.updateDonut(e)}/>
          </div>
          <div style={textEntry}>
            Donut Description<input type="text" name="description" onChange={(e) => this.updateDonut(e)}/>
          </div>
          <div>
            Donut Base
            <select name="base_id" onChange={(e) => this.updateDonut(e)}>
              {this.state.donutBases.map(base => <option value={base.id}>{base.base}</option>)}
            </select>
          </div>
          <div>
            Donut Type
            <select name="type_id" onChange={(e) => this.updateDonut(e)}>
              {this.state.donutTypes.map(type => <option value={type.id}>{type.type}</option>)}
            </select>
          </div>
          <ToppingSelectForm updateDonut={this.updateDonut.bind(this)}/>
          <input type='submit' value="Create Donut!" onClick={() => this.props.addCustomDonut(this.state.customDonut)}/>
        </div>
        <NewToppingForm />
      </div>
    )
  }
}

export default DonutCustomizer;