import { FETCH_DEVICE, INSERT_DEVICE, DELETE_DEVICE } from "../actions";
import { ADD_CART } from "../actions";
import { REMOVE_CART } from "../actions";
const initialState = {
  device_data: [],
  total: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DEVICE:
      return {
        ...state,
        device_data: action.payloads,
        total: action.payloads.length === 0 ? 0 : action.payloads[0].total,
      };
    case ADD_CART:
      const obj = state.device_data.findIndex(
        (obj) => obj._id === action.payloads._id
      );

      state.device_data[obj].cart_qty += 1;
      state.device_data[obj].qty -= 1;
      if (state.device_data[obj].qty < 0) {
        state.device_data[obj].qty = 0;
      }
      state.total += 1;

      return state;

    case REMOVE_CART:
      const index = state.device_data.findIndex(
        (obj) => obj._id === action.payloads._id
      );

      state.device_data[index].cart_qty -= 1;
      if (state.device_data[index].cart_qty < 0) {
        state.device_data[index].cart_qty = 0;
      }
      state.device_data[index].qty += 1;

      if (state.total <= 0) {
        state.total = 0;
      } else {
        state.total -= 1;
      }

      return state;
    case INSERT_DEVICE:
      state.device_data.push(action.payloads);

      return { ...state };
    case DELETE_DEVICE:
      const delDevice = state.device_data.filter(
        (obj) => obj._id !== action.payloads._id
      );

      return {
        ...state,
        device_data: delDevice,
        total: state.total - action.payloads.cart_qty,
      };
    default:
      return state;
  }
}
