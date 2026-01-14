import Navigation from "@/components/cv/Navigation";
import Hero from "@/components/cv/Hero";
import StoryHorizontal from "@/components/cv/StoryHorizontal";
import Experience from "@/components/cv/Experience";
import WorkProjects from "@/components/cv/WorkProjects";
import Education from "@/components/cv/Education";
import Skills from "@/components/cv/Skills";
import Coursework from "@/components/cv/Coursework";
import Contact from "@/components/cv/Contact";
import Footer from "@/components/cv/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StoryHorizontal />
      <Experience />
      <WorkProjects />
      <Education />
      <Skills />
      <Coursework />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
