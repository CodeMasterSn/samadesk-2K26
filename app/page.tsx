import Link from "next/link";
import { products, categories, formatPrice } from "@/data/products";
import HeroSlider from "@/components/ui/HeroSlider";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="min-h-[90vh] text-white flex items-center relative overflow-hidden">
        {/* Image de fond (slider) */}
        <div className="absolute inset-0 z-0">
          <HeroSlider />
        </div>

        {/* Contenu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Précommandes ouvertes — Livraison via Afriety
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Travaillez mieux.{" "}
              <span className="text-blue-400">Vivez mieux.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
              Bureaux assis-debout, chaises ergonomiques et accessoires premium
              pour transformer votre espace de travail au Sénégal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalogue"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
              >
                Voir le catalogue
              </Link>
              <a
                href="https://wa.me/221776778747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Nous contacter
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400 mt-0.5">
                  Clients satisfaits
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-gray-400 mt-0.5">
                  Gammes de produits
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">~3-4 sem</div>
                <div className="text-sm text-gray-400 mt-0.5">
                  Délai de livraison
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nos gammes</h2>
            <p className="text-gray-500 mt-3 text-base">
              Tout ce qu&apos;il vous faut pour un workspace parfait
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalogue?categorie=${cat.slug}`}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 text-center">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS FEATURED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Produits phares
              </h2>
              <p className="text-gray-500 mt-2">
                Les plus demandés par nos clients
              </p>
            </div>
            <Link
              href="/catalogue"
              className="hidden sm:flex items-center gap-1 text-blue-600 text-sm font-semibold hover:underline"
            >
              Tout voir →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-4/3 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <span className="text-5xl opacity-30">
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
                <div className="p-5">
                  <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
                    {
                      categories.find((c) => c.slug === product.category)
                        ?.label
                    }
                  </p>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.tagline}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-semibold text-gray-900">
                      À partir de {formatPrice(product.price.min)}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      Précommande
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/catalogue"
              className="text-blue-600 font-semibold text-sm"
            >
              Voir tout le catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI SAMADESK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Pourquoi SamaDesk ?
            </h2>
            <p className="text-gray-500 mt-3">
              Des produits pensés pour le marché sénégalais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Livraison via Afriety",
                desc: "Partenariat avec Afriety pour une livraison fiable depuis la France en 3 à 4 semaines.",
              },
              {
                icon: "✅",
                title: "Qualité certifiée",
                desc: "Tous nos produits sont sélectionnés pour leur durabilité, ergonomie et rapport qualité-prix.",
              },
              {
                icon: "💬",
                title: "Support WhatsApp",
                desc: "Commandez et suivez votre précommande directement sur WhatsApp. Simple et rapide.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prêt à transformer votre workspace ?
          </h2>
          <p className="text-gray-400 text-base mb-8">
            Lancez votre précommande dès aujourd&apos;hui. Notre équipe vous
            accompagne sur WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/catalogue"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Voir le catalogue
            </Link>
            <a
              href="https://wa.me/221776778747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Précommander sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
