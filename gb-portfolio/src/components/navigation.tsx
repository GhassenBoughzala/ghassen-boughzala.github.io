import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Linkedin } from "lucide-react";
import Theme from "./theme";
import logo from "../assets/me.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`navbar fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base-100/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <a href="#" className="btn btn-ghost text-xl font-bold gradient-text">
          <img src={logo} className="max-w-sm rounded-lg w-10" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-primary transition-colors font-bold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex flex-wrap navbar-end">
        {/* Mobile menu button */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        <a
          href="https://linkedin.com/in/boughzala-ghassen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a href="mailto:boughzala.ghassen@gmail.com">
          <Mail className="m-2" size={18} />
        </a>
        <Theme />
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg lg:hidden">
          <ul className="menu p-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
