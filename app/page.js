import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import SelectedWork from "../components/SelectedWork";
import ContributedTo from "../components/ContributedTo";
import Experience from "../components/Experience";
import Capabilities from "../components/Capabilities";
import Writing from "../components/Writing";
import Lab from "../components/Lab";
import Currently from "../components/Currently";
import Contact from "../components/Contact";
import NetworkCanvas from "../components/NetworkCanvas";
import CursorGlow from "../components/CursorGlow";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <>
      <NetworkCanvas />
      <div className="grid-overlay" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <CursorGlow />
      <ScrollProgress />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        {/* 00 hero → 01 about → 02 work → 03 experience → 04 capabilities
            → 05 writing → 06 lab → 07 currently → 08 contact */}
        <Hero />
        <Ticker />
        <About />
        <SelectedWork />
        <ContributedTo />
        <Experience />
        <Capabilities />
        <Writing />
        <Lab />
        <Currently />
        <Contact />
      </main>
    </>
  );
}
