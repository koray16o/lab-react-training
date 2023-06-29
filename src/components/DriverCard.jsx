import Rating from './Rating';
const DriverCard = (props) => {
  return (
    <div className="DriverCard">
      <div className="DriverImage">
        <img src={props.img} alt="Driverpic" />
      </div>

      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model}-{props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
