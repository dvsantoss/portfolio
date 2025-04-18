"use client";

import Sidebar from "./components/sidebar";
import Trajetoria from "./components/trajetoria";
import Projetos from "./components/projetos";
import Formacao from "./components/formacao";
import Habilidades from "./components/habilidades";
import Footer from "./components/footer";
import Certificados from "./components/certificados";
import Sobre from "./components/sobre";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-950 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto relative space-y-5">
        <Sidebar />
        <main className="md:pl-72 md:space-y-10 space-y-5">
          <Sobre />
          <Trajetoria />
          <Formacao />
          <Habilidades />
          <Projetos />
          <Certificados />
          <Footer />
        </main>
      </div>
    </div>
  );
}
