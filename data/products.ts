export type ProductVariant = {
  size?: string[];
  color?: string[];
  motor?: string[];
  material?: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "standing-desks" | "chaises" | "moniteurs" | "accessoires";
  price: { min: number; max: number };
  variants: ProductVariant;
  specs: Record<string, string>;
  features: string[];
  image: string;
  badge?: string;
  inStock: boolean;
};

export const categories = [
  { slug: "standing-desks", label: "Standing Desks", icon: "🖥️" },
  { slug: "chaises", label: "Chaises Ergonomiques", icon: "🪑" },
  { slug: "moniteurs", label: "Moniteurs", icon: "🖥" },
  { slug: "accessoires", label: "Accessoires", icon: "🔧" },
];

export const products: Product[] = [
  {
    id: "desk-pro-v1",
    slug: "samadesk-pro",
    name: "SamaDesk Pro",
    tagline: "Le bureau assis-debout pour les professionnels exigeants",
    category: "standing-desks",
    price: { min: 280000, max: 420000 },
    variants: {
      size: ["120cm", "140cm", "160cm"],
      color: ["Blanc", "Noir", "Chêne naturel"],
      motor: ["Simple moteur", "Double moteur"],
    },
    specs: {
      "Hauteur réglable": "70cm – 120cm",
      "Capacité de charge": "80kg",
      "Vitesse de réglage": "38mm/s",
      "Niveau sonore": "< 50dB",
      Garantie: "2 ans",
    },
    features: [
      "Réglage électrique silencieux",
      "4 mémoires de hauteur",
      "Structure en acier renforcé",
      "Anti-collision intégrée",
    ],
    image: "/images/products/samadesk-pro.jpg",
    badge: "Best-seller",
    inStock: true,
  },
  {
    id: "desk-essential-v1",
    slug: "samadesk-essential",
    name: "SamaDesk Essential",
    tagline: "Le standing desk accessible pour démarrer ergonomiquement",
    category: "standing-desks",
    price: { min: 180000, max: 260000 },
    variants: {
      size: ["120cm", "140cm"],
      color: ["Blanc", "Noir"],
      motor: ["Simple moteur"],
    },
    specs: {
      "Hauteur réglable": "72cm – 118cm",
      "Capacité de charge": "60kg",
      "Vitesse de réglage": "35mm/s",
      "Niveau sonore": "< 52dB",
      Garantie: "1 an",
    },
    features: [
      "Réglage électrique",
      "2 mémoires de hauteur",
      "Structure en acier",
      "Montage simple",
    ],
    image: "/images/products/samadesk-essential.jpg",
    inStock: true,
  },
  {
    id: "chaise-ergo-v1",
    slug: "sama-chair-pro",
    name: "SamaChair Pro",
    tagline: "Chaise ergonomique haute performance pour longues sessions",
    category: "chaises",
    price: { min: 150000, max: 220000 },
    variants: {
      color: ["Noir", "Gris", "Blanc"],
      material: ["Tissu mesh", "Cuir synthétique"],
    },
    specs: {
      "Hauteur d'assise": "42cm – 52cm",
      "Capacité de charge": "120kg",
      "Support lombaire": "Réglable",
      Accoudoirs: "4D",
      Garantie: "2 ans",
    },
    features: [
      "Support lombaire ajustable",
      "Dossier en mesh respirant",
      "Accoudoirs 4D",
      "Appuie-tête réglable",
    ],
    image: "/images/products/sama-chair-pro.jpg",
    badge: "Nouveau",
    inStock: true,
  },
  {
    id: "moniteur-27-v1",
    slug: "moniteur-27-4k",
    name: "Moniteur 27\" 4K Ergonomique",
    tagline: "Clarté et confort visuel pour votre workspace",
    category: "moniteurs",
    price: { min: 220000, max: 320000 },
    variants: {
      color: ["Noir", "Blanc"],
    },
    specs: {
      Résolution: "3840 x 2160 (4K)",
      Taille: "27 pouces",
      "Taux de rafraîchissement": "60Hz",
      Connectivité: "HDMI, DisplayPort, USB-C",
      Garantie: "1 an",
    },
    features: [
      "Dalle IPS sans bord",
      "Réglage hauteur & inclinaison",
      "Mode anti-lumière bleue",
      "Compatible VESA 100x100",
    ],
    image: "/images/products/moniteur-27-4k.jpg",
    inStock: true,
  },
  {
    id: "bras-moniteur-v1",
    slug: "bras-moniteur-pro",
    name: "Bras Articulé Moniteur Pro",
    tagline: "Positionnez votre écran parfaitement, libérez votre bureau",
    category: "accessoires",
    price: { min: 45000, max: 75000 },
    variants: {
      color: ["Noir", "Argent"],
    },
    specs: {
      Compatibilité: "VESA 75x75 / 100x100",
      "Charge max": "8kg",
      "Taille écran": "13\" – 32\"",
      Fixation: "Pince ou perçage",
      Garantie: "1 an",
    },
    features: [
      "Rotation 360°",
      "Inclinaison ±45°",
      "Gestion câbles intégrée",
      "Bras double articulé",
    ],
    image: "/images/products/bras-moniteur.jpg",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-SN", {
    style: "currency",
    currency: "XOF",
    minimumFractionDigits: 0,
  }).format(price);
}

export function generateWhatsAppLink(
  productName: string,
  variant: string,
  price: number
): string {
  const phone = "221776778747";
  const message = encodeURIComponent(
    `Bonjour SamaDesk 👋\n\nJe souhaite précommander :\n📦 *${productName}*\n⚙️ Variante : ${variant}\n💰 Prix : ${formatPrice(price)}\n\nPouvez-vous me confirmer la disponibilité et le délai de livraison ? Merci !`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

