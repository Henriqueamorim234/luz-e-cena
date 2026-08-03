import React from "react";
import style from "../Header.module.css";

function HeaderListItem({ children }: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={style.menuitem}>{children}</li>;
}

export default HeaderListItem;
