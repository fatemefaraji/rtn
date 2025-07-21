import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import Spinner from "../../components/spinner/Spinner";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        login({ username });
        localStorage.setItem("isLoggedIn", "true");
        navigate("/create-content");
      } else {
        setError("Username or password is not correct");
      }
      setLoading(false);
    }, 1000);
  };

  if (loading) return <Spinner />;

  return (
    <div
      className={`max-w-md mx-auto mt-20 p-8 shadow-lg rounded-md
      ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
    >
      <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">🔐 Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className={`block mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border
              ${isDark
                ? "border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-600"}
              focus:outline-none focus:ring-2 focus:ring-emerald-400`}
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label className={`block mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border
              ${isDark
                ? "border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-600"}
              focus:outline-none focus:ring-2 focus:ring-emerald-400`}
            placeholder="Enter password"
            required
          />
        </div>

        {error && (
          <p className="text-red-600 text-center font-semibold">{error}</p>
        )}

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
