import React from 'react';

const wrapper = {
  paddingLeft: '53px' //temporary hacky align
}
const ToppingSelector = (props) => {
  console.log('@toppingSelector:',props.toppingOptions);
  console.log('@toppingSelectorDefault', props.default );
  return (
    // <select onChange={(e) => props.updateDonut}>
    <div style={wrapper}>
      <select>
        <option value={props.default.id}>{props.default.name} - ${props.default.price}</option>
        {props.toppingOptions.map(toppingOption => 
          <option value={toppingOption.id}>{toppingOption.name} - ${toppingOption.price}</option>
        )}
      </select>
    </div>
  );
}
  


export default ToppingSelector;