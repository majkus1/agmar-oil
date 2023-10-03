// pages/login.js

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://agmar-paliwa.pl/apis/login', { username, password });

      localStorage.setItem('token', response.data.token);

      router.push('/update-price');
    } catch {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-to-panel'>
      <h1>AGMAR</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Login" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" required />
      <button type="submit">Zaloguj</button>
    </form>
  );
}

export default Login;
