import { motion } from "framer-motion";
import {
  FolderOpen,
  ShoppingBag,
  TreePine,
  Gamepad2,
  PartyPopper,
  Database,
} from "lucide-react";

const storyMoments = [
  {
    title: "Small Marketing Agency",
    type: "Door-to-door sales",
    description: "Early door-to-door sales work with a small marketing agency in Tampere, Finland.",
    outcomes: ["Talking to customers one doorstep at a time"],
    icon: ShoppingBag,
    tags: ["Sales start", "Tampere"],
  },
  {
    title: "Forestry Work",
    type: "Seasonal physical work",
    description: "Seasonal forestry work for a small business in Eastern Finland, building resilience and discipline.",
    outcomes: ["Hard, physical work", "Eastern Finland"],
    icon: TreePine,
    tags: ["Grit", "Execution"],
  },
  {
    title: "Games",
    type: "Creative projects",
    description: "Built video games using different platforms — a first taste of making things from scratch.",
    outcomes: ["Experimented across platforms", "Kept curiosity alive"],
    icon: Gamepad2,
    tags: ["Building", "Curiosity"],
  },
  {
    title: "Event Management",
    type: "Founder, college events",
    description: "Founded and ran large college events; hired and led 10+ staff and served 450+ attendees at peak.",
    outcomes: ["Team of 10+ staff", "450+ attendees"],
    icon: PartyPopper,
    tags: ["Leadership", "Operations"],
  },
  {
    title: "CRM Operations",
    type: "First office role",
    description: "Hands-on CRM data work for enterprise clients; first exposure to structured operations.",
    outcomes: ["Enterprise CRM data work"],
    icon: Database,
    tags: ["Data", "Process"],
  },
];

const Projects = () => {
  return (
    <section id="story" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <FolderOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Origins</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            My Story
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {storyMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-card shadow-card border border-border flex items-center justify-center">
                  <moment.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <p className="text-sm text-accent font-medium mb-1">{moment.type}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{moment.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {moment.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {moment.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Takeaways</p>
                    <ul className="space-y-1">
                      {moment.outcomes.map((outcome, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
