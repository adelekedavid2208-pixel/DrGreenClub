import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-[#fbf7ef]">
        <div className="text-center">
          <h1 className="text-5xl font-serif">Contact</h1>
          <p className="mt-4 text-gray-600">
            This page is currently under development.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}