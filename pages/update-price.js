// pages/update-price.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import Link from 'next/link'

function UpdatePrice() {
  const [price, setPrice] = useState('');
  const router = useRouter();

  const fetchPrice = async () => {
    const response = await axios.get('https://agmar-paliwa.pl/apis/fuel-price');

    setPrice(response.data.price);
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to update the price');
      router.push('/login');
      return;
    }

    try {
      await axios.put('https://agmar-paliwa.pl/apis/fuel-price', { price }, { headers: { Authorization: token } });

      alert('Price updated successfully');
    } catch {
      alert('Failed to update price');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-to-panel'>
      <h1>AGMAR</h1>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="New price" required />
      <button type="submit">Zmień cenę</button>

      <Link href='/'>Strona główna</Link>
    </form>
  );
}

export default UpdatePrice;
