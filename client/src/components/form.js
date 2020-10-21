import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import * as actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  listContainer: {
    flex: 1,
    margin: 40,
    padding: 60,
    marginLeft: 200,
    marginRight: 200,

    borderRadius: 15,
    marginTop: 0,
    border: "solid 1px",
    "&:hover": {
      border: "3px solid #99ccff",
    },
  },

  itemText: { border: "solid 2px", padding: 3 },
  shortInfo: {
    flex: 1,
    cursor: "pointer",
    width: "100%",
    marginTop: 0,

    fontWeight: 700,
    padding: 8,
    fontSize: 22,
    display: "flex",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    "&:hover": {},
  },
}));

function form(props) {
  const classes = useStyles();
  const data = useSelector((state) => state.data.total);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState();
  const [qty, setQty] = useState();
  const Dispatch = useDispatch();
  const submitForm = async () => {
    await Dispatch(
      actions.insertDevice(name, description, price, color, qty, data)
    );
    props.chang();
  };
  return (
    <form
      onSubmit={submitForm}
      style={{ paddingRight: 150, paddingLeft: 150, margin: 0, height: 465 }}
      data-test="myForm"
    >
      <div className="form-group">
        <label for="exampleFormControlInput1">Device Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="type name.."
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>

      <div className="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Price</label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="type price."
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Color</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="type color.."
          onChange={(e) => {
            setColor(e.target.value);
          }}
          required
        />
      </div>

      <div className="form-group">
        <label for="exampleFormControlInput1">Quantity</label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="type quantity.."
          onChange={(e) => {
            setQty(e.target.value);
          }}
          required
        />
      </div>
      <Grid container item xs={12}>
        <Grid container item xs={6} justify="flex-start">
          <Button
            autoFocus
            onClick={props.chang}
            className={classes.submitButton}
          >
            Back
          </Button>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          <div className="form-group">
            {" "}
            <Button type="submit" autoFocus className={classes.submitButton}>
              Add Device
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default form;
