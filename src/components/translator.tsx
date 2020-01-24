import React, { useState, ChangeEvent } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { translate } from "../logic/translations";

import "../App.css";

const Translator: React.FC<any> = () => {
  const [message, setMessage] = useState("");

  return (
    <>
      <AppBar
        position="static"
        classes={{
          root: "color-change"
        }}
      >
        <Toolbar>
          <Typography variant="h5" className="">
            Luci's Emoji Code Translator
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="form-container">
        <TextField
          autoFocus
          multiline
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
          label="Message"
          variant="outlined"
          classes={{
            root: "form-row form-field"
          }}
        />
        <Fab
          onClick={() => setMessage(translate(message))}
          variant="extended"
          color="primary"
          aria-label="add"
          classes={{
            root: "form-row form-button color-change"
          }}
        >
          Translate!
        </Fab>
      </div>
    </>
  );
};

export default Translator;
