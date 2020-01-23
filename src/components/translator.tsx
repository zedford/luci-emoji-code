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
    <div className="">
      {/* add flexbox styles for spacing */}
      <AppBar position="static" className="">
        <Toolbar>
          <Typography variant="h5" className="">
            Luci's Emoji Code Translator
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        autoFocus
        multiline
        value={message}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setMessage(event.target.value);
        }}
        label="Message"
        variant="outlined"
        className=""
      />
      <Fab
        onClick={() => setMessage(translate(message))}
        variant="extended"
        color="primary"
        aria-label="add"
        className=""
      >
        Translate!
      </Fab>
    </div>
  );
};

export default Translator;
