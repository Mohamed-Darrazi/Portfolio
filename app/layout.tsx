import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Atmosphere from "@/app/components/Atmosphere";
import SiteNav from "@/app/components/SiteNav";
import Footer from "@/app/components/Footer";

// Polices auto-hébergées (fichiers dans app/fonts/) : le build ne dépend
// plus des serveurs de Google Fonts, qui peuvent tomber en panne.
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable-latin.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter-Variable-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const siteTitle = "Mohamed Darrazi — Développeur";
const siteDescription =
  "Étudiant en BTS SIO option SLAM en alternance, spécialisé en développement d'applications. Curieux de cybersécurité, je construis des solutions simples et fiables.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohameddarrazi.dev"),
  // `template` : chaque page définit son propre titre court, et Next.js
  // y ajoute automatiquement le nom du site. Ex. « Projets — Mohamed Darrazi ».
  title: {
    default: siteTitle,
    template: "%s — Mohamed Darrazi",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "fr_FR",
    url: "https://mohameddarrazi.dev",
    siteName: "Mohamed Darrazi",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

// Coquille commune à toutes les pages : le décor animé, la barre de
// navigation et le pied de page vivent ici. En App Router, le layout n'est
// pas remonté d'une page à l'autre — le halo garde donc sa position et les
// animations de fond ne repartent pas de zéro à chaque navigation.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Atmosphere />
        <div className="page">
          <SiteNav />
          <main className="page-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
