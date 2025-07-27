import { useState } from "react";
import axios from "axios";
import { FaPhone, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        contact,
        password,
        confirmPassword,
      });

      setSuccess(res.data.message);
      setUsername("");
      setContact("");
      setPassword("");
      setConfirmPassword("");
      
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err: unknown) {
      // Type-safe error handling:
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Registration failed");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* LEFT SIDE - IMAGE WITH OVERLAY */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/e1/0a/a1/e10aa1aa72706d4831dd05119066a6be.jpg"
          alt="Phone Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-900 to-pink-600 opacity-60"></div>
        <div className="absolute text-white text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Us Today</h2>
          <p className="text-sm md:text-base">Create your account and start building</p>
        </div>
      </div>

      {/* RIGHT SIDE - REGISTER FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <form
          onSubmit={handleRegister}
          className="bg-white px-6 py-8 rounded-md shadow-md w-full max-w-sm space-y-5"
        >
          <h2 className="text-2xl font-bold text-indigo-700 text-center">Register</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}

          {/* Username */}
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2.5 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Phone/Email */}
          <div className="relative">
            <input
              type="text"
              placeholder="Phone or email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2.5 px-4 pr-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2.5 px-4 pr-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2.5 px-4 pr-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
