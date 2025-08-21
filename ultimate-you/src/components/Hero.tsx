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
    <section id="hero" className="relative h-screen w-full bg-gray-900 overflow-hidden">
      {/* 1. Rendered background layer: a subtle gradient or texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%)",
        }}
      />

      {/* 2. Animated glow-words layer */}
      <ul
        id="word-list"
        className="absolute inset-0 z-10 flex items-center justify-center space-x-12 pointer-events-none"
      >
        {GLOW_WORDS.map((word, i) => (
          <li
            key={word}
            className={
              `text-white text-6xl font-bold uppercase transition-all duration-500 pointer-events-none ${
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

      {/* 3. Primary portrait overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="/images/taylor-profile-drawing-trans.png"
          alt="Taylor Stockwell"
          className="max-h-full max-w-[60%] object-contain"
        />
      </div>

      {/* 4. Semi-dark tint over everything */}
      <div className="absolute inset-0 bg-black/50 z-30" />
      <div className="absolute inset-0 bg-black" />

      {/* 5. Foreground name + menu at top */}
      <div className="relative z-40 flex flex-col items-center justify-start h-full pt-8 px-4">
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
