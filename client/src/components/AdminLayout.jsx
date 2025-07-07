import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen text-white">
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/admin/dashboard" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/admin/users" className="hover:text-yellow-400">Manage Users</Link>
          <Link to="/admin/settings" className="hover:text-yellow-400">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-900 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
