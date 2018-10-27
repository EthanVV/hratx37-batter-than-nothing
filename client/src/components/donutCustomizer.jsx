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
      donutBases: ['base1', 'base2', 'base3'],
      donutTypes: ['type1', 'type2', 'type3'],
      customDonut: {
        name: 'no entry',
        description: 'no entry',
        base: 'no entry',
        type: 'no entry',
        toppings: []
      }
    };
  }

  componentDidMount() {
    console.log('DONUT CUSTOMIZER MOUNTED');
    console.log(this.props.url);
    fetch(`${this.props.url}/api/donuts/bases`)
      .then(res => res.json())
      .then(res => {
        this.setState({donutsBases: res})
      });
  }

  updateDonut(e) {
    let updatedDonut = Object.assign({}, this.state.customDonut);
    updatedDonut[e.target.name] = e.target.value;
    this.setState({ customDonut: updatedDonut }, () => console.log(this.state.customDonut))
    // console.log(e.target.value);
    // console.log(e.target.name);
  }

  render() {
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
            <select name="base" onChange={(e) => this.updateDonut(e)}>
              {this.state.donutBases.map(base => <option value={base}>{base}</option>)}
            </select>
          </div>
          <div>
            Donut Type
            <select name="type" onChange={(e) => this.updateDonut(e)}>
              {this.state.donutTypes.map(type => <option value={type}>{type}</option>)}
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