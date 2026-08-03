import React from "react";
import style from "../Header.module.css";

function HeaderList({ children }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={style.cabecalho}>{children}</ul>;
}

export default HeaderList;
