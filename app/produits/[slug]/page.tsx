import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, categories, formatPrice } from "@/data/products";
import OrderButton from "@/components/products/OrderButton";
import ProductGallery from "@/components/products/ProductGallery";

type PageParams = {
  slug: string;
};

type Props = {
  params: PageParams;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const categoryLabel = categories.find(
    (c) => c.slug === product.category,
  )?.label;
  const related = products
    .filter(
      (p) =>
        p.category === product.category && p.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <a
            href="/"
            className="hover:text-gray-700 transition-colors"
          >
            Accueil
          </a>
          <span>/</span>
          <a
            href="/catalogue"
            className="hover:text-gray-700 transition-colors"
          >
            Catalogue
          </a>
          <span>/</span>
          <span className="text-gray-700 font-medium">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Produit principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ProductGallery
            productName={product.name}
            category={product.category}
            badge={product.badge}
          />

          {/* Infos + commande */}
          <div className="flex flex-col">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              {categoryLabel}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              {product.tagline}
            </p>

            {/* Prix */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price.min)}
              </span>
              {product.price.max > product.price.min && (
                <span className="text-lg text-gray-400">
                  — {formatPrice(product.price.max)}
                </span>
              )}
            </div>

            {/* Composant client pour variantes + WhatsApp */}
            <OrderButton product={product} />

            {/* Réassurance */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🚚",
                  label: "Livraison ~3-4 sem.",
                  sub: "Via Afriety depuis France",
                },
                {
                  icon: "💬",
                  label: "Support WhatsApp",
                  sub: "Réponse rapide garantie",
                },
                {
                  icon: "✅",
                  label: "Qualité vérifiée",
                  sub: "Sélectionné avec soin",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Caractéristiques techniques */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Caractéristiques techniques
              </h2>
              <div className="space-y-3">
                {Object.entries(product.specs).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-3 border-b border-gray-200"
                    >
                      <span className="text-sm text-gray-500">
                        {key}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {value}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Points forts */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Points forts
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Produits similaires */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <a
                  key={p.id}
                  href={`/produits/${p.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <span className="text-4xl opacity-20">
                      {p.category === "standing-desks"
                        ? "🖥️"
                        : p.category === "chaises"
                        ? "🪑"
                        : p.category === "moniteurs"
                        ? "🖥"
                        : "🔧"}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 mt-2">
                      À partir de {formatPrice(p.price.min)}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

