import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import DashboardUser from "./pages/DashboardUser";
import InputSetoran from "./pages/InputSetoran";
import HargaSampah from "./pages/HargaSampah";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("user"); // 'user' atau 'admin'
  const [userData, setUserData] = useState({
    name: "Nama Nasabah",
    nasabahId: "NAS-001",
    saldo: 7900,
  });

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
    if (type === "admin") {
      setCurrentPage("admin");
    } else {
      setCurrentPage("dashboard");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("login");
    setUserType("user");
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : userType === "admin" ? (
        <DashboardAdmin onLogout={handleLogout} />
      ) : (
        <div className="user-container">
          {currentPage === "dashboard" && (
            <DashboardUser
              userData={userData}
              onNavigate={setCurrentPage}
              onLogout={handleLogout}
            />
          )}
          {currentPage === "input-setoran" && (
            <InputSetoran
              userData={userData}
              onBack={() => setCurrentPage("dashboard")}
            />
          )}
          {currentPage === "harga-sampah" && (
            <HargaSampah onBack={() => setCurrentPage("dashboard")} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
