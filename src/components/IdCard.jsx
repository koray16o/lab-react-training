const IdCard = (props) => {
  return (
    <div className="dataBox">
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.birth}</p>
      <img src={props.picture} alt="facepic" />
    </div>
  );
};
export default IdCard;
