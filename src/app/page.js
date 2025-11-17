import HeroSection from "@/components/sections/HeroSection";
import TrendyPlants from "@/components/sections/TrendyPlants";


export default function Home() {
  return (
    <main >
      <section className="bg-[url(/assets/background-photo.jpg)] bg-no-repeat bg-cover bg-top">
      <HeroSection />
      <TrendyPlants/>
      </section>
    </main>
  );
}
