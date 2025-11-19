import HeroSection from "@/components/sections/HeroSection";
import OurBestO2 from "@/components/sections/OurBestO2";
import TrendyPlants from "@/components/sections/TrendyPlants";
import TopSellingBrands from "@/components/sections/TopSellingBrands";

export default function Home() {
  return (
    <main >
      <section className="bg-[url(/assets/background-photo.jpg)] bg-no-repeat bg-cover bg-top">
      <HeroSection />
      <TrendyPlants/>
      </section>
      <TopSellingBrands/>
      <OurBestO2/>
    </main>
  );
}
