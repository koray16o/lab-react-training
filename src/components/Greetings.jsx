const Greetings = (props) => {
  let greeting = '';
  if (props.lang === 'de') {
    greeting = <p>Hallo</p>;
  } else if (props.lang === 'en') {
    greeting = <p>Hello</p>;
  } else if (props.lang === 'es') {
    greeting = <p>Hola</p>;
  } else {
    greeting = <p>Bonjour</p>;
  }

  return (
    <div>
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
