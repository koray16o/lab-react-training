import React from 'react';

const SingleColorPicker = (props) => {
  return (
    <div>
      <label>{props.color.toUpperCase()}:</label>
      <input
        type="number"
        min="0"
        max="255"
        value={props.value}
        onChange={(event) => props.onChange(props.color, event.target.value)}
      />
    </div>
  );
};

export default SingleColorPicker;
