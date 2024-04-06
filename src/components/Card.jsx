const Card = (props) => {
  return (
    <div className="card">
      {props.icon}
      <h1 className="g-color">{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
