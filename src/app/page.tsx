import Image from "next/image";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import OurExperts from "./components/OurExperts";

export default function Home() {
  return (
<div>
  <Hero/>
  <OurExperts/>
  <Testimonials/>
  <Map/>
  <Footer/>
</div>
  );
}
