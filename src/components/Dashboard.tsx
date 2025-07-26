import { useState } from "react";
import { FaProjectDiagram, FaTools, FaPhone, FaEnvelope, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const [showInputs, setShowInputs] = useState(false);

  const handleClick = () => {
    alert("Bon courage avec ton projet !.. You're Luck");
  };

  const tasks = [
    {
      title: "Built Login UI",
      languages: ["React", "Tailwind CSS"],
      result: "Responsive login with email/password input and validation.",
      date: "2025-06-03",
      status: "Completed",
    },
    {
      title: "Real-Time Chat App",
      languages: ["React", "Node.js", "MongoDB"],
      result: "Showed project info dynamically with gradient styling.",
      date: "2025-06-01",
      status: "Completed",
    },
    {
      title: "MY Youtube Clone!",
      languages: ["React", "CSS"],
      result: "Clicking profile image reveals secure login inputs.",
      liveUrl: "http://nabycoder.infinityfreeapp.com/",
      date: "2025-05-30",
      status: "Completed",
    },
  ];
  return (
    <div className="min-h-screen flex bg-gray-100">

      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 border-b border-indigo-800">
          Portfolio Dashboard
        </div>
        <nav className="flex flex-col flex-1 p-4 space-y-4">
          <button
            className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-indigo-700 transition ${activeTab === "projects" ? "bg-indigo-700" : ""
              }`}
            onClick={() => setActiveTab("projects")}
          >
            <FaProjectDiagram />
            <span>Projects</span>
          </button>
          <button
            className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-indigo-700 transition ${activeTab === "skills" ? "bg-indigo-700" : ""
              }`}
            onClick={() => setActiveTab("skills")}
          >
            <FaTools />
            <span>Skills</span>
          </button>
          <button
            className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-indigo-700 transition ${activeTab === "contact" ? "bg-indigo-700" : ""
              }`}
            onClick={() => setActiveTab("contact")}
          >
            <FaPhone />
            <span>Contact</span>
          </button>
          <button
            className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-indigo-700 transition ${activeTab === "settings" ? "bg-indigo-700" : ""
              }`}
            onClick={() => setActiveTab("settings")}
          >
            <FaCog />
            <span>Settings</span>
          </button>

        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-white">
        {activeTab === "projects" && (
          <section>
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
              <img
                src="https://i.pinimg.com/736x/d1/4a/4d/d14a4db750949c5b3d434c603ee1c1cc.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover shadow cursor-pointer"
                onClick={() => setShowInputs(!showInputs)}
              />
            <p>Here you can manage your projects. Add, edit or delete projects.</p>

            <ul className="mt-4 space-y-3">
              <li className="border p-3 rounded shadow-sm">
                <h2 className="font-semibold"> Real-Time Chat App </h2>
                <p>A React app to share recipes online.</p>
              </li>

              <li className="border p-3 rounded shadow-sm">
                <h2 className="font-semibold">MY Youtube Clone!..</h2>
                <p>A using php Javascript to make Cleary.</p>
              </li>

              <li className="border p-3 rounded shadow-sm">
                <h2 className="font-semibold">Project 2: Portfolio Website</h2>
                <p>Personal website showcasing my work and skills.</p>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "skills" && (
          <div className="">
            <div className="flex justify-end items-end px-7">
              <img
                src="https://i.pinimg.com/736x/e9/7b/8c/e97b8c40f5097b0642d867c739e69410.jpg"
                alt="Project Cover"
                className="w-20 h-20 rounded-full object-cover mx-auto shadow  "
              />
            </div>
            <section className=" mx-auto p-6 bg-white rounded-sm shadow-md w-full">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2 border-indigo-500 ">
                My Skills

              </h1>
            </section>
            <div className="rounded-xl p-4 bg-gradient-to-r from-green-400 via-red-500 to-blue-500 shadow-lg text-white">
              <h2 className="text-lg font-semibold mb-2">Node.js example <p className="text-gray-700">
                List and update your skills here like. : React.js ,Node.js, Express ,MongoDB, Tailwind CSS..!
              </p></h2>
              <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code>
                  {`const express = require("express");
                        const app = express();

                        app.get("/", (req, res) => {
                          const name = "Hakizimana Naby";
                          const role = "software developer";
                          res.send(\`Name: \${name}, Role: \${role}\`);
                        });

                        app.listen(3000, () => {
                          console.log("Server is running on port 3000");
                      });`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <section className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 pb-2 border-indigo-500">
              Contact Info
            </h1>

            <p className="text-gray-700 mb-4">
              You can update your contact details here.
            </p>
            <p className="mb-3 text-gray-800">
              Email: <a href="mailto:nabycoder41@example.com" className="text-indigo-600 hover:underline">nabycoder41@example.com</a>
            </p>
            <p className="text-gray-800">
              Phone: <a href="tel:+250791879616" className="text-indigo-600 hover:underline">+2507 918 79616</a>
            </p>
            <FaEnvelope className="text-xl hover:text-red-400 cursor-pointer" />
          </section>


        )}

        {activeTab === "settings" && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p>Manage your dashboard preferences and account settings.</p>
            <div className="mt-3">
              <Link to={'/'} className="text-red-600 w-1/2 bg-zinc-100 rounded-xl b-border py-2 px-4 shadow-xl">Logout</Link>
            </div>
            <div className="flex flex-col items-end space-y-4">




              {showInputs && (
                <div className="w-64 space-y-3">
                  <button
                    onClick={handleClick}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                  >
                    Click me
                  </button>
                </div>
              )}
            </div>
            <section className="max-w-4xl mx-auto p-6">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-indigo-500 pb-2">
                ✅  Completed Tasks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow p-4 border-l-4 border-green-400"
                  >
                    <h3 className="text-xl font-semibold text-indigo-700">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{task.date}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {task.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-2">{task.result}</p>
                    <span className="inline-block text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </section>

        )}
      </main>

    </div>
  );
}

export default Dashboard;
