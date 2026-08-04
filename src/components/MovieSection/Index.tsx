import styles from "./MovieSection.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList/Index";
import { useEffect, useState } from "react";
import type { Movie } from "../../Types";
import { getMovies } from "../../api";

function MovieSection() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error("erro ao buscar livros", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes" />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em Cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  );
}

export default MovieSection;
