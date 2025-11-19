import { Eye } from "lucide-react";
import "./ui/box.css";

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
    <section id="experience" className="section-padding bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Work Experience
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            My professional journey as a Full Stack Developer
          </p>
        </div>

        <div className="timeline timeline-vertical">
          {experiences.map((exp, index) => (
            <div key={index + 1} className="timeline-item">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <button
                      className="btn btn-circle hover:none heartbeat-border border-white"
                      onClick={() =>
                        (
                          document.getElementById(
                            index.toString()
                          ) as HTMLDialogElement
                        ).showModal()
                      }
                    >
                      <Eye className="text-accent" size={20} />
                    </button>
                  </div>
                  <div
                    className={`${
                      index % 2 === 0
                        ? "timeline-start mb-10 md:text-end"
                        : "timeline-end mb-10 md:text-end"
                    } mb-10`}
                  >
                    <time className="font-mono italic">{exp.period}</time>
                    <div className="text-lg font-black px-1">
                      {exp.company} - {exp.location}
                    </div>
                    <div className="text-md">{exp.role}</div>
                    <dialog id={index.toString()} className="modal">
                      <div className="modal-box">
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-base-content/80 text-left">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  <hr />
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
