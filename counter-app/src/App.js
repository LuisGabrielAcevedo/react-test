import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const App = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

export default App;

App.propTypes = {
  saludo: PropTypes.string.isRequired,
};

App.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

// Print Json
// const obj = {
//   nombre: "Luis",
//   edad: 29,
// };
// <pre>{JSON.stringify(obj, null, 3)}</pre>
