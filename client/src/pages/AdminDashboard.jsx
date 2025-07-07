// export default function AdminDashboard() {
//     return (
//       <div>
//         <h1>Welcome to Admin Dashboard</h1>
//         <button onClick={() => {
//           localStorage.removeItem('token');
//           window.location.href = '/admin/login';
//         }}>
//           Logout
//         </button>
//       </div>
//     );
//   }
  
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    bounceRate: 0,
    pageViews: 0,
    newSessions: 0,
    avgTime: "0m:0s",
    closedValue: 0,
    visitors: 0,
    visitsPerDay: 0
  });

  const adminName = localStorage.getItem('adminName') || 'Admin';

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats")
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">{adminName}</h2>
        <nav className="space-y-2">
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">CRM</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">E-commerce</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">Analytics</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
          <h1 className="text-3xl font-semibold">Good Morning, {adminName}</h1>
          <input type="date" className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-700 p-4 rounded">
            <h5 className="text-sm text-gray-300">Bounce Rate</h5>
            <h2 className="text-2xl font-bold">{stats.bounceRate}%</h2>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h5 className="text-sm text-gray-300">Page Views</h5>
            <h2 className="text-2xl font-bold">{stats.pageViews}</h2>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h5 className="text-sm text-gray-300">New Sessions</h5>
            <h2 className="text-2xl font-bold">{stats.newSessions}</h2>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h5 className="text-sm text-gray-300">Avg Time on Site</h5>
            <h2 className="text-2xl font-bold">{stats.avgTime}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded border border-gray-600">
            <h5 className="text-lg font-bold mb-4">Status Summary</h5>
            <p>Closed Value: <strong>{stats.closedValue}</strong></p>
            <p>Total Visitors: <strong>{stats.visitors}%</strong></p>
            <p>Visits per day: <strong>{stats.visitsPerDay}</strong></p>
          </div>
          <div className="bg-gray-800 p-6 rounded border border-gray-600">
            <h5 className="text-lg font-bold mb-4">Todo List</h5>
            <ul className="list-disc pl-5">
              <li>Lorem Ipsum task <span className="bg-yellow-400 text-black px-2 py-0.5 rounded ml-2">Due Tomorrow</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
