// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../utils/api'; // 👈 uses the safe axios wrapper

// export default function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       navigate('/admin/dashboard');
//     } catch (err) {
//       alert(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       background: '#121212',
//       color: 'white'
//     }}>
//       <form onSubmit={login} style={{ width: 300 }}>
//         <h2>Admin Login</h2>
//         <input
//           type="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 10 }}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//           style={{ width: '100%', padding: 10, marginBottom: 20 }}
//         />
//         <button type="submit" style={{ width: '100%', padding: 10 }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminName', res.data.admin.name);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-6 rounded bg-gray-700 text-white"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 py-2 rounded hover:bg-yellow-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
