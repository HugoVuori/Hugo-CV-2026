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
    title: "Door-to-Door",
    type: "Age 10",
    description: "Forced to go door-to-door marketing for my dads business, ended up liking it.",
    outcomes: ["Out of my comfort zone, used to be a shy person. Started developing work ethic."],
    icon: ShoppingBag,
    tags: ["Sales start", "Tampere"],
  },
  {
    title: "Forestry Work",
    type: "Age 13",
    description: "Seasonal field maintenance work in Eastern Finland, supporting a Finnish business through haymaking and land upkeep.",
    outcomes: ["Did not like this, but learned the value of hard physical work."],
    icon: TreePine,
    tags: ["Grit", "Execution"],
  },
  {
    title: "Games",
    type: "Age 15",
    description: "Built video games using multiple platforms — a first taste to creating things, instead of just consuming.",
    outcomes: ["Learned multiple tools and platforms", "Discovered my creative side"],
    icon: Gamepad2,
    tags: ["Building", "Curiosity"],
  },
  {
    title: "Event Management",
    type: "Age 18",
    description: "Founded and ran large college events; hired and led 10+ staff and served 450+ attendees at peak.",
    outcomes: ["Team of 10+ staff", "450+ attendees", "First touch to leadership"],
    icon: PartyPopper,
    tags: ["Leadership", "Operations",],
  },
  {
    title: "First Office Job",
    type: "Age 19",
    description: "Hands-on CRM data work for enterprise clients; first exposure to structured operations. Simple but important work.",
    outcomes: ["Just consistent effort", "Learning the importance of data and its quality"],
    icon: Database,
    tags: ["Data", "Process"],
  },
];

const StoryHorizontal = () => {
  return (
    <section id="story" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <FolderOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">My Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Early work history
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A quick left-to-right look at the moments that shaped how I work.
          </p>
        </motion.div>

        <div className="relative overflow-x-auto pb-10">
          <div className="hidden md:block absolute top-14 left-0 right-0 h-px bg-border" />
          <div className="flex md:justify-between gap-6 md:gap-8 min-w-max md:min-w-full">
            {storyMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative w-72 md:w-full md:max-w-xs"
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-12 w-3 h-3 rounded-full bg-accent border-2 border-card" />
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-card shadow-card border border-border flex items-center justify-center">
                    <moment.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300 mt-10">
                  <p className="text-sm text-accent font-medium mb-1">{moment.type}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2 text-center md:text-left">
                    {moment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {moment.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
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

export default StoryHorizontal;
