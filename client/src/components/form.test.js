import React from "react";
import { shallow } from "enzyme";
import Form from "./form";
import { findByTestAtrr } from "../Util";
jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ({}),
}));

const setUp = (props) => {
  const component = shallow(<Form {...props} />);
  return component;
};

let compo;
beforeEach(() => {
  compo = setUp({ chang: jest.fn() });
});
describe("FormComponent", () => {
  it("myForm should render on add device", () => {
    const wrapper = findByTestAtrr(compo, "myForm");
    expect(wrapper.length).toBe(1);
  });
});
