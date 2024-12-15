import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivalsSection from "@/components/NewArrivalSection";
import SideTables from "@/components/sidetables";
import TopPicksSection from "@/components/TopPickSection";

export default function Home() {
  return (
    <main className="font-poppins">
      <div>
        <Header/>
        <Hero/>
        <SideTables/>
        <TopPicksSection/>
        <NewArrivalsSection/>
        <Blog/>
        <Footer/>
      </div>
    </main>

  );
}
