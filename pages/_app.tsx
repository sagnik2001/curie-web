import type { AppProps } from "next/app";
import "@styles/globals.css";
import { figtree } from "@utilities/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={figtree.className}>
      <Component {...pageProps} />
    </main>
  );
}
