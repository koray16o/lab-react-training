const BoxColor = (props) => {
  const box = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: 'white',
  };

  return (
    <div style={box}>
      <p>
        rgb ({props.r}, {props.g}, {props.b})
      </p>
      <span>#{props.hex}</span>
    </div>
  );
};

export default BoxColor;
