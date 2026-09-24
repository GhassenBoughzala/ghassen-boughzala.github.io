import logo from "../assets/me.png";
import Typer from "./typer";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          {/* Profile Image */}
          <div className="avatar mb-8">
            <div className="w-32 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 animate-float">
              <img
                src={logo}
                className="max-w-sm rounded-lg w-52 border-black bg-transparent"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm <span className="gradient-text">Ghassen Boughzala</span>
          </h1>

          <div className="h-10 mb-6 flex justify-center">
            <Typer />
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-base-content/70 leading-relaxed">
            Software Engineer with 3+ years building scalable, secure backend
            services and modern web apps with Java, Spring Boot, Angular and
            React. I turn complex requirements into performant, well-tested
            systems &mdash; from event-driven banking platforms to 95% test
            coverage.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:boughzala.ghassen@gmail.com"
              className="btn btn-outline gap-2"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/boughzala-ghassen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/GhassenBoughzala"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a href="tel:+351931424958" className="btn btn-outline gap-2">
              <Phone size={20} />
              +351 931 424 958
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#experience" className="btn btn-primary btn-lg gap-2">
              View My Work
            </a>
            <a
              href="/Ghassen_Boughzala_CV.pdf"
              download
              className="btn btn-outline btn-lg gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
