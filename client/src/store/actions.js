import axios from "axios";
export const FETCH_DEVICE = "fetch_device";
export const INSERT_DEVICE = "insert_device";
export const DELETE_DEVICE = "delete_device";
export const ADD_CART = "add_cart";
export const REMOVE_CART = "remove_cart";
export const fetch_device = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/devices");

    const pro = [];
    await res.data.map((obj) => {
      pro.push(obj);
    });

    dispatch({ type: FETCH_DEVICE, payloads: pro });
  };
};

export const addCart = (id, cart, qty, total) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/cart", {
      id: id,
      cart: cart,
      qty: qty,
      total: total,
    });

    dispatch({ type: ADD_CART, payloads: res.data });
  };
};

export const removeCart = (id, cart, qty, total) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/removecart", {
      id: id,
      cart: cart,
      qty: qty,
      total: total,
    });

    dispatch({ type: REMOVE_CART, payloads: res.data });
  };
};

export const insertDevice = (name, description, price, color, qty, total) => {
  console.log("insert device value of total" + total);
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/insert", {
      name: name,
      description: description,
      price: price,
      color: color,
      qty: qty,
      total: total,
    });
    console.log("insert query" + res.data);

    dispatch({ type: INSERT_DEVICE, payloads: res.data });
  };
};

export const deleteDevice = (id) => {
  console.log("id before request");
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/deleteDevice", {
      id: id,
    });

    if (res.data) {
      console.log("the given id" + id);
      dispatch({ type: DELETE_DEVICE, payloads: res.data });
    }
  };
};
