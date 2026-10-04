import { motion } from "framer-motion";
import { Heart, Flag, Fish, ChefHat, Trophy } from "lucide-react";

const currentInterests = [
  {
    title: "Golf",
    description:
      "Started in summer 2026 and went from a 54 to a 16.2 handicap in one season. Best round so far: 87.",
    icon: Flag,
  },
  {
    title: "Fishing",
    description: "Out on the water whenever I get the chance.",
    icon: Fish,
  },
  {
    title: "Cooking",
    description: "Cooking for the people around me and always trying something new.",
    icon: ChefHat,
  },
];

const Interests = () => {
  return (
    <section id="interests" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Outside Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Interests
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {currentInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
                    <interest.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{interest.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 bg-card rounded-xl p-6 shadow-card flex items-start gap-3"
          >
            <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-accent font-medium">Before</p>
              <h3 className="text-xl font-semibold text-foreground mb-1">Tennis & Padel</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Played tennis and padel at a competitive level for years and later coached padel at Padel247.
                That background is a big reason golf clicked so quickly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
