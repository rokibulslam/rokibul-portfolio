import ProjectCard from "../projects/projectCard";
import { HeroSection } from "./HeroSection";
import { PricingPlans } from "./subscription";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProjectCard />
      <PricingPlans />
    </div>
  );
};
