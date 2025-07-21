import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/create-content");
    } else {
      alert("password or username is not correct");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">🔐 Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-semibold py-2 rounded hover:bg-emerald-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
