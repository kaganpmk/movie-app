import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// children: Fedainin koruduğu asıl sayfa (örneğin MovieDetail)
export default function PrivateRoute({ children }) {
  // 1. Redux'tan adamın giriş yapıp yapmadığını soruyoruz
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // 2. Eğer giriş YAPMAMIŞSA...
  if (!isLoggedIn) {
    // Navigate kancasıyla onu anında Login'e postala.
    // 'replace' kullanıyoruz ki adam tarayıcıda "Geri" tuşuna basıp tekrar girmeye çalışamasın.
    return <Navigate to="/login" replace />;
  }

  // 3. Eğer giriş YAPMIŞSA, gitmek istediği sayfayı (children) ona göster
  return children;
}
