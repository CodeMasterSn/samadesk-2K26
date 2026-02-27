import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-widest">
            Légal
          </p>
          <h1 className="text-4xl font-bold">Mentions légales</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Éditeur du site
            </h2>
            <p>
              <strong>Dénomination :</strong> SamaDesk
            </p>
            <p>
              <strong>Activité :</strong> Vente de mobilier ergonomique et
              accessoires de bureau
            </p>
            <p>
              <strong>Adresse :</strong> Rufisque Ouest, Almadie 2, Dakar,
              Sénégal
            </p>
            <p>
              <strong>Téléphone / WhatsApp :</strong> +221 77 677 87 47
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              structure) est la propriété exclusive de SamaDesk. Toute
              reproduction, même partielle, est interdite sans autorisation
              préalable écrite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Responsabilité
            </h2>
            <p>
              SamaDesk s&apos;efforce d&apos;assurer l&apos;exactitude des
              informations publiées sur ce site, mais ne peut garantir leur
              exhaustivité. SamaDesk se réserve le droit de modifier le contenu
              à tout moment sans préavis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, contactez-nous
              via WhatsApp au +221 77 677 87 47.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

