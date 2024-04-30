import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <JobCard isHome={true} />
      <Footer />
    </>
  );
}
