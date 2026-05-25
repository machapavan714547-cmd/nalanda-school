import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import AdmissionForm from "@/components/AdmissionForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <WhyChooseUs />
        <Academics />
        <Facilities />
        <Gallery />
        <AdmissionForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
