// src/components/Hero.tsx
"use client";
import { useEffect, useState } from "react";

const MENU_ITEMS = ["About", "Work With Me"];
const GLOW_WORDS = ["Visionary", "Proactive", "Adaptable", "Masterful"];

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  // cycle the glow words every 2s
  useEffect(() => {
    const i = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % GLOW_WORDS.length);
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/images/taylor-profile-bw.jpg')",
        backgroundSize: "auto 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background glow-words */}
      <ul
        id="word-list"
        className="absolute inset-0 z-10 flex items-center justify-center space-x-12 pointer-events-none"
      >
        {GLOW_WORDS.map((word, i) => (
          <li
            key={word}
            className={
              `text-white text-6xl font-bold uppercase transition-all duration-500 ${
                i === activeIdx
                  ? "opacity-100 blur-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  : "opacity-30 blur-sm"
              }`
            }
          >
            {word}
          </li>
        ))}
      </ul>

      {/* Semi-dark overlay to deepen mood */}
      <div className="absolute inset-0 bg-black/60 z-20" />

      {/* Foreground name + menu at top */}
      <div className="relative z-30 flex flex-col items-center justify-start h-full pt-8 px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-[0.5em]">
          T A Y L O R &nbsp; S T O C K W E L L
        </h1>
        <nav className="mt-4">
          <ul className="flex space-x-8">
            {MENU_ITEMS.map((item) => {
              const anchor = `#${item.toLowerCase().replace(/\s+/g, "")}`;
              return (
                <li key={item}>
                  <a
                    href={anchor}
                    className="text-white text-base md:text-lg uppercase hover:underline"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
