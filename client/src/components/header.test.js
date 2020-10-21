import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import { findByTestAtrr } from "../Util";
jest.mock("react-redux", () => ({
  useSelector: () => ({}),
}));

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

let compo;
beforeEach(() => {
  compo = setUp();
});
describe("HeaderComponent", () => {
  it("checking  name of the app ", () => {
    const wrapper = findByTestAtrr(compo, "appName").text();
    expect(wrapper).toBe("Test Application");
  });
});
