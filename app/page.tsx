import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import StackLayers from "@/components/StackLayers";
import Operations from "@/components/Operations";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <StackLayers />
      <Projects />
      <Operations />
      <Awards />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

