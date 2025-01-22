import ProjectCard from "../projects/projectCard";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";

export const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectCard />
    </div>
  );
};
