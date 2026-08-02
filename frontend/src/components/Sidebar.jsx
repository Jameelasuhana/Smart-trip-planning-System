import { Link, useNavigate } from "react-router-dom";

function Sidebar({ close }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // React Router navigation
  };

  return (
    <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-5 z-50">
      <button onClick={close}>Close</button>

      <ul className="mt-6 space-y-3">
        <li><Link to="/dashboard" onClick={close}>Dashboard</Link></li>
        <li><Link to="/create-trip" onClick={close}>Create Trip</Link></li>
        <li><Link to="/recommendations" onClick={close}>Recommendations</Link></li>
      </ul>

      <button
        className="mt-10 bg-red-500 text-white px-4 py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;