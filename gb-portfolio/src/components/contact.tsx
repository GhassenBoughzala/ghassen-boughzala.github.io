import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can
            help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Get In Touch
              </h3>
              <p className="text-base-content/70 mb-8 text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you're looking for a full-stack developer or
                want to discuss potential collaborations, I'd love to hear from
                you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:boughzala.ghassen@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    boughzala.ghassen@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Phone className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+351931424958"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    +351 931 424 958
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-base-content/70">Lisbon, Portugal</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="font-medium mb-4">Connect with me:</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/boughzala-ghassen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle bg-secondary"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/GhassenBoughzala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle bg-secondary"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6 text-primary">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered w-full focus:input-primary"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered w-full focus:input-primary"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project discussion"
                    className="input input-bordered w-full focus:input-primary"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 w-full focus:textarea-primary"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn bg-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
