import { Bricolage_Grotesque, Figtree } from "next/font/google";
import localFont from "next/font/local";

export const calson = localFont({
  src: "../pages/caslon.otf",
});

export const figtree = Figtree({
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
});

export const secondaryFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap",
  adjustFontFallback: false,
});


