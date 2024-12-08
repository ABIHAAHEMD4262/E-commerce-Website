import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivalsSection from "@/components/NewArrivalSection";
import TopPicksSection from "@/components/TopPickSection";

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Hero/>
        <TopPicksSection/>
        <NewArrivalsSection/>
        <Blog/>
        <Footer/>
      </div>
    </main>

  );
}
