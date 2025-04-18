"use client";
export default function Formacao() {
  return (
    <div className="px-4 py-12 bg-neutral-900 rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Formação</h2>
      <ul className="text-center list-disc list-inside space-y-4 text-lg text-zinc-800 dark:text-white max-w-xl mx-auto">
        <li>
          Curso Técnico em Tecnologia da Informação com ênfase em Desenvolvimento Web <br /> (Concluído)
        </li>
        <li>
          Graduação em Análise e Desenvolvimento de Sistemas <br /> (Cursando)
        </li>
      </ul>
      <p className="mt-6 text-center text-base text-zinc-600 dark:text-zinc-300">
        Ambas as formações foram realizadas na Universidade Federal do Rio Grande do Norte (UFRN).
      </p>
    </div>
  );
}
