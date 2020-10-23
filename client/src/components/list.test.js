import React from "react";
import { shallow } from "enzyme";
import List from "./list";
import { findByTestAtrr } from "../Util";
jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => ({}),
}));

const setUp = () => {
  const component = shallow(<List />);
  return component;
};

let compo;
beforeEach(() => {
  compo = setUp();
});
describe("ListComponent", () => {
  it("checking the delete button ", () => {
    const wrapper = findByTestAtrr(compo, "delBtn");
    expect(wrapper.length).toBe(1);
  });
});
