import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";

import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import Grid from "@material-ui/core/Grid";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  submitButton: {
    border: "1px solid #black",

    width: "90px",

    textTransform: "none",
    borderRadius: "3em",
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    marginRight: "40px",
    "&:hover": {
      color: "#6600ff",

      border: "1px solid #ffcc00",
    },
    content: {
      display: "flex",
      flexDirection: "row",
    },
    col1: {
      display: "flex",
      flexDirection: "column",
    },
    col2: {
      display: "flex",
      flexDirection: "column",
    },
  },
  name: {
    fontSize: 30,
    fontWeight: 700,
  },
  price: {
    fontSize: 30,
    fontWeight: 700,
  },
  item: {
    fontSize: 30,
    fontWeight: 700,
    width: 55,
    textAlign: "center",
    border: "1px solid black",
  },
  description: {
    fontSize: 18,
    color: "black",
    fontFamily: "italic",
    fontWeight: 600,
    overFlow: "hidden",
  },

  cartButton: {
    border: "1px solid #black",
    width: "130px",

    textTransform: "none",
    borderRadius: "5em",
    backgroundColor: "#0049b7",
    color: "black",
    fontWeight: "bold",
    marginRight: "40px",
    marginTop: 30,
    "&:hover": {
      border: "2px solid black ",
    },
  },
  removeButton: {
    border: "1px solid ",

    width: "170px",
    textTransform: "none",
    borderRadius: "5em",
    backgroundColor: "#0049b7",
    color: "black",
    fontWeight: "bold",
    marginRight: "40px",
    marginTop: 30,
    "&:hover": {
      border: "2px solid black",
    },
  },
  cartValue: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 700,
    textAlign: "center",
  },
}));
export default function CustomizedDialogs({
  id,

  handleClose,
  open,
}) {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const handle = () => {
    handleClose();
  };
  const Dispatch = useDispatch();

  const addToCart = async (id, name, cart_qty, qty, total) => {
    await Dispatch(actions.addCart(id, cart_qty, qty, total));
    setCount((prev) => prev + 1);
    let obj = { count: count + 1, name: name, type: "increases" };
    let myObj = JSON.stringify(obj);
    localStorage.setItem("v2", myObj);
  };

  const removeCart = async (id, name, cart_qty, qty, total) => {
    await Dispatch(actions.removeCart(id, cart_qty, qty, total));
    setCount((prev) => prev - 1);
    let obj = { count: count - 1, name: name, type: "decreases" };
    let myObj = JSON.stringify(obj);

    localStorage.setItem("v2", myObj);
  };
  const total = useSelector(
    useCallback((state) => state.data.total),
    [addToCart, removeCart]
  );
  const disableValue = () => {
    if (data.qty <= 0) {
      return true;
    }
    return false;
  };
  const data = useSelector(
    useCallback((state) =>
      state.data.device_data.find((obj) => obj._id === id)
    ),
    [addToCart, removeCart]
  );
  const disableCartValue = () => {
    if (data.cart_qty <= 0) {
      return true;
    }
    return false;
  };

  return (
    <div style={{ width: "100%" }} data-test="itemDetails">
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handle}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ flex: 1, backgroundColor: "whitesmoke" }}
      >
        <DialogContent dividers style={{ marginLeft: 50 }}>
          <Grid container>
            <Grid container item xs={6}>
              <Grid container item xs={12} className={classes.col1}>
                <div className={classes.name}>
                  <span>{data.name}</span> <span>{data.color}</span>
                </div>
              </Grid>
              <Grid container item xs={12} className={classes.col1}>
                <div
                  className={classes.description}
                  style={{ width: 250, wordWrap: "break-word" }}
                >
                  {data.description}
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container item xs={12} className={classes.col1}>
                <Grid item xs={6}>
                  <div className={classes.price}>$ {data.price}</div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.item}>{data.qty}</div>
                </Grid>
              </Grid>
              <Grid container item xs={12} className={classes.col1}>
                <div>
                  <Button
                    disabled={disableValue()}
                    onClick={() => {
                      addToCart(id, data.name, data.cart_qty, data.qty, total);
                    }}
                    className={classes.cartButton}
                  >
                    add to Cart
                  </Button>
                </div>
              </Grid>
              <Grid container item xs={12} className={classes.col1}>
                <div className={classes.cartValue}>
                  This item in cart {data.cart_qty}
                </div>
              </Grid>
              <Grid container item xs={12} className={classes.col1}>
                <div>
                  <Button
                    disabled={disableCartValue()}
                    onClick={() => {
                      removeCart(id, data.name, data.cart_qty, data.qty, total);
                    }}
                    className={classes.removeButton}
                  >
                    remove from Cart
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#0049b7" }}>
          <Grid container justify="flex-end">
            <Button autoFocus onClick={handle} className={classes.submitButton}>
              close
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
