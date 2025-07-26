import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-800 to-indigo-900 text-white font-sans">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-xl font-bold">Hakizimana Naby</div>
        <nav>
          <div className="flex space-x-6">
            <Link to="/contact" className="text-sm hover:underline hover:text-gray-300">
              Contact
            </Link>
            <Link to="/skills" className="text-sm hover:underline hover:text-gray-300">
              Skills
            </Link>
            <Link to="/project" className="text-sm hover:underline hover:text-gray-300">
              Project-view
            </Link>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-start px-4 md:px-10 py-10 space-y-6 md:space-y-0 md:space-x-8">
        {/* Profile Image + Socials */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/6f/09/01/6f0901e959508526aeb7f71198397751.jpg"
            alt="Your Profile"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => alert("Image Clicked!")}
          />
          <div className="absolute bottom-2 left-2 flex space-x-3">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-400" />
            </a>
            <a href="mailto:your@email.com">
              <FaEnvelope className="text-xl hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">Hello, I'm Naby</h1>
          <h2 className="text-lg md:text-xl italic bg-gradient-to-r from-purple-400 via-pink-500 via-black to-green-600 bg-clip-text text-transparent">
            Full Stack Web Developer
          </h2>
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            I have 3 years of hands-on experience in building web applications using
            <span className="text-white font-semibold"> React, Node.js, Express, and MongoDB</span>.
            I'm passionate about solving real-world problems through technology and enjoy building
            responsive, cross-platform web applications that deliver great user experiences.
          </p>
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl text-green-400">My Journey (2023 - 2026)</h3>
            <h2 className="text-lg md:text-2xl mt-4 bg-gradient-to-r from-white via-green-400 via-yellow-800 to-red-600 bg-clip-text text-transparent font-semibold">
              Passionate Full Stack Developer with 3 Years of Experience
            </h2>
          </div>
        </div>
      </section>


      <section className="bg-gray-800 py-12 px-4">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {/* Image Section */}
          {/* <div className="relative w-full md:w-1/2 h-72 md:h-auto">
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
          </div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-72 md:h-[450px] overflow-hidden"
          >
            <img
              src="https://i.pinimg.com/736x/e1/0a/a1/e10aa1aa72706d4831dd05119066a6be.jpg"
              alt="Phone Illustration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-900 to-pink-600 opacity-60 rounded-lg"></div>

            {/* Animated text inside the image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 md:px-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
              >
                Stay Connected
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1, y: 0,
                  color: ["#ffffff", "#10b981", "#3b82f6", "#ef4444", "#ffffff"],

                }}
                transition={{ delay: 0.4, duration: 0.8, repeat: Infinity }}
                className="text-sm md:text-base font-bold"
              >
                Login from any device easily
              </motion.p>
            </motion.div>
          </motion.div>



          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-8 py-12">
            <form className="w-full max-w-md space-y-6 text-gray-900">
              <h2 className="text-3xl font-extrabold text-indigo-700 text-center">Login</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone or email"
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
                <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
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
                Forgot password?{" "}
                <a href="/forgot" className="text-indigo-600 hover:underline">
                  Reset
                </a>
              </p>
            </form>
          </div>
        </div>

      </section>

      <footer className="bg-gray-900 py-8 text-center text-gray-300">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <FaInstagram className="text-xl hover:text-pink-400" />
          <FaGithub className="text-xl hover:text-white" />
          <FaLinkedin className="text-xl hover:text-blue-400" />
          <FaEnvelope className="text-xl hover:text-red-400 cursor-pointer" />
          <Link to="/" className="hover:scale-105 transition-transform">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent">M</span>
          </Link>
        </div>
        <h4 className="text-lg font-semibold">Passionate about Creating Value for Customers</h4>
        <p>&copy; {new Date().getFullYear()} Hakizimana Naby. All rights reserved.</p>
        <div className="mt-4 space-x-2 text-sm">
          <a href="/privacy" className="hover:text-white underline">Privacy Policy</a>
          <span className="text-gray-500">|</span>
          <a href="/terms" className="hover:text-white underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
