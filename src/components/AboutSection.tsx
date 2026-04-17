const skills = [
  { category: "Programming", items: ["Python (OOP)", "JavaScript"] },
  { category: "Web Dev", items: ["HTML", "CSS", "Django", "REST APIs"] },
  { category: "Databases", items: ["MySQL", "SQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { category: "Concepts", items: ["OOP", "Data Structures", "SDLC"] },
  { category: "Data", items: ["Excel", "Pandas"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-4xl">
        <p className="section-heading">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Building things with <span className="text-gradient">code & curiosity</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
          B.Tech in Artificial Intelligence from BEST Innovation University with a CGPA of 9.04. 
          I enjoy building backend systems, working with data, and solving algorithmic challenges.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
              <h3 className="font-mono text-xs text-primary uppercase tracking-wider mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-sm text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
