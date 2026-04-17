import { ExternalLink, Database, Server } from "lucide-react";

const projects = [
  {
    title: "Edu Track",
    subtitle: "Student Study Planner & Notes Manager",
    tech: ["Django", "Python", "MySQL"],
    icon: <Database className="w-5 h-5" />,
    link: "https://github.com/giridhar-123-doctom/EduTrack-System",
    points: [
      "Django-based web app managing 100+ student records and notes",
      "Designed efficient database schema for structured data",
      "Built features for data organization and workflow management",
      "Applied object-oriented programming principles throughout",
    ],
  },
  {
    title: "Giridhar_Portfolio",
    subtitle: "Personal Portfolio Website",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    icon: <Server className="w-5 h-5" />,
    link: "https://github.com/giridhar-123-doctom/Portfolio1",
    points: [
      "Responsive portfolio website showcasing projects and skills",
      "Modern UI design with smooth animations and transitions",
      "Optimized for performance and cross-browser compatibility",
      "Seamless integration with GitHub and LinkedIn profiles",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-4xl">
        <p className="section-heading">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Things I've <span className="text-gradient">built</span>
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:card-glow transition-all duration-300 block cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-primary">{project.icon}</span>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
