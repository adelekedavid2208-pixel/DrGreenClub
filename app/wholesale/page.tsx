import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WholesaleHero from "@/components/wholesale/WholesaleHero";
import { WhyPartner } from "@/components/wholesale/WhyPartner";
import WholesaleCategories from "@/components/wholesale/WholesaleCategories";
import PartnershipProcess from "@/components/wholesale/PartnershipProcess";
import { PartnershipCTA } from "@/components/wholesale/PartnershipCTA";
import { WholesaleFAQ } from "@/components/wholesale/WholesaleFAQ";


export default function WholesalePage() {
  return (
    <>
      <Navbar />
      <WholesaleHero />
      <WhyPartner />
      <WholesaleCategories />
      <PartnershipProcess />
      <PartnershipCTA />
      <WholesaleFAQ />
      <Footer />
    </>
  );
}