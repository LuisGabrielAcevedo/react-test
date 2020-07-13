import "@testing-library/jest-dom";
import App from "../App";
import React from "react";
import { shallow } from "enzyme";

describe("Pruebas en componente App.js", () => {
  //   Cuando se usa jest que viene por defecto en react
  //   test("Debe de mostrar el mensaje: Hola, soy gabriel", () => {
  //     const saludo = "Hola, soy gabriel";
  //     const { getByText } = render(<App saludo={saludo} />);
  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });
  test("debe de mostrar <App/> correctamente", () => {
    const saludo = "Hola, soy gabriel";
    const wrapper = shallow(<App saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy gabriel";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(<App saludo={saludo} subtitulo={subtitulo} />);
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
