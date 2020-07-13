import "@testing-library/jest-dom";
import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Pruebas en componente CounterApp.js", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostrar <CounterApp/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el value enviado por props", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const valueParrafo = wrapper.find("p").text();
    expect(valueParrafo).toBe(value.toString());
  });

  test("Debe de incrementar el contador", () => {
    wrapper.find("button").at(0).simulate("click");
    const valueParrafo = wrapper.find("p").text();
    expect(valueParrafo).toBe("11");
  });

  test("Debe de decrementar el contador", () => {
    wrapper.find("button").at(2).simulate("click");
    const valueParrafo = wrapper.find("p").text();
    expect(valueParrafo).toBe("9");
  });

  test("Debe de resetear el contador", () => {
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const valueParrafo = wrapper.find("p").text();
    expect(valueParrafo).toBe("10");
  });
});
