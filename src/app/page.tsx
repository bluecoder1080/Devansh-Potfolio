import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <About />
    </main>
  );
}
