import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <div className="card col">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="img-card-top"
      />
      <h2>{movie.title}</h2>

      <Link to={`/movie/${movie.id}`} className="btn btn-primary">
        Detaylar
      </Link>
    </div>
  );
}
