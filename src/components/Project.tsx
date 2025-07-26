import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 interface ProjectType {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl: string
  githubUrl: string
}

const projects: ProjectType[] = [
  {
    title: "Stock Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://i.pinimg.com/736x/20/d1/a2/20d1a2ccba27f69971691cb9182d7fe9.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/dashboard"
  },
  {
    title: "SmartSpaces project",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "SQL_DB", "PHP", "Javascript", "realtime responsive", "Tailwind CSS"],
    imageUrl: "https://i.pinimg.com/736x/f1/c6/7a/f1c67ad002e28afb97818c4a1fb1e7e6.jpg",
    liveUrl: "https://task-app-demo.com",
    githubUrl: "https://github.com/dashboard"
  },
  {
    title: "E-Commerce Platform",
    description: "Real-time weather tracking application with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Leaflet"],
    imageUrl: "https://i.pinimg.com/736x/de/83/c8/de83c8766dc0c24e7c107aee02ec1212.jpg",
    liveUrl: "https://weather-dash.com",
    githubUrl: "https://github.com/dashboard"
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    imageUrl: "https://i.pinimg.com/736x/12/67/5e/12675e5e45893227d36f8f5f14b1ed62.jpg",
    liveUrl: "https://social-analytics.com",
    githubUrl: "https://github.com/dashboard"
  },
  {
    title: "BlogPost website",
    description: "Welcome to my personal blog, where I share insights, stories, and tips from my journey as a developer and creator.",
    technologies: ["React", "TypeScript", "E-learning blog"],
    imageUrl: "https://i.pinimg.com/736x/a6/04/a7/a604a780a09578b043ef243f3bb5f459.jpg",
    liveUrl: "https://fit-track.com",
    githubUrl: "https://github.com/dashboard"
  },
  {
    title: "Myclone of youtube",
    description: "Community-driven recipe sharing platform with user ratings and comments.",
    technologies: ["React", "Tailwind css", "MySQL", "PHP"],
    imageUrl: "https://i.pinimg.com/736x/b6/b1/98/b6b1982d0244eba66d1e663deaaef091.jpg",
    liveUrl: "http://nabycoder.infinityfreeapp.com/",
    
    githubUrl: "https://github.com/dashboard"
  }
]

function Project() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className='bg-black text-white py-2 px-4 rounded shadow-md'>Return</Link>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <FaTimes/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 font-medium bg-black text-white rounded px-2 py-1"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
