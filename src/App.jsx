import { Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import Navbar from "./Navbar";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<MovieList />} />

        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetail />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
