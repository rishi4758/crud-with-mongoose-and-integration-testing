import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",

    backgroundColor: "#0049b7",
    height: 60,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  mainText: {
    color: "white",
    fontWeight: 800,
    padding: 8,
    fontSize: 25,
    marginLeft: 25,
  },
  total: { marginTop: 10 },
  cartText: {
    color: "white",
    fontWeight: 700,
    marginRight: 40,
    padding: 8,
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
  },
  subText: {
    border: "solid 9px",
    borderColor: "black",
    borderWidth: 3,
    marginLeft: 12,
    fontSize: 18,
    padding: 5,
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #ffcc00",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.data.total);
  return (
    <div className={classes.container}>
      <div className={classes.mainText} data-test="appName">
        Test Application
      </div>
      <div className={classes.cartText}>
        <div className={classes.total}>Total in cart:</div>
        <div className={classes.subText}>{data}item(s)</div>
      </div>
    </div>
  );
};
export default Header;
