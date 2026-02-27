import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez SamaDesk pour toute question ou précommande.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Une question sur un produit, une précommande, ou simplement envie
            d&apos;échanger ? On est là.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Infos contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Nous contacter
            </h2>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/221776778747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#16a34a"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-green-700">
                    WhatsApp
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    +221 77 677 87 47
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Réponse rapide · Lun–Sam 8h–20h
                  </p>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Localisation
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    Rufisque Ouest, Almadie 2
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Dakar, Sénégal</p>
                </div>
              </div>

              {/* Livraison */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Livraison
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    Partenaire Afriety · Depuis France
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Délai estimé : 3 à 4 semaines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ rapide */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Comment fonctionne la précommande ?",
                  a: "Vous choisissez votre produit et variante sur le site, puis vous cliquez sur 'Précommander sur WhatsApp'. On vous confirme la disponibilité et le prix final sous 24h.",
                },
                {
                  q: "Quel est le délai de livraison ?",
                  a: "Comptez 3 à 4 semaines après validation et paiement de votre précommande. Nos produits arrivent depuis la France via notre partenaire logistique Afriety.",
                },
                {
                  q: "Comment se passe le paiement ?",
                  a: "Le paiement se fait directement via WhatsApp. On accepte les virements, Orange Money et Wave.",
                },
                {
                  q: "Les produits sont-ils garantis ?",
                  a: "Oui, tous nos produits viennent avec une garantie fabricant (1 à 2 ans selon le produit). En cas de problème, on gère directement avec vous.",
                },
                {
                  q: "Livrez-vous partout au Sénégal ?",
                  a: "Nous livrons principalement sur Dakar pour l'instant. Pour les autres régions, contactez-nous sur WhatsApp pour trouver une solution.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.q}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp final */}
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Prêt à passer commande ?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Notre équipe vous répond rapidement sur WhatsApp.
          </p>
          <a
            href="https://wa.me/221776778747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Nous écrire sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

