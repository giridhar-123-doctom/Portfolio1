import { Award, Star, Users } from "lucide-react";

const achievements = [
  { icon: <Star className="w-5 h-5" />, text: "5-Star Gold Badge in Python on HackerRank" },
  { icon: <Award className="w-5 h-5" />, text: "Completed Machine Learning & Data Science fundamentals" },
  { icon: <Users className="w-5 h-5" />, text: "Participated in Web-O-Thon (10,000 coders)" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="container max-w-4xl">
        <p className="section-heading">Achievements</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Milestones & <span className="text-gradient">recognition</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                {a.icon}
              </div>
              <p className="text-foreground text-sm font-medium">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
