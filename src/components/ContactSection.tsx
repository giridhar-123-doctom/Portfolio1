import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-4xl text-center">
        <p className="section-heading">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Open to opportunities, collaborations, and conversations about tech.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:giridharreddyeragana@gmail.com" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-3 rounded-xl hover:border-primary/30 transition-colors text-sm">
            <Mail className="w-4 h-4 text-primary" /> giridharreddyeragana@gmail.com
          </a>
          <a href="tel:+919573406359" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-3 rounded-xl hover:border-primary/30 transition-colors text-sm">
            <Phone className="w-4 h-4 text-primary" /> +91 9573406359
          </a>
          <a href="https://github.com/giridhar-123-doctom" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-3 rounded-xl hover:border-primary/30 transition-colors text-sm">
            <Github className="w-4 h-4 text-primary" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/giridharreddyeragana" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-3 rounded-xl hover:border-primary/30 transition-colors text-sm">
            <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
