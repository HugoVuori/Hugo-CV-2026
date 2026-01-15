import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Sales & Strategy",
    company: "ICY | Luxury Wellness Tech Startup",
    location: "Finland",
    period: "2025 – Present",
    description: [
      "Opened the luxury hospitality segment and booked meetings with Finland's top operator and premium villa partners within two months",
      "Worked as a founder thought partner, bringing market data, segmentation logic, and competitor insights into everyday decisions",
      "Handled lead generation, website work, and direct sales of high-end physical products to clients",
      "Operated at the intersection of strategy and execution with a humble, learn-first mindset",
    ],
  },
  {
    title: "Sales | Energy SaaS",
    company: "S2B Energy (Subsidiary of Solteq)",
    location: "Finland",
    period: "2023 – 2024",
    description: [
      "Sold Salesforce-based CRM solutions in video calls with annual contract values between €20k–€150k",
      "Built pipeline through cold outreach and targeted messaging across public and private energy sector accounts",
      "Acted as a practical link between developers and customers, translating technical details into clear business outcomes",
    ],
  },
  {
    title: "Freelance Padel Coach",
    company: "Self-employed" ,
    location: "Finland",
    period: "2023 – 2024",
    description: [
      "Coached 30–80 hours per month with clients ranging from competitive juniors to senior recreational players",
      "Adjusted communication and teaching style based on personality, motivation, and skill level",
      "Built strong people skills through high-engagement one-on-one and group coaching",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-accent" />

              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      {item}
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

export default Experience;
