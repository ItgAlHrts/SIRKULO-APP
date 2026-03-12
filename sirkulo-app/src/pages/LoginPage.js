import React, { useState } from "react";
import "../styles/LoginPage.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin("user");
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin("admin");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-icon">♻️</div>
          <h1>Sirkulo</h1>
          <p>Bersampah Digital Pasti Poro</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email / No HP"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-masuk" onClick={handleUserLogin}>
            MASUK
          </button>
        </form>

        <div className="login-footer">
          <a href="#forgot">Lupa Password?</a>
          <p>
            Belum punya akun? <a href="#register">Daftar Sekarang</a>
          </p>
        </div>

        <div className="admin-login">
          <button className="btn-admin" onClick={handleAdminLogin}>
            Login Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
