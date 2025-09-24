import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "University Management Application",
      description: "A comprehensive university management system built with modern technologies to handle student enrollment, course management, and administrative tasks.",
      technologies: ["SpringBoot", "MySQL", "Java 17", "Angular 15"],
      features: [
        "Student enrollment system",
        "Course scheduling and management",
        "Grade tracking and reporting",
        "Administrative dashboard"
      ],
      category: "Web Application"
    },
    {
      title: "DevOps Application Pipeline",
      description: "Complete CI/CD pipeline implementation with automated testing, code quality checks, and deployment automation.",
      technologies: ["Jenkins", "SpringBoot", "DockerHub", "Nexus", "SonarQube", "Log4J", "Maven", "JUnit"],
      features: [
        "Automated CI/CD pipeline",
        "Code quality analysis with SonarQube",
        "Containerized deployment with Docker",
        "Automated testing and reporting"
      ],
      category: "DevOps"
    },
    {
      title: "Microservices Inventory Management",
      description: "Scalable microservices architecture for inventory management with service discovery and API gateway implementation.",
      technologies: ["SpringBoot", "Eureka", "Zuul Gateway", "MongoDB", "MySQL", "Docker Compose"],
      features: [
        "Microservices architecture",
        "Service discovery with Eureka",
        "API Gateway with Zuul",
        "Multi-database support"
      ],
      category: "Microservices"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Showcase of my technical projects and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="badge badge-primary badge-outline">
                    {project.category}
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm btn-circle">
                      <Github size={16} />
                    </button>
                    <button className="btn btn-ghost btn-sm btn-circle">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                
                <h3 className="card-title text-primary mb-3">{project.title}</h3>
                <p className="text-base-content/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-secondary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base-content/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-actions">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="badge badge-secondary badge-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;