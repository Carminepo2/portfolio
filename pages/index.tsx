import Head from "next/head";
import Header from "../components/sections/Header";
import ChiSono from "../components/sections/ChiSono";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carmine Porricelli Portfolio</title>
      </Head>
      <main className="overflow-hidden">
        <Header />

        <Separator />

        <ChiSono />
        <Separator />
      </main>
    </>
  );
}

function Separator() {
  return <div className="py-8 sm:py-16 bg-white/60 relative z-20" />;
}
