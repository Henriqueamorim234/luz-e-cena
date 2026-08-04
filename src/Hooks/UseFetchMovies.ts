import { useEffect, useState } from "react";
import type { Movie } from "../Types";
import { getMovies } from "../api";

const UseFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErro(null);

    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      setErro("Erro ao buscar filmes. Tente novamente");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading, erro };
};

export default UseFetchMovies;
