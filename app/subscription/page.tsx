import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SubscriptionHero from "@/components/subscription/SubscriptionHero";
import MembershipPlans from "@/components/subscription/MembershipPlans";
import MembershipBenefits from "@/components/subscription/MembershipBenefits";
import Testimonials from "@/components/subscription/Testimonials";
import SubscriptionFAQ from "@/components/subscription/SubscriptionFAQ";
import SubscriptionCTA from "@/components/subscription/SubscriptionCTA";

export default function SubscriptionPage() {
  return (
    <>
      <Navbar />
      <SubscriptionHero />
      <MembershipPlans />
        <MembershipBenefits />
        <Testimonials />
        <SubscriptionFAQ />
        <SubscriptionCTA />
      <Footer />
    </>
  );
}