import Hero from "../components/Hero";
import Map from "../components/Map";
import Testimonials from "../components/Testimonials";
import OurExperts from "../components/OurExperts";
import { testimonials } from "./testimonials/page";

export default function Home() {
  return (
<div>
  <Hero/>
  <OurExperts/>
  <Testimonials testimonials={testimonials.slice(0,3)}/>
  <Map/>
</div>
  );
}
