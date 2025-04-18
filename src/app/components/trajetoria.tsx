"use client";

export default function Trajetoria() {
  return (
    <div className="rounded-2xl flex flex-col items-center justify-center px-4 py-12 dark:bg-zinc-900 text-zinc-800 dark:text-white bg-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-6">Minha Trajetória</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

        {/* Etapa 1 */}
        <div className="flex flex-col text-left bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md h-full">
          <p className="text-sm text-zinc-500">2023</p>
          <p className="text-lg font-semibold">Meus primeiros passos na programação.</p>
        </div>

        {/* Etapa 2 */}
        <div className="flex flex-col text-left bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md h-full">
          <p className="text-sm text-zinc-500">2024</p>
          <p className="text-lg font-semibold">Foco em aprender os conceitos e estudar bastante a base da programação.</p>
        </div>

        {/* Etapa 3 */}
        <div className="flex flex-col text-left bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md h-full">
          <p className="text-sm text-zinc-500">2025</p>
          <p className="text-lg font-semibold">Muita prática e desenvolvimento de projetos pessoais.</p>
        </div>

      </div>
    </div>
  );
}
