import Herosection from "@/components/hero";

export default function Home() {
  return (
    <main className="bg-customLight h-screen text-sm">
      <Herosection></Herosection>
      <section className="h-screen bg-customNeutral"></section>
      <section className="h-screen bg-customLight"></section>
      <section className="h-screen bg-customNeutral"></section>
    </main>
  );
}
