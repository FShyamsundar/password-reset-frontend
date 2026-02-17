import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Dashboard</h1>
        <p>Welcome! You are logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
