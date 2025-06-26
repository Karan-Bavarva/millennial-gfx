export default function AdminDashboard() {
    return (
      <div>
        <h1>Welcome to Admin Dashboard</h1>
        <button onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/admin/login';
        }}>
          Logout
        </button>
      </div>
    );
  }
  