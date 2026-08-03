import style from "./CardMovie.module.css";
import Tag from "../Tag/Index";
import type { Movie } from "../../Types";

function CardMovie(props: Movie) {
  const { alt, src, titulo, genero, categoria, duracao, censura } = props;
  return (
    <li className={style.card}>
      <img src={src} alt={alt} />
      <div className={style.container}>
        <h3>{titulo}</h3>
        <div className={style.informacoes}>
          <div className={style.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={style.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardMovie;
