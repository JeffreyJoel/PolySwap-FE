import NavBar from "@/components/shared/navbar";
import Swap from "@/components/swap/Swap";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
      <Swap/>
    </main>
    </>
  );
}
