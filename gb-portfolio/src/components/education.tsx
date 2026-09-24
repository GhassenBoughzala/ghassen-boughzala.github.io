import { GraduationCap, Award, Users } from "lucide-react";

const Education = () => {
  const languages = [
    { language: "Arabic", level: "Native", progress: 100 },
    { language: "French", level: "Bilingual", progress: 95 },
    { language: "English", level: "Bilingual", progress: 95 },
  ];

  const interests = [
    {
      title: "Rotaract Club Leadership",
      description:
        "Member for 4 years and President for 2 years at Rotaract Club Nabeul-Neapolis",
      icon: <Users className="text-primary" size={24} />,
    },
    {
      title: "Event Organization",
      description: "BIL event organizer",
      icon: <Award className="text-secondary" size={24} />,
    },
    {
      title: "Game Development Achievement",
      description: "Second Place for Best game of the year in SDL - 05/2018",
      icon: <Award className="text-accent" size={24} />,
    },
  ];

  return (
    <section id="education" className="section-padding bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Education & Achievements
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            My academic background and personal interests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Education</h3>
                  <p className="text-base-content/70">Academic Background</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Computer Engineering Degree
                  </h4>
                  <p className="text-secondary font-medium mb-2">
                    Private Higher School of Engineering and Technology
                  </p>

                  <p className="text-base-content/80">
                    Comprehensive education in computer engineering with a focus
                    on software development, system design, and modern
                    programming technologies.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge badge-outline">Software Development</span>
                    <span className="badge badge-outline">System Design</span>
                    <span className="badge badge-outline">Algorithms</span>
                    <span className="badge badge-outline">Databases</span>
                  </div>
                </div>

                <div className="divider my-2"></div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Languages</h4>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{lang.language}</span>
                          <span className="text-base-content/60 text-sm">
                            {lang.level}
                          </span>
                        </div>
                        <progress
                          className="progress progress-primary w-full"
                          value={lang.progress}
                          max="100"
                        ></progress>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Achievements */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Award className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    Interests & Achievements
                  </h3>
                  <p className="text-base-content/70">Beyond Development</p>
                </div>
              </div>

              <div className="space-y-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-base-200 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-base-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {interest.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{interest.title}</h4>
                      <p className="text-base-content/70 text-sm">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
