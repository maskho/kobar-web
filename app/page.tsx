import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Hitung Daya", href: "/dashboard" },
	{ name: "Kontak Kami", href: "/contact" },
];

export default function Home() {
	return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg md:text-2xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <h1 className="z-10 py-10 text-5xl text-transparent duration-1000 bg-red-800 hover:bg-red-600 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Kobar Energies
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg md:text-2xl text-zinc-500 ">
          Listrik murah di atap rumah.
          <br />
          Kenali lebih lanjut tentang{" "}
          <Link
            target="_blank"
            href="https://youtu.be/f-4y05MYpu4"
            className="underline duration-500 hover:text-zinc-300"
          >
            PLTS Atap
          </Link>.
        </h2>
      </div>
    </div>
  );
}
