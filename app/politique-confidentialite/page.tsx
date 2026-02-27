import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest">
            Légal
          </p>
          <h1 className="text-4xl font-bold">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              1. Données collectées
            </h2>
            <p>
              SamaDesk collecte uniquement les données nécessaires au traitement
              des commandes : nom, prénom, adresse de livraison, numéro de
              téléphone WhatsApp. Aucune donnée bancaire n&apos;est stockée par
              SamaDesk.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              2. Utilisation des données
            </h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
              traiter et suivre votre commande, vous contacter concernant votre
              précommande, améliorer nos services. Vos données ne sont jamais
              vendues ou transmises à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              3. Conservation des données
            </h2>
            <p>
              Vos données sont conservées pendant la durée nécessaire au
              traitement de votre commande et au respect de nos obligations
              légales, soit une durée maximale de 3 ans.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              4. Cookies
            </h2>
            <p>
              Ce site utilise des cookies techniques uniquement, nécessaires au
              bon fonctionnement des pages. Aucun cookie publicitaire ou de
              tracking n&apos;est utilisé.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              5. Vos droits
            </h2>
            <p>
              Conformément à la réglementation applicable, vous disposez
              d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données personnelles. Pour exercer ces droits,
              contactez-nous via WhatsApp au +221 77 677 87 47.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              6. Contact
            </h2>
            <p>
              Pour toute question relative à la protection de vos données
              personnelles : WhatsApp +221 77 677 87 47.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

