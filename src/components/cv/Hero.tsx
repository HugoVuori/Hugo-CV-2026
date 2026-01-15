import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "/IMG_7983copy.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            {/* Avatar */}
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full border-2 border-primary-foreground/20 overflow-hidden shadow-card">
                <img
                  src={heroImage}
                  alt="Hugo Vuori"
                  className="w-full h-full object-cover origin-center"
                  style={{ transform: "scale(2.47) translateX(6%)" }}
                />
              </div>
            </div>

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground mb-4"
          >
            Hugo Vuori
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-2"
          >
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-lg text-primary-foreground/60 mb-8 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Finland — Comfortable moving anywhere
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Commercial generalist with hands-on experience in early-stage startups and B2B/B2C sales and CRM/IT world. Best at simply getting things done in fast-moving, ambiguous environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg rounded-full"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              onClick={scrollToExperience}
              className="border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg rounded-full"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Experience
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-primary-foreground/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
