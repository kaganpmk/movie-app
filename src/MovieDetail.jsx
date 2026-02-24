import { Link, useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "./Slice/moviesApi";

export default function MovieDetail() {
  const { id } = useParams();

  const { data: movie, error, isLoading } = useGetMovieByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div
      className=" mt-5 text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      {/* Geri Dön Butonu */}
      <Link to="/" className="btn btn-outline-light mb-4">
        &larr; Ana Sayfaya Dön
      </Link>

      <div className="row">
        {/* Sol Taraf: Devasa Afiş */}
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* Sağ Taraf: Film Bilgileri */}
        <div className="col-md-8">
          <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>

          {/* Orijinal ismi ve Puanı */}
          <h5 className="text-muted mb-4">
            {movie.original_title} | ⭐ {movie.vote_average.toFixed(1)} / 10
          </h5>

          {/* Film Özeti */}
          <h4 className="border-bottom pb-2">Özet</h4>
          <p className="fs-5" style={{ lineHeight: "1.8" }}>
            {movie.overview ||
              "Aga bu filmin Türkçe özeti girilmemiş maalesef."}
          </p>

          {/* Aksiyon Butonu: Detay sayfasından da sepete ekletebiliriz! */}
          <div className="mt-5">
            <button className="btn btn-primary btn-lg px-5">
              🛒 Sepete (Koleksiyona) Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
