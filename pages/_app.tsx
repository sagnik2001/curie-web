import type { AppProps } from "next/app";
import { figtree } from "@utilities/font";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={figtree.className}>
      <Component {...pageProps} />
    </main>
  );
}
