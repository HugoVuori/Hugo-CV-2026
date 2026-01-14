import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Sales & Growth",
    skills: [
      { name: "International Sales" },
      { name: "Business Development" },
      { name: "Lead Generation" },
      { name: "Market Segmentation" },
    ],
  },
  {
    title: "Technical",
    skills: [
      { name: "CRM (Salesforce, HubSpot)" },
      { name: "Data Analysis" },
      { name: "Forecasting" },
      { name: "Digital Marketing" },
    ],
  },
  {
    title: "Leadership",
    skills: [
      { name: "Team Coordination" },
      { name: "Strategic Planning" },
      { name: "Founder Sparring" },
      { name: "Public Speaking" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Finnish", level: "Native" },
      { name: "English", level: "Fluent / Professional" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Skills & Competencies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-foreground">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
