import React from "react";
import "../styles/DashboardAdmin.css";

function DashboardAdmin({ onLogout }) {
  const stats = [
    { label: "Total Nasabah", value: 120, color: "#e8f5e9" },
    { label: "Sampah Bulan Ini", value: "850 kg", color: "#c8e6c9" },
    { label: "Total Solida Beredar", value: "Rp 12.450.000", color: "#a5d6a7" },
  ];

  const buttons = [
    { label: "Input Setoran", icon: "📥" },
    { label: "Transaksi Harga", icon: "💰" },
    { label: "Laporan", icon: "📊" },
    { label: "Data Nasabah", icon: "👥" },
  ];

  // Simple chart data
  const chartData = [15, 22, 18, 25, 20, 28, 24, 30, 26, 32, 28, 35];
  const maxValue = Math.max(...chartData);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Dashboard Admin</h1>
        <button className="btn-profile">👤</button>
        <button className="btn-logout" onClick={onLogout}>
          🚪
        </button>
      </div>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{ backgroundColor: stat.color }}
          >
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="action-buttons">
        {buttons.map((btn, index) => (
          <button key={index} className="action-btn">
            <span>{btn.icon}</span>
            <span>{btn.label}</span>
          </button>
        ))}
      </div>

      <div className="chart-section">
        <h2>Setoran Mingguan</h2>
        <div className="chart-container">
          <div className="chart">
            {chartData.map((value, index) => (
              <div key={index} className="chart-bar-wrapper">
                <div
                  className="chart-bar"
                  style={{ height: `${(value / maxValue) * 150}px` }}
                ></div>
                <span className="chart-label">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
