import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Hugo Vuori. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> in Finland
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
