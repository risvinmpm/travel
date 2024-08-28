import BookTrip from "@/components/BookTrip";
import Destinations from "@/components/Destinations";
import { FloatingNav } from "@/components/layouts/FloatingNav";
import Hero from "@/components/layouts/Hero";
import SpecialOffer from "@/components/SpecialOffer";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <FeaturesSection />
      <Destinations />
      <SpecialOffer />
      <BookTrip />
    </main>
  );
}
