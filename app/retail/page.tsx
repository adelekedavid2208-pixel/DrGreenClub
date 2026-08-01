import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RetailHero from "@/components/retail/RetailHero";
import ShopCategories from "@/components/retail/ShopCategories";
import FeaturedRetailProducts from "@/components/retail/FeaturedRetailProducts";
import RetailBenefits from "@/components/retail/RetailBenefits";
import RetailMembershipCTA from "@/components/retail/RetailMembershipCTA";
import RetailFAQ from "@/components/retail/RetailFAQ";


export default function RetailPage() {
  return (
    <>
      <Navbar />
      <RetailHero />
      <ShopCategories />
      <FeaturedRetailProducts />
      <RetailBenefits />
      <RetailMembershipCTA />
      <RetailFAQ />
      <Footer />
    </>
  );
}