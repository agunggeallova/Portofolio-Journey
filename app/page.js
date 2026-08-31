import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import Protocol from "../components/Protocol";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import NetworkCanvas from "../components/NetworkCanvas";
import CursorGlow from "../components/CursorGlow";
import ScrollProgress from "../components/ScrollProgress";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <NetworkCanvas />
      <div className="grid-overlay" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <CursorGlow />
      <ScrollProgress />

      <main>
        <Navbar />
        <Hero />
        <Ticker />
        <About />
        <Protocol />
        <Services />
        <div className="shell">
          <Experience />
          <Skills />
        </div>
        <Contact />
      </main>
    </>
  );
}
