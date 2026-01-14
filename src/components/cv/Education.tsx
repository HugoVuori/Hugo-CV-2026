import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Turku School of Economics (TSE)",
    institution: "International Business",
    location: "Turku, Finland",
    details: [
      "Major: International Business",
      "Minor: Management",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-accent font-medium">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-muted-foreground">{edu.university}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {edu.period && (
                      <div className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    )}
                    {edu.location && (
                      <div className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
