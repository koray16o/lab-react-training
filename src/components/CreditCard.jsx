const CreditCard = (props) => {
  const card = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const cardNumber = (num) => {
    return '••••••••••••' + num.substr(-4);
  };

  return (
    <div style={card}>
      <div>
        <img src={props.img} alt="Credit Card Logo" />
      </div>
      <div>
        <h2>{cardNumber(props.number)}</h2>
      </div>
      <div>
        <div>
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
        </div>
        <div>
          <p>{props.bank}</p>
        </div>
      </div>
      <div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
