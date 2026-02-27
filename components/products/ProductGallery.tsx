"use client";

import { useState } from "react";

type Props = {
  productName: string;
  category: string;
  badge?: string;
};

const categoryIcon: Record<string, string> = {
  "standing-desks": "🖥️",
  chaises: "🪑",
  moniteurs: "🖥",
  accessoires: "🔧",
};

const viewLabels = ["Vue principale", "Vue de côté", "Vue de dos", "Détail"];

export default function ProductGallery({
  productName,
  category,
  badge,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const icon = categoryIcon[category] || "📦";

  return (
    <div className="flex flex-col gap-4">
      {/* Image principale */}
      <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-100">
        {badge && (
          <span className="absolute top-5 left-5 bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full z-10">
            {badge}
          </span>
        )}

        {/* Label vue active */}
        <span className="absolute top-4 right-4 text-xs text-gray-400 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gray-100">
          {viewLabels[activeIndex]}
        </span>

        {/* Icône centrale */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[100px] opacity-15 select-none">
            {icon}
          </span>
          <p className="text-xs text-gray-300 font-medium">
            {productName}
          </p>
        </div>

        {/* Watermark vue */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <span className="text-xs text-gray-300 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
            Photo disponible bientôt
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {viewLabels.map((label, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 border-2 transition-all duration-200 bg-linear-to-br from-gray-50 to-gray-100 ${
              activeIndex === i
                ? "border-blue-500 shadow-sm shadow-blue-100"
                : "border-gray-100 hover:border-gray-300"
            }`}
          >
            <span className="text-xl opacity-20">{icon}</span>
            <span className="text-[9px] text-gray-400 font-medium text-center px-1 leading-tight">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

