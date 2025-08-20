// import { Hero } from "@/components/Hero";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Below, create your other anchored sections: */}
      <section id="about" className="py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p>…your About copy here…</p>
      </section>

      <section id="workwithme" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Work With Me</h2>
        <p>…your program details or Calendly embed…</p>
      </section>
    </>
  );
}
