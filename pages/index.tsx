import Head from "next/head";
import Header from "../components/sections/Header";
import ChiSono from "../components/sections/ChiSono";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carmine Porricelli Portfolio</title>
      </Head>
      <main className="relative w-full min-h-screen overflow-hidden">
        <Header />
        <div className="py-8 bg-white/60 relative z-20" />
        <ChiSono />
        <div className="py-8 bg-white/60 relative z-20" />
      </main>
    </>
  );
}
