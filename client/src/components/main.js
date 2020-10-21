import React, { useEffect, useCallback, useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header";
import List from "./list";
import Mod from "./modal";
import Form from "./form";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { Button, Grid } from "@material-ui/core";
function Main() {
  const classes = useStyles();
  const data = useSelector((state) => state.data.device_data);
  const [present, setPresent] = useState(false);
  const [storage, setStorage] = useState();
  const [isList, setList] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetch_device());
  }, []);

  let sideButton;
  var c;

  useEffect(() => {
    c = JSON.parse(localStorage.getItem("v2"));

    if (c) {
      if (c.count != 0) {
        setPresent(true);
        setStorage(c);
      }
    }
    return () => {};
  }, []);

  if (present) {
    sideButton = <Mod storage={storage} />;
  }
  const changeScreen = () => {
    setList(!isList);
  };
  const renderList = useCallback(() => {
    return data.map((obj) => {
      return <List id={obj._id} />;
    });
  });
  let cont;
  if (isList) {
    cont = renderList();
  } else {
    cont = <Form chang={changeScreen} />;
  }
  return (
    <div style={{ textAlign: "center", padding: 10 }}>
      {sideButton}
      <Header data-test="renderHead" />
      <Paper elevation={8} className={classes.listContainer}>
        <Grid container item xs={12}>
          <Grid container justify="center" item xs={12}>
            {isList && <h1>Device List</h1>}
            {!isList && <h1>Add Device</h1>}
          </Grid>
          {isList && (
            <Grid container justify="flex-end">
              <Button onClick={changeScreen} className={classes.submitButton}>
                Add Device
              </Button>
            </Grid>
          )}
        </Grid>
        {cont}
      </Paper>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  listContainer: {
    flex: 1,
    margin: 40,
    padding: 60,
    marginLeft: 100,
    marginRight: 100,

    borderRadius: 15,
    marginTop: 0,
    border: "solid 1px",
    "&:hover": {
      border: "3px solid #99ccff",
    },
  },
  submitButton: {
    border: "1px solid #black",
    backgroundColor: "#0049b7",
    height: "40px",
    width: "150px",
    fontWeight: "600",
    textTransform: "none",
    borderRadius: "3em",
    marginTop: "40px",
    marginBottom: "10px",
    color: "white",

    marginRight: "40px",
    "&:hover": {
      color: "#6600ff",

      border: "1px solid #ffcc00",
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

export default Main;
