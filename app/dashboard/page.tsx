import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <Image
        className="object-contain"
        src="/favicon.png"
        alt="kobar.co Logo"
        width={180}
        height={37}
        priority
      />
      <p className="text-center text-white text-4xl duration-1000">Coming Soon.</p>
    </div>
  );
}
