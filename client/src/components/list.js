import React, { useState } from "react";

import * as actions from "../store/actions";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./details";
const List = ({ id }) => {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(!isOpen);
  };
  const Dispatch = useDispatch();
  const delDevice = async (id) => {
    await Dispatch(actions.deleteDevice(id));
  };
  const data = useSelector((state) =>
    state.data.device_data.find((obj) => obj._id === id)
  );

  return (
    <div>
      <div>
        <Grid container>
          <Paper elevation={3} className={classes.shortInfo}>
            <Grid
              container
              item
              xs={11}
              onClick={handleOpen}
              className={classes.oneInfo}
            >
              {" "}
              <Grid container item xs={6} className={classes.appleText}>
                {data.name}{" "}
                <span style={{ marginLeft: 20 }}> {data.color}</span>
              </Grid>
              <Grid
                container
                justify=" flex-end"
                item
                xs={6}
                className={classes.itemText}
              >
                <div style={{ border: "solid 2px" }}>{data.qty} items</div>
              </Grid>
            </Grid>
            <Grid
              className={classes.delBtn}
              onClick={() => {
                delDevice(data._id);
              }}
              container
              justify="center"
              item
              xs={1}
              style={{ backgroundColor: "#0049b7" }}
              data-test="delBtn"
            >
              <DeleteForeverIcon style={{ color: "white" }} />
            </Grid>
          </Paper>
        </Grid>
      </div>
      <div>
        {isOpen && (
          <Modal id={id} open={isOpen} handleClose={handleClose}></Modal>
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  itemText: {
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 20,
    padding: 3,
  },
  oneInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0px 10px 50px 0px rgba(0,0,0,0.2)",
      transition: "all 0.5s",
    },
  },
  shortInfo: {
    flex: 1,

    cursor: "pointer",
    width: "60%",
    marginTop: 15,
    fontWeight: 700,
    padding: 8,
    fontSize: 22,
    display: "flex",
    height: 80,
  },

  delBtn: {
    flexDirection: "row",
    justifyContent: "center",
    cursor: "auto",
    borderRadius: 8,
    alignItems: "center",
    "&:hover": {
      boxShadow: "0px 10px 50px 0px rgba(0,0,0,0.8)",
      transition: "all 0.5s",
      backgroundColor: "black",
    },
  },
}));

export default List;
