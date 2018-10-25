import React from 'react';
import DonutCustomizer from './donutCustomizer.jsx';


class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>On Customize Page</p>
        <DonutCustomizer />
      </div>
    )
  }
}

export default Customize;