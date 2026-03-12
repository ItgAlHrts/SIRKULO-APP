import React from "react";
import "../styles/HargaSampah.css";

function HargaSampah({ onBack }) {
  const hargaHariIni = [
    { id: 1, nama: "Plastik PET", harga: 1500 },
    { id: 2, nama: "Kertas", harga: 2000 },
    { id: 3, nama: "Kardus", harga: 1200 },
    { id: 4, nama: "Kaca", harga: 1000 },
    { id: 5, nama: "Logam", harga: 5000 },
    { id: 6, nama: "Aluminium", harga: 3500 },
  ];

  return (
    <div className="harga-container">
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Kembali
        </button>
        <h1>Harga Sampah Hari Ini</h1>
      </div>

      <div className="table-section">
        <table className="harga-table">
          <tbody>
            {hargaHariIni.map((item) => (
              <tr key={item.id} className="table-row">
                <td className="nama-sampah">{item.nama}</td>
                <td className="harga-sampah">
                  Rp {item.harga.toLocaleString("id-ID")}/kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="update-info">
          <p>Terakhir update: 10 Maret 2026</p>
          <p>Harga dapat berubah sewaktu-waktu</p>
        </div>

        <button className="btn-tutup" onClick={onBack}>
          TUTUP
        </button>
      </div>
    </div>
  );
}

export default HargaSampah;
