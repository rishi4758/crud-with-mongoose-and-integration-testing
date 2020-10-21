import React from "react";
import { shallow } from "enzyme";
import Modal from "./modal";
import { findByTestAtrr } from "../Util";
const setUp = (props) => {
  const component = shallow(<Modal {...props} />);
  return component;
};

let compo;
beforeEach(() => {
  compo = setUp({ name: "rishav", storage: { count: 2 } });
});
describe("ModalComponent", () => {
  it("name of the text", () => {
    const warning = findByTestAtrr(compo, "mela").text();
    expect(warning).toBe("Someone Changed the Data:");
  });
});
describe("ModalComponent", () => {
  it("text inside button", () => {
    const name = findByTestAtrr(compo, "closeBtn").text();
    expect(name).toBe("close");
  });
});
describe("ModalComponent", () => {
  it("Modal runs only when props are passing", () => {
    const wrapper = findByTestAtrr(compo, "runModal");
    expect(wrapper.length).toBe(1);
  });
});
