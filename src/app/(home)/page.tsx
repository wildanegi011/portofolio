import HomeSection from "./_sections/home";
import ProjectSection from "./_sections/project";
import ProfileSection from "./_sections/profile";

export default function Home() {
  return (
    <div className="animate-slide-in">
      <HomeSection />
      <ProfileSection />
      <ProjectSection />
    </div>
  );
}
