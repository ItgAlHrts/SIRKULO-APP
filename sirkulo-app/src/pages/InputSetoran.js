import React, { useState } from "react";
import "../styles/InputSetoran.css";

function InputSetoran({ userData, onBack }) {
  const [nama, setNama] = useState("");
  const [nomorNasabah, setNomorNasabah] = useState(userData.nasabahId);
  const [jenisSampah, setJenisSampah] = useState("plastik");
  const [berat, setBerat] = useState("");
  const [total, setTotal] = useState(0);

  const hargaSampah = {
    plastik: 1500,
    kertas: 2000,
    logam: 5000,
    kaca: 1000,
  };

  const handleBeratChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setBerat(value);
    setTotal(value * hargaSampah[jenisSampah]);
  };

  const handleJenisChange = (e) => {
    setJenisSampah(e.target.value);
    if (berat) {
      setTotal(berat * hargaSampah[e.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Setoran berhasil! Total: Rp " + total.toLocaleString("id-ID"));
    onBack();
  };

  return (
    <div className="input-container">
      <div className="header">
        <button className="btn-back" onClick={onBack}>
          ← Kembali
        </button>
        <h1>Input Setoran</h1>
      </div>

      <div className="form-section">
        <div className="info-box">
          <p>
            Nama Nasabah: <strong>{userData.name}</strong>
          </p>
          <p>Cari Nama / Scan QR</p>
          <p>Jenis Sampah</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Jenis Sampah</label>
            <select value={jenisSampah} onChange={handleJenisChange}>
              <option value="plastik">Plastik</option>
              <option value="kertas">Kertas</option>
              <option value="logam">Logam</option>
              <option value="kaca">Kaca</option>
            </select>
          </div>

          <div className="form-group">
            <label>Berat (kg)</label>
            <input
              type="number"
              step="0.1"
              placeholder="0"
              value={berat}
              onChange={handleBeratChange}
              required
            />
          </div>

          <div className="total-section">
            <p className="label">Total:</p>
            <p className="total">Rp {total.toLocaleString("id-ID")}</p>
          </div>

          <button type="submit" className="btn-simpan">
            SIMPAN TRANSAKSI
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputSetoran;
