import Hero from "../components/Hero";
import Map from "../components/Map";
import Testimonials from "../components/Testimonials";
import OurExperts from "../components/OurExperts";
import { TestimonialsData } from "@/components/data";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
<div>
  <Hero/>
  <OurExperts/>
  <Testimonials testimonials={TestimonialsData.slice(0,3)}/>
  <WhyChooseUs/>
  <Map/>
</div>
  );
}
