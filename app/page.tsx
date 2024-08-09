import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Specialities from "@/components/Specialities";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {<FloatingNav navItems={[{ name: "Home", link: "/" }]} />}
        <Hero />
        <AboutMe />
        <Specialities />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
