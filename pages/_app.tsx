import type { AppProps } from "next/app";
import { figtree } from "@utilities/font";
import "@styles/globals.css";
import Seo from "@atoms/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <main className={figtree.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
