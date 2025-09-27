const Experience = () => {
  const experiences = [
    {
      company: "KLx",
      location: "Portugal, Lisbon",
      period: "04/2025 - Current",
      role: "Full Stack Developer",
      achievements: [
        "Collaborating with cross-functional teams at KLx to design scalable backend services and enhance user-facing features.",
        "Developing end-to-end banking service solutions using Java 21, Spring Boot, and Angular, with a strong focus on performance, scalability, and security.",
        "Optimizing transactional systems and account services by designing RESTful APIs, enforcing strict access controls, and integrating robust PostgreSQL queries.",
      ],
    },
    {
      company: "Be-softilys",
      location: "Tunisia",
      period: "12/2022 - 04/2025",
      role: "Full Stack Developer",
      achievements: [
        "Developed more than 70 user stories leading to an increase of job performance.",
        "Implemented the CQRS event-based architecture using Axon framework to handle and publish 15 events from different projects.",
        "Accomplished migration to Java 17, SpringBoot 3 and Elasticsearch 8.",
        "Created over 300 unit and integration tests using the TDD approach.",
        "Achieved to improve code coverage from 10% to 95%, resolved bugs and issues vulnerabilities on SonarQube.",
        "Developed over 30 advanced database index configurations, resulting in a 40% increase in website loading speed.",
        "Spearheaded the integration of Kafka into the existing architecture, optimizing message delivery and ensuring high availability.",
      ],
    },
    {
      company: "TaaMarbouta",
      location: "Tunisia",
      period: "08/2022 - 11/2022",
      role: "Full Stack Developer",
      achievements: [
        "Restructured a web platform that allows over 100 students to view and book courses offered by a language training center.",
        "Facilitated over 5 new features and addition of a portal payment using Stripe Connect to book courses.",
        "Succeeded to migrate from Wordpress to a ReactJs and NodeJs.",
        "Established an admin dashboard for managing courses, users and scholarships.",
      ],
    },
    {
      company: "Le Record",
      location: "Tunisia",
      period: "06/2022 - 08/2022",
      role: "Full Stack Developer",
      achievements: [
        "Implemented a client application for a company specializing in marketing of clothing supplies with more 150 product.",
        "Maintained a product lifecycle management process, leading to a 25% reduction in product development cycle time.",
        "Engineered a high-performing webpack configuration that optimized build time by 45%.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            My professional journey as a Full Stack Developer
          </p>
        </div>

        <div className="timeline timeline-vertical">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-box glass-effect m-3 bg-transparent border-card-foreground">
                <div className="card-body">
                  <div className="collapse collapse-arrow border-0">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="card-title text-primary text-xl">
                            {exp.company}
                          </h3>
                          <p className="text-secondary font-medium">
                            {exp.role}
                          </p>
                          <p className="text-sm text-base-content/60">
                            {exp.location}
                          </p>
                        </div>
                        <div className="badge badge-info badge-lg mt-2 md:mt-0">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <div className="collapse-content text-sm">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-base-content/80">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;
