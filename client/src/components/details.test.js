import React from "react";
import { shallow } from "enzyme";
import Details from "./details";
import { findByTestAtrr } from "../Util";
jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ({}),
}));

const setUp = () => {
  const component = shallow(<Details />);
  return component;
};

let compo;
beforeEach(() => {
  compo = setUp();
});
describe("DetailsComponent", () => {
  it("DetialsComponent rendering without props", () => {
    const wrapper = findByTestAtrr(compo, "itemDetails");
    expect(wrapper.length).toBe(1);
  });
});
