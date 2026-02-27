"use client";

import { useState } from "react";
import Link from "next/link";
import { products, categories, formatPrice } from "@/data/products";
import type { Product } from "@/data/products";

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header page */}
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest">
            Catalogue
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tous nos produits</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Sélectionnez votre équipement ergonomique et précommandez directement
            via WhatsApp.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tous les produits
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`shrink-0 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.slug
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille produits */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compteur */}
          <p className="text-sm text-gray-400 mb-8">
            {filtered.length} produit{filtered.length > 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <span>
                {" "}
                dans{" "}
                <span className="text-gray-700 font-medium">
                  {categories.find((c) => c.slug === activeCategory)?.label}
                </span>
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg">Aucun produit dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bandeau précommande */}
      <section className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Vous ne trouvez pas ce que vous cherchez ?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Contactez-nous sur WhatsApp, on vous aide à trouver le setup parfait.
          </p>
          <a
            href="https://wa.me/221776778747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produits/${product.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-3 right-3 bg-red-100 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full z-10">
            Rupture
          </span>
        )}
        <span className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">
          {product.category === "standing-desks"
            ? "🖥️"
            : product.category === "chaises"
            ? "🪑"
            : product.category === "moniteurs"
            ? "🖥"
            : "🔧"}
        </span>
      </div>

      {/* Infos */}
      <div className="p-4">
        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
          {categories.find((c) => c.slug === product.category)?.label}
        </p>
        <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <span className="text-sm font-bold text-gray-900">
              {formatPrice(product.price.min)}
            </span>
            {product.price.max > product.price.min && (
              <span className="text-xs text-gray-400 ml-1">
                – {formatPrice(product.price.max)}
              </span>
            )}
          </div>
          <span className="text-xs bg-blue-50 text-blue-600 font-medium px-2 py-1 rounded-full">
            Précommande
          </span>
        </div>
      </div>
    </Link>
  );
}

