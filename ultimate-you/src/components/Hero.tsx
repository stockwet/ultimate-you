// src/components/Hero.tsx
"use client";
import { useEffect, useState } from "react";

const MENU_ITEMS = ["About", "Coach With Me"];
// Positions for scattered glow words
// in Hero.tsx above your component
const GLOW_WORDS = [
  { small: "I am", large: "Transformation", top: "15%", left: "25%" },
  { small: "I am", large: "A Creator",            top: "40%", left: "10%" },
  { small: "I am",    large: "Mighty",             top: "60%", left: "30%" },
  { small: "I am",        large: "Forgiveness",     top: "30%", left: "70%" },
  { small: "I am",        large: "Grateful",    top: "75%", left: "80%" },
  { small: "I am",        large: "Lovingkindness",    top: "85%", left: "5%" },
];


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
    <section id="hero" className="relative h-screen w-full bg-gray-900 overflow-hidden" 
    // style={{
    //   backgroundImage: "url('/images/texture-bg.jpg')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
        style={{
          background: "linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%)",
        }}>
      {/* 2. Scattered glow-words layer */}
    {GLOW_WORDS.map((item, i) => (
    <div
        key={i}
        className={`absolute flex flex-col items-center transition-all duration-500 pointer-events-none
        ${i === activeIdx
            ? "opacity-100 blur-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            : "opacity-30 blur-sm"
        }`}
        style={{ top: item.top, left: item.left }}
    >
        {item.small && (
        <span className="text-white text-xl font-semibold uppercase leading-tight">
            {item.small}
        </span>
        )}
        {item.large && (
        <span className="text-white text-4xl font-bold uppercase">
            {item.large}
        </span>
        )}
    </div>
    ))}


      {/* 3. Primary portrait overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="/images/taylor-profile-bw.png"
          alt="Taylor Stockwell"
          className="max-h-full max-w-[60%] object-contain"
        />
      </div>

      {/* 4. Semi-dark tint over everything */}
      <div className="absolute inset-0 bg-black/50 z-30" />

      {/* 5. Foreground name + menu at top */}
      <div className="relative z-40 flex flex-col items-center justify-start h-full pt-8 px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-[0.5em]">
          TAYLOR STOCKWELL
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
      {/* 5. Description at bottom */}
    <div className="absolute bottom-20 w-full px-4 text-center z-40">
    <p className="text-white text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
    I can coach you to become</p>
    <p className="text-white text-base md:text-2xl uppercase max-w-3xl mx-auto leading-relaxed font-black">
    Who you were always meant to be</p>
    </div>
    </section>
  );
}
