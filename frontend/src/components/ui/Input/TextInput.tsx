import classes from "./TextInput.module.css";
import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: Props) => {
  return (
    <div className={classes.inputArea}>
      <input type="text" value={props.value} onChange={props.onChange} className={classes.input} />
    </div>
  );
};

export default TextInput;
