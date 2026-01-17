import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

const courses = [
  {
    code: "Junction 2025",
    name: "Account Manager for Sensofusion (defense sector IT-company)",
  },
  {
    code: "KV202051",
    name: "Exports and SME Internationalisation",
  },
  {
    code: "KV202010",
    name: "International Business Management",
  },
  {
    code: "JO022043",
    name: "Strategic Management",
  },
  {
    code: "KV20B705",
    name: "AI in International Business",
  },
];

const Coursework = () => {
  return (
    <section id="coursework" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Academics and Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Relevant Volunteering and Coursework
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Models and events shaping how I approach business. Volunteer work to expand my view, coursework to expand my knowledge.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-lg transition-all duration-300 bg-card shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{course.code}</p>
                    <span className="font-medium text-foreground">
                      {course.name}
                    </span>
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

export default Coursework;
