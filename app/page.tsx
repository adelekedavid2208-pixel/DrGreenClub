import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import MembershipPreview from "@/components/home/MembershipPreview";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HowItWorks from "@/components/home/HowItWorks";
import MonthlyFeature from "@/components/home/MonthlyFeature";
import WhyDrGreenClub from "@/components/home/WhyDrGreenClub";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MembershipPreview />
      <FeaturedCollection />
      <FeaturedProducts />
      <HowItWorks />
      <MonthlyFeature />
      <WhyDrGreenClub />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}