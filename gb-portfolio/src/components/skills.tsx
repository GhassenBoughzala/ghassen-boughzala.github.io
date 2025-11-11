const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
        "NoSQL",
        "HTML",
        "CSS",
      ],
      icon: "💻",
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Express.js", "Node.js", "Angular", "React"],
      icon: "🚀",
    },
    {
      title: "Databases",
      skills: ["Elasticsearch", "MongoDB", "PostgreSQL"],
      icon: "🗄️",
    },
    {
      title: "Tools & Others",
      skills: ["GitHub", "GitLab", "Docker", "Jira", "Kafka", "Redux", "JUnit"],
      icon: "🛠️",
    },
  ];

  const languages = [
    { language: "French", level: "Bilingual", progress: 95 },
    { language: "English", level: "Bilingual", progress: 95 },
    { language: "Arabic", level: "Native", progress: 100 },
  ];

  return (
    <section id="skills" className="section-padding bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Skills & Languages
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Technologies and languages I work with
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="stats bg-base-100 border-base-400 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="stat">
                <div className="stat-title"></div>
                <div className="stat-value text-base text-wrap my-3">
                  {category.title}
                </div>
                <div className="stat-desc"></div>
                <div className="stat-figure text-primary">
                  <div className="text-4xl">{category.icon}</div>
                </div>
                <div className="stat-desc">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="badge badge-outline">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        {/*         <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl text-primary mb-6 justify-center">
              🌍 Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-lg mb-2">
                    {lang.language}
                  </h4>
                  <p className="text-secondary mb-2">{lang.level}</p>
                  <progress
                    className="progress progress-primary w-full"
                    value={lang.progress}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
