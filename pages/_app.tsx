import type { AppProps } from "next/app";
import { figtree, secondaryFont } from "@utilities/font";
import "@styles/globals.css";
import Seo from "@atoms/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <main className={secondaryFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
