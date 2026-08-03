import style from "./banner.module.css";

type BannerProps = {
  src: string;
  alt: string;
};

const Banner = ({ src, alt }: BannerProps) => {
  return <img src={src} alt={alt} className={style.banner} />;
};

export default Banner;
