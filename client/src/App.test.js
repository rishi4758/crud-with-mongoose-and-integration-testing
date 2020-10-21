import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAtrr } from "./Util";

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

let compo;
beforeEach(() => {
  compo = setUp();
});

describe("App Component", () => {
  it("App should render without props", () => {
    const value = findByTestAtrr(compo, "AppComponent");
    expect(value.length).toBe(1);
  });
});

describe("App Component", () => {
  it("Main is rendering inside app", () => {
    const value = findByTestAtrr(compo, "MainRender");
    expect(value.length).toBe(1);
  });
});
