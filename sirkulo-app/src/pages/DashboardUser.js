import React from "react";
import "../styles/DashboardUser.css";

function DashboardUser({ userData, onNavigate, onLogout }) {
  const menuItems = [
    { id: "input-setoran", label: "Input Setoran", icon: "📥" },
    { id: "tukar-sampah", label: "Tukar Sampah", icon: "🔄" },
    { id: "riwayat", label: "Riwayat", icon: "📋" },
    { id: "harga-sampah", label: "Harga Sampah Hari Ini", icon: "💰" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-top">
          <button className="btn-back">👤</button>
          <button className="btn-logout" onClick={onLogout}>
            🚪
          </button>
        </div>

        <div className="balance-card">
          <p className="label">Saldo Anda</p>
          <h2 className="balance">
            Rp {userData.saldo.toLocaleString("id-ID")}
          </h2>
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => onNavigate(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="stats-section">
        <h3>Total Sampah Anda</h3>
        <div className="stats-card">
          <p className="stats-number">48 kg</p>
          <p className="stats-label">Total sampah yang sudah dikumpulkan</p>
        </div>
      </div>

      <div className="info-banner">
        <p>📢 Kerjakan targetmu dan tukar sampah dengan uang!</p>
      </div>
    </div>
  );
}

export default DashboardUser;
