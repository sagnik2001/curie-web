import Head from "next/head";

export default function Seo() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Curie Money</title>
      <meta
        name="description"
        content={`Curie Money brings India's first high yield savings bank account. 
        With Curie, stay invested in Mutual Funds and spend anytime via UPI/ Debit Card.`}
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/fav-icon.png" type="image/png" />
      <link rel="canonical" href="https://curie.money/"></link>
    </Head>
  );
}
