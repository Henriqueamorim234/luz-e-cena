import React from "react";
import style from "./input.module.css";

function InputText({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={style.input} {...rest} />;
}

export default InputText;
