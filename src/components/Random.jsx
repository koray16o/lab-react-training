const Random = (props) => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1 + min));
  };
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} {'=>'}{' '}
        {randomNumber(props.min, props.max)}
      </p>
    </div>
  );
};

export default Random;
