import React from 'react';
import DonutCustomizer from './donutCustomizer.jsx';


class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('from CUSTOM:',this.props.donutBases);
    return (
      <div>
        <p>On Customize Page</p>
        <DonutCustomizer 
          addCustomDonut={this.props.addCustomDonut}
          donutBases={this.props.donutBases}
          donutTypes={this.props.donutTypes}
          url={this.props.url}
        />
      </div>
    )
  }
}

export default Customize;