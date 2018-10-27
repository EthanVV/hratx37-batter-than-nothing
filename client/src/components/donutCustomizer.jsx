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
        donut_base_id: '',
        donut_type_id: ''
        //toppings: []
      }
    };
  }

  validateDonut(donut) { 
    let userAlerts = ''
    let message = 'Please enter a ';
    if (!donut.name) {
      userAlerts += (message+'name.\n\n');
    }
    if (!donut.donut_base_id){
      userAlerts += (message+'base.\n\n');
    }
    if (!donut.donut_type_id){
      userAlerts += (message+'type.\n\n');
    }
    if (userAlerts.length > 0) {
      alert(userAlerts);
      return false;
    } else return true;
  }

  submit(donut) {
    if (this.validateDonut(donut)) {
      this.props.addCustomDonut(donut);
    } else {
      
    }
  }

  updateDonut(e) {
    let updatedDonut = Object.assign({}, this.state.customDonut);
    updatedDonut[e.target.name] = e.target.value;
    this.setState({ customDonut: updatedDonut }, () => console.log('type of base_id:', typeof this.state.customDonut.donut_base_id))
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
            <select name="donut_base_id" onChange={(e) => this.updateDonut(e)}>
              <option value=''></option>
              {this.state.donutBases.map(base => <option value={parseInt(base.id, 10)}>{base.base}</option>)}
            </select>
          </div>
          <div>
            Donut Type
            <select name="donut_type_id" onChange={(e) => this.updateDonut(e)}>
              <option value=''></option>
              {this.state.donutTypes.map(type => <option value={parseInt(type.id, 10)}>{type.type}</option>)}
            </select>
          </div>
          <ToppingSelectForm updateDonut={this.updateDonut.bind(this)}/>
          <input type='submit' value="Create Donut!" onClick={() => this.submit(this.state.customDonut)}/>
        </div>
        <NewToppingForm />
      </div>
    )
  }
}

export default DonutCustomizer;