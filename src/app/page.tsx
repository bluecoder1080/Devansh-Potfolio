import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Testimonials />
      <About />
    </main>
  );
}
