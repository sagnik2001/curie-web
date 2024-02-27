import { Figtree } from "next/font/google";
import localFont from "next/font/local";

export const calson = localFont({
  src: "../pages/caslon.otf",
});

export const figtree = Figtree({
  subsets: ["latin"],
  display: "block",
  adjustFontFallback: false,
});
