import { motion } from "framer-motion";
import { FolderOpen, Radar, Presentation, Blocks } from "lucide-react";

const projectItems = [
  {
    title: "Prospecting Agent",
    type: "AI sales tooling",
    description:
      "Turns a company list or business registry (Finland, Sweden) into ready-to-call lists: finds each company's website, extracts 2–5 decision-makers with direct phone numbers using an LLM, checks their public procurement history and ranks who to call first. Built with Claude for my own sales work, now used daily by the whole Alicent sales team and saving each seller 4–8 hours a week.",
    tags: ["Python", "LLM", "Web scraping", "Sales Ops"],
    icon: Radar,
  },
  {
    title: "Demo Builder",
    type: "Sales enablement",
    description:
      "Turns a discovery-call transcript or a prospect's website into a tailored demo configuration (the tenders, keywords and early signals that matter to that specific company), so every sales demo shows the prospect their own market instead of a generic one. Demos built with it have helped colleagues and my manager close deals, and I now train the whole sales team on the workflow.",
    tags: ["AI", "Public procurement", "Personalisation"],
    icon: Presentation,
  },
  {
    title: "LEGO Portfolio Tracker",
    type: "Alternative investments",
    description:
      "Tracks a LEGO collection as an investment portfolio: live BrickLink market prices, monthly value snapshots, price history and minifigure-level breakdowns, all in one dashboard.",
    tags: ["Node.js", "API integration", "Investing"],
    icon: Blocks,
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
            I build my own tools, mostly with AI, to solve problems I run into in sales and in everyday life. Some started as side projects and ended up in daily use across a sales team.
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
