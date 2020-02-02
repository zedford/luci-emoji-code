import React, { useState, ChangeEvent, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { translate } from "../logic/translations";

import "../App.scss";

const Translator: React.FC<any> = () => {
  const [message, setMessage] = useState("");
  let textAreaRef = useRef<HTMLInputElement>(null);

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
          inputRef={textAreaRef}
          autoFocus
          multiline
          value={message}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.keyCode === 13) {
              //  enter key
              setMessage(translate(message));
            }
          }}
          label="Message"
          variant="outlined"
          classes={{
            root: "form-row form-field"
          }}
          InputProps={{
            className: "form-field-input"
          }}
        />
        <Fab
          onClick={() => setMessage(translate(message))}
          variant="extended"
          color="primary"
          aria-label="translate"
          classes={{
            root: "form-row form-button color-change"
          }}
        >
          Translate!
        </Fab>
        <Fab
          onClick={() => {
            if (textAreaRef.current) {
              textAreaRef.current.select();
              document.execCommand("copy");
            }
          }}
          variant="extended"
          color="primary"
          aria-label="copy"
          classes={{
            root: "form-row form-button color-change"
          }}
        >
          Copy
        </Fab>
      </div>
    </>
  );
};

export default Translator;
