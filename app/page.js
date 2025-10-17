import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Certification from "./components/homepage/certification";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import getBlogs from "../utils/blogs";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const blogs = await getBlogs();
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};