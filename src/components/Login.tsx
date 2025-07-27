import { useState } from "react";
import axios from "axios";
import { FaPhone, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        contact,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="bg-gray-800 py-12 px-4">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto">
          <img
            src="https://i.pinimg.com/736x/e1/0a/a1/e10aa1aa72706d4831dd05119066a6be.jpg"
            alt="Phone Illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-900 to-pink-600 opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay Connected</h2>
            <p className="text-sm md:text-base">Login from any device easily</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-8 py-12">
          <form className="w-full max-w-md space-y-6 text-gray-900" onSubmit={handleLogin}>
            <h2 className="text-3xl font-extrabold text-indigo-700 text-center">Login</h2>

            <div className="relative">
              <input
                type="text"
                placeholder="Phone or email"
                className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition"
            >
              Log In
            </button>

            <p className="text-center text-sm text-gray-600">
              Forgot password?
              <Link to="/forgot" className="text-indigo-600 hover:underline ml-1">
                Reset
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
