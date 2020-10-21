import Reducer from "./reducer";
import { INSERT_DEVICE, FETCH_DEVICE } from "../actions";
describe("Checking Reducer", () => {
  it("Reducer should have default state", () => {
    expect(Reducer(undefined, { type: "default" })).toEqual({
      device_data: [],
      total: 0,
    });
  });
});

describe("fetch device", () => {
  it("reciveng array of object on fetch device", () => {
    const list = [
      {
        cart_qty: 5,
        color: "white",
        description: "All-New MacBook Pro Features",
        name: "MacBook Pro",
        price: 2500,
        qty: 7,
        total: 5,
        __v: 0,
        _id: "5f6bf899a400b83c5c6e9fa5",
      },
      {
        cart_qty: 5,
        color: "white",
        description: "All-New MacBook Pro Features",
        name: "MacBook Pro",
        price: 2500,
        qty: 7,
        total: 5,
        __v: 0,
        _id: "5f6bf899a400b83c5c6e9fa5",
      },
    ];

    expect(Reducer(undefined, { type: FETCH_DEVICE, payloads: list })).toEqual({
      device_data: list,
      total: list[0].total,
    });
  });
});

describe("fetch device", () => {
  it("reciveng array of object on fetch device", () => {
    const obj = {
      cart_qty: 5,
      color: "white",
      description: "All-New MacBook Pro Features",
      name: "MacBook Pro",
      price: 2500,
      qty: 7,
      total: 5,
      __v: 0,
      _id: "5f6bf899a400b83c5c6e9fa5",
    };
    const state = {
      device_data: [],
      total: 0,
    };
    expect(Reducer(state, { type: INSERT_DEVICE, payloads: obj })).toEqual({
      ...state,
      device_data: [].concat(obj),
    });
  });
});
