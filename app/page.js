
import Navbar from "@/components/Navbar";
import AboutHome from "@/components/AboutHome";
import OurRooms from "@/components/OurRooms";
import DiningSlider from "@/components/DiningSlider";
import OffersHome from "@/components/OffersHome";
import Footer from "@/components/Footer";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import Gallery from "@/components/Gallery";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
   <>
     <Navbar />
    <HomeHero></HomeHero>
     <AboutHome />
     <OurRooms />
     <DiningSlider />
     <OffersHome />
     <Gallery />
     <TestimonialsSlider />
     <Footer />
   </>
  );
}
