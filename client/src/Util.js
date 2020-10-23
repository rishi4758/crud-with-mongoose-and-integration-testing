import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers/index";
import reduxthunk from "redux-thunk";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(reduxthunk)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
