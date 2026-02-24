import Movie from "./Movie";
import { useGetMoviesQuery, useGetNewMoviesQuery } from "./Slice/moviesApi";

export default function MovieList() {
  const {
    data: popularData,
    isLoading: isPopularLoading,
    error: popularError,
  } = useGetMoviesQuery();

  // 2. YENİ ÇIKAN FİLMLER (Çakışmasın diye isimlerine 'new' ekliyoruz)
  const {
    data: newData,
    isLoading: isNewLoading,
    error: newError,
  } = useGetNewMoviesQuery();

  // Herhangi biri yükleniyorsa ekranda loading gösterelim
  if (isPopularLoading || isNewLoading) {
    return (
      <h2 className="text-white text-center mt-5">
        Aga salon hazırlanıyor, filmler geliyor... 🍿
      </h2>
    );
  }

  // Herhangi birinde hata varsa patladığımızı söyleyelim
  if (popularError || newError) {
    return (
      <h2 className="text-danger text-center mt-5">
        Aga makinist kaçtı, TMDB patladı! 🎬
      </h2>
    );
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div className="row row-cols-6 w-100">
        {popularData.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>

      <h1>yeni List</h1>
      <div className="row row-cols-6 w-100">
        {newData.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
