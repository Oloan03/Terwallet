import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [saldo, setSaldo] = useState(0);
  const [pemasukkan, setPemasukkan] = useState([]);
  const [pengeluaran, setPengeluaran] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6543/dashboard').then(response => {
      const data = response.data;
      setSaldo(data.saldo);
      setPemasukkan(data.pemasukkan);
      setPengeluaran(data.pengeluaran);
    })
    .catch(error => {
      console.error('Terjadi error pada data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Saldo: {saldo}</p>

      <h2>Catatan pemasukkan</h2>
      <ul>
        {pemasukkan.map(item => (
          <li key={item.deskripsi}>{item.deskripsi}: {item.amount}</li>
        ))}
      </ul>

      <h2>Catatan pengeluaran</h2>
      <ul>
        {pengeluaran.map(item => (
          <li key={item.deskripsi}>{item.deskripsi}: {item.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;