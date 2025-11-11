import { Github, Linkedin, Mail, Heart, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Ghassen Boughzala
            </h3>
            <p className="text-base-content/70">
              Full Stack Developer passionate about creating innovative
              solutions and building scalable applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/boughzala-ghassen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-accent"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/GhassenBoughzala"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm hover:btn-accent"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:boughzala.ghassen@gmail.com"
                className="btn btn-circle btn-outline btn-sm hover:btn-accent"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#experience"
                  className="hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-primary transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <a
                  href="mailto:boughzala.ghassen@gmail.com"
                  className="hover:text-primary"
                >
                  boughzala.ghassen@gmail.com
                </a>
              </p>
              <p className="text-base-content/70">Lisbon, Portugal</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider"></div>
        <div className="text-center text-sm text-base-content/70">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ghassen Boughzala. Built with
            <Heart size={16} className="text-red-500" />
            using React & Daisy UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
