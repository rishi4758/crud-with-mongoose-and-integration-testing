import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 30,
    fontWeight: 700,
  },
  submitButton: {
    border: "1px solid #black",
    backgroundColor: "#0049b7",
    height: "40px",
    width: "150px",

    textTransform: "none",
    borderRadius: "3em",
    marginTop: "60px",
    color: "white",
    fontWeight: "bold",
    marginRight: "40px",
    "&:hover": {
      color: "#6600ff",

      border: "1px solid #ffcc00",
    },
  },
  description: {
    fontSize: 22,
    color: "black",
    fontFamily: "italic",
    fontWeight: 600,
    overFlow: "hidden",
    marginTop: 20,
  },
}));
const modal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    localStorage.removeItem("v2");
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        style={{ textAlign: "center" }}
      >
        <Grid container justify="center" data-test="runModal">
          <Grid container item xs={12} justify="flex-end">
            <IconButton fontSize="large">
              <HighlightOffRoundedIcon onClick={handleClose} />
            </IconButton>
          </Grid>
          <Grid container item xs={12} justify="flex-end">
            <DialogContent style={{ textAlign: "center", height: 300 }}>
              <div className={classes.name} data-test="mela">
                Someone Changed the Data:
              </div>
              <div
                className={classes.description}
                style={{ width: 350, wordWrap: "break-word" }}
              >
                {props.storage.name} has been{" "}
                {props.storage.count < 0 ? "decreases" : "increases"} by{" "}
                {props.storage.count < 0
                  ? -1 * props.storage.count
                  : props.storage.count}
              </div>
              <DialogActions>
                <Grid container justify="flex-end">
                  <Button
                    autoFocus
                    onClick={handleClose}
                    className={classes.submitButton}
                  >
                    <span data-test="closeBtn">close</span>
                  </Button>
                </Grid>
              </DialogActions>
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default modal;
