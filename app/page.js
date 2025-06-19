import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import ThumbnailSection from "@/components/ThumbnailSection"

export default function Home() {
  return (
    <div className="w-9/10 mx-auto">
      <NavBar />
      <HeroSection />
      <ThumbnailSection />
      <Footer />
    </div>
  );
}