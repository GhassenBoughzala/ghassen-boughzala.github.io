import logo from "../assets/me.png";
import Typer from "./typer";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          {/* Profile Image */}
          <div className="avatar mb-8">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img
                src={logo}
                className="max-w-sm rounded-lg w-52 border-black bg-transparent"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm <span className="">Ghassen Boughzala</span>
          </h1>
          <h4 className="text-primary font-semibold">
            <Typer />
          </h4>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-base-content/70 leading-relaxed">
            with expertise in Java, Spring Boot, Angular, and React. I
            specialize in building scalable backend services and creating
            exceptional user experiences.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:boughzala.ghassen@gmail.com"
              className="btn btn-outline btn-info gap-2"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/boughzala-ghassen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-info gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/GhassenBoughzala"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-info gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="tel:+351931424958"
              className="btn btn-outline btn-info gap-2"
            >
              <Phone size={20} />
              +351 931 424 958
            </a>
          </div>

          {/* CTA Button */}
          <a href="#experience" className="btn btn-error btn-lg">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
