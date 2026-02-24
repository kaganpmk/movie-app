import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./Slice/userSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    // 1. Redux'ı sıfırla
    dispatch(logout());
    // 2. Tarayıcı hafızasını temizle
    localStorage.removeItem("user");
    // 3. Adamı login sayfasına postala
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Movie App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex w-100">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
            <li className="nav-item ms-auto bg-dark rounded px-2">
              <div>
                {isLoggedIn ? (
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-warning">
                      Selam, {userInfo?.email}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="btn btn-primary btn-sm">
                    Giriş Yap
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
