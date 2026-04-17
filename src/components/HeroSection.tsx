import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container max-w-4xl text-center relative z-10">
        <p className="section-heading mb-4 animate-fade-in">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up">
          <span className="text-foreground">Giridhar</span>
          <br />
          <span className="text-gradient">Reddy Eragana</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Aspiring Software Engineer skilled in Python, Django & SQL — building scalable web applications and REST APIs.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a href="mailto:giridharreddyeragana@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
          <a href="https://github.com/giridhar-123-doctom" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-border transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/giridharreddyeragana" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-border transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <a href="#about" className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
