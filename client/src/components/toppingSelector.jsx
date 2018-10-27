import React from 'react';

const ToppingSelector = (props) => {
  return (
    <select onChange={(e) => props.updateDonut}>
      <option value={props.default}>{props.default}</option>
      {props.toppingOptions.map(toppingOption => 
        <option value={toppingOption}>{toppingOption}</option>
      )}
    </select>
  );
}
  


export default ToppingSelector;