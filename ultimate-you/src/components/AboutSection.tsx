// src/components/AboutSection.tsx
"use client";
import React from "react";

interface CardItem {
  title: string;
  description: string;
  imageSrc?: string;
}

const CARD_ITEMS: CardItem[] = [
  {
    title: "Adobe Photoshop Elements",
    description: "Streamlined photo editing for pros and enthusiasts.",
    imageSrc: "/images/photoshop-icon.svg",
  },
  {
    title: "Masterful",
    description: "Phil Clevenger, VP Product Experience at Docusign.",
    imageSrc: "/images/phil-clevenger.jpg",
  },
  // add more items as needed
];

export function AboutSection() {
  return (
    // Full-width section with rounded top corners
    <section
      id="about"
      className="relative z-50 mt-[-3rem] bg-neutral-100 rounded-t-3xl pt-16 pb-24 overflow-hidden"
      style={{
          background: "linear-gradient(185deg, rgba(60,60,60,1) 0%, rgba(10,10,10,1) 100%)",
        }}
    //   className="relative mt-[-3rem] bg-neutral-100 rounded-t-3xl pt-16 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARD_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-32 w-full object-contain mb-4 rounded-lg"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
