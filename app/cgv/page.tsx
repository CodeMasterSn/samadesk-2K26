import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
};

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest">
            Légal
          </p>
          <h1 className="text-4xl font-bold">
            Conditions Générales de Vente
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Objet</h2>
            <p>
              Les présentes CGV régissent les ventes de produits effectuées par
              SamaDesk auprès de ses clients. Toute commande implique
              l&apos;acceptation pleine et entière des présentes conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              2. Produits et précommandes
            </h2>
            <p>
              Les produits proposés sur le site sont disponibles en précommande.
              SamaDesk s&apos;approvisionne auprès de fournisseurs basés en
              France. Le délai de livraison estimé est de 3 à 4 semaines à
              compter de la validation et du paiement de la commande.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Prix</h2>
            <p>
              Les prix sont indiqués en Francs CFA (XOF) et sont susceptibles
              d&apos;être modifiés à tout moment. Le prix applicable est celui
              en vigueur au moment de la confirmation de la commande par
              SamaDesk via WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              4. Modalités de commande
            </h2>
            <p>
              Les commandes s&apos;effectuent via WhatsApp au +221 77 677 87 47.
              La commande est confirmée après accord écrit de SamaDesk et
              réception du paiement. Un récapitulatif de commande est envoyé
              par message.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Paiement</h2>
            <p>
              SamaDesk accepte les modes de paiement suivants : virement
              bancaire, Orange Money, Wave. Le paiement intégral est requis
              avant l&apos;expédition de la commande.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Livraison</h2>
            <p>
              La livraison est assurée par notre partenaire logistique Afriety.
              Les délais sont donnés à titre indicatif. SamaDesk ne peut être
              tenu responsable des retards imputables au transporteur ou à la
              douane.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Garantie</h2>
            <p>
              Les produits bénéficient de la garantie fabricant indiquée sur
              chaque fiche produit (1 à 2 ans). En cas de défaut constaté à la
              réception, le client dispose de 48h pour signaler le problème via
              WhatsApp avec photos à l&apos;appui.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              8. Rétractation et retours
            </h2>
            <p>
              Compte tenu de la nature des produits (commande sur mesure avec
              variantes), les retours ne sont acceptés qu&apos;en cas de défaut
              avéré du produit. Contactez-nous dans les 48h suivant la
              réception.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Litiges</h2>
            <p>
              En cas de litige, une solution amiable sera recherchée en
              priorité. SamaDesk s&apos;engage à répondre à toute réclamation
              sous 72h ouvrées via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

