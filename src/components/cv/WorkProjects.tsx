import { motion } from "framer-motion";
import { FolderOpen, Gauge, Dumbbell, Globe2 } from "lucide-react";

const projectItems = [
  {
    title: "Resale OS",
    type: "AI-powered analysis",
    description:
      "Instantly analyzes resale listings (Vinted, Depop, eBay) from a link. Calculates a Deal Score (0–100) using brand, condition, price, and risk factors, plus cross-platform price comparisons to surface the best buys.",
    tags: ["AI", "Pricing", "Marketplace", "Automation"],
    icon: Gauge,
  },
  {
    title: "FitMatch",
    type: "Social fitness",
    description:
      "Connects people with like-minded training partners through streamlined onboarding and a discovery page. Emphasizes community, shared goals, and a modern UI that makes finding motivation feel simple.",
    tags: ["Social", "Mobile UX", "Community"],
    icon: Dumbbell,
  },
  {
    title: "CapitalTrail",
    type: "VC matcher",
    description:
      "Curated VC matcher that automates investor research for founders. Scores fit across 10k+ firms by industry, stage, and geography, analyzes portfolios, and produces a personalized investor list in seconds.",
    tags: ["Automation", "Venture", "Scoring"],
    icon: Globe2,
  },
];

const WorkProjects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <FolderOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground">
            In my spare time, I actively develop projects to push my boundaries in AI, technical understanding, and rapid innovation — experimenting with new technologies to solve real-world problems and stay ahead of the digital curve.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projectItems.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-accent font-medium">{project.type}</p>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;
