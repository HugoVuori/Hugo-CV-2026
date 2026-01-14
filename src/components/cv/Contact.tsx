import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Working on an early-stage problem or looking for help with sales and execution? 
            Tell me what you're building.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Contact</p>
                  <p className="font-medium">Use the form below — I reply quickly.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Availability</p>
                  <p className="font-medium">Open to sales, strategy, and execution work with founders.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Location</p>
                  <p className="font-medium">Finland — flexible with travel</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Working style</p>
                  <p className="font-medium">Happy to switch between sparring and hands-on delivery.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/60">
                References and more details available on request.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or your question..."
                  rows={5}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg rounded-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
