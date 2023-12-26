import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import LandingContent from "@/components/landing-content";

export default function Home() {
  return (
    <div className="h-screen">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
