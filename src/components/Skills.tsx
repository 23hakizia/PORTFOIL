
const Skills = () => {
  return (
    <div>

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
            <p className="text-gray-800 text-sm">
              Grâce à mon parcours en développement web, j'ai acquis une solide expérience dans la création d'interfaces modernes, performantes et centrées sur l'utilisateur. Voici un aperçu des technologies que j'utilise régulièrement : <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Express.js</strong> et <strong>MongoDB</strong>.
            </p>

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
    </div>
  )
}

export default Skills
