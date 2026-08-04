import styles from "./MovieSection.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList/Index";
import UseFetchMovies from "../../Hooks/UseFetchMovies";
import UseFilterMovies from "../../Hooks/UseFilterMovies";

function MovieSection() {
  const { movies, erro, isLoading } = UseFetchMovies();

  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } =
    UseFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText
            placeholder="Buscar filmes"
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em Cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {erro && <p className={styles.error}>{erro}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
}

export default MovieSection;
