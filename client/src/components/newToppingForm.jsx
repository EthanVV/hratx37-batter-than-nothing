import React from 'react';

const title = {
  fontWeight: 'bold'
}
class NewToppingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <br/>
        <div style={title}>New Topping Form</div>
        <br/>
        <div>
          Topping Name<input type="text" />
        </div>
        <div>
          Price<input type="text" />
        </div>
        <div>
          <input type="submit" value="Add More Topping Choices"/>
        </div>
      </div>
    )
  }
}

export default NewToppingForm;