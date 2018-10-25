import React from 'react';

const title = {
  fontWeight: 'bold'
}

const textEntry = {
  padding: '10px'
}

class DonutCustomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p style={title}>Create a custom donut</p>
        <div>
          <div style={textEntry}>Donute Name<input type="text" name="DonutName"/></div>
          <div style={textEntry}>Donut Description<input type="text" name="DonutDescription"/></div>
          <div style={textEntry}>Donute Base<input type="text" name="DonutBase"/></div>
          <div style={textEntry}>Donut Type<input type="text" name="DonutType"/></div>
        </div>
      </div>
    )
  }
}

export default DonutCustomizer;