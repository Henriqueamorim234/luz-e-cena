import type React from "react";
import style from "./link.module.css";

function Link({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={style.link} {...rest}>
      {children}
    </a>
  );
}

export default Link;
