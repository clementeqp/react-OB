import React, { useState } from "react";
import PropTypes from "prop-types";

const Greetingf = (props) => {

    // useState

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age+1)
    }

  return (
    <div>
      <h1>Hola {props.name} desde Componente funcional!!!</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumpleaños</button>
      </div>
    </div>
  );
};

Greetingf.propTypes = {
    name: PropTypes.string,
};

export default Greetingf;
