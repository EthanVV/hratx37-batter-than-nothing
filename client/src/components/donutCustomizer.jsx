import React from 'react';
import ToppingSelectForm from './toppingSelectForm.jsx';

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
      donutTypes: ['type1', 'type2', 'type3']
    };
  }

  render() {
    return (
      <div>
        <p style={title}>Create a custom donut</p>
        <div>
          <div style={textEntry}>
            Donute Name<input type="text" name="DonutName"/>
          </div>
          <div style={textEntry}>
            Donut Description<input type="text" name="DonutDescription"/>
          </div>
          <div>
            Donut Base
            <select>
              {this.state.donutBases.map(base => <option value={base}>{base}</option>)}
            </select>
          </div>
          <div>
            Donut Type
            <select>
              {this.state.donutTypes.map(type => <option value={type}>{type}</option>)}
            </select>
          </div>
          <ToppingSelectForm />
        </div>
      </div>
    )
  }
}

export default DonutCustomizer;