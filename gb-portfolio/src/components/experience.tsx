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
        "Design and build end-to-end banking solutions with Java 21, Spring Boot and Angular, prioritising performance, scalability and security.",
        "Deliver RESTful account and transaction APIs with strict access controls and optimised PostgreSQL queries.",
        "Collaborate with cross-functional teams to design scalable backend services and enhance user-facing features.",
      ],
    },
    {
      company: "Be-softilys",
      location: "Tunisia",
      period: "12/2022 - 04/2025",
      role: "Full Stack Developer",
      achievements: [
        "Delivered 70+ user stories, directly improving product performance and team velocity.",
        "Implemented an event-driven CQRS architecture with the Axon framework, publishing 15 domain events across projects.",
        "Led the migration to Java 17, Spring Boot 3 and Elasticsearch 8.",
        "Wrote 300+ unit and integration tests using TDD, raising code coverage from 10% to 95% and resolving SonarQube bugs and vulnerabilities.",
        "Tuned 30+ database indexes, improving page-load speed by 40%.",
        "Integrated Apache Kafka into the existing architecture, optimising message delivery and high availability.",
      ],
    },
    {
      company: "TaaMarbouta",
      location: "Tunisia",
      period: "08/2022 - 11/2022",
      role: "Full Stack Developer",
      achievements: [
        "Rebuilt a course-booking platform serving 100+ students for a language-training centre.",
        "Migrated the product from WordPress to a React and Node.js stack.",
        "Added 5 features including Stripe Connect payments for course booking.",
        "Built an admin dashboard to manage courses, users and scholarships.",
      ],
    },
    {
      company: "Le Record",
      location: "Tunisia",
      period: "06/2022 - 08/2022",
      role: "Full Stack Developer",
      achievements: [
        "Built a client application for a clothing-supplies marketing company managing 150+ products.",
        "Streamlined the product lifecycle process, cutting development cycle time by 25%.",
        "Engineered a high-performance Webpack configuration that reduced build time by 45%.",
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
                        ? "timeline-start md:text-end"
                        : "timeline-end md:text-end"
                    } m-10`}
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
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
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
