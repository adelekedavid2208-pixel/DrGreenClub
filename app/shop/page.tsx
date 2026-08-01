import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopHero from "@/components/shop/ShopHero";
import ShopFilters from "@/components/shop/ShopFilters";
import ShopGrid from "@/components/shop/ShopGrid";
import ShopPagination from "@/components/shop/ShopPagination";
import ShopCTA from "@/components/shop/ShopCTA";


export default function ShopPage() {
  return (
    <>
      <Navbar />
      <ShopHero />
      <ShopFilters />
      <ShopGrid />
        <ShopPagination />
        <ShopCTA />
      <Footer />
    </>
  );
}