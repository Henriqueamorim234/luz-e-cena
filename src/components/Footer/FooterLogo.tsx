import Logo from "../logo/Index";
import style from "./Footer.module.css";

const FooterLogo = () => {
  return (
    <div className={style.logo}>
      <Logo src="./Logo.png" alt="Logo" />
      <p>Onde a realidade encontra a fantasia</p>
    </div>
  );
};

export default FooterLogo;
