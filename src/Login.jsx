import { useForm } from "react-hook-form";
import { login } from "./Slice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // RHF'nin bize verdiği o sihirli alet çantası
  const {
    register, // Inputları RHF'ye bağlayan kanca
    handleSubmit, // Form gönderilirken hataları kontrol eden patron
    formState: { errors }, // Hataları tutan obje
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Adam formdaki her şeyi kurallara uygun doldurursa bu fonksiyon çalışacak
  const onSubmit = (data) => {
    dispatch(login(data));
    // İleride buraya: dispatch(login(data)) yazıp Redux'a göndereceğiz.
    navigate("/"); // Giriş başarılıysa anasayfaya atıyoruz
  };

  return (
    <div className="container mt-5 text-white" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Giriş Yap Aga</h2>

      {/* Form submit olduğunda önce handleSubmit patronu kontrol eder, sorun yoksa onSubmit'i çalıştırır */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* E-Posta Alanı */}
        <div className="mb-3">
          <label className="form-label">E-Posta</label>
          <input
            type="email"
            // Eğer e-postada hata varsa bootstrap'in is-invalid class'ını ekle (kızart)
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            // Olayın koptuğu yer: Inputu bağlıyoruz ve kuralları yazıyoruz
            {...register("email", { required: "Aga e-posta boş bırakılamaz!" })}
          />
          {/* Hata mesajını kırmızıyla altına basıyoruz */}
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Şifre Alanı */}
        <div className="mb-3">
          <label className="form-label">Şifre</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", {
              required: "Şifre zorunlu aga!",
              // Şifre en az 6 hane olmak ZORUNDA
              minLength: {
                value: 6,
                message: "Şifre en az 6 karakter olmalı!",
              },
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
