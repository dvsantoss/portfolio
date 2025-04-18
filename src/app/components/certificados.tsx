"use client";
export default function Certificados() {
    return (
        <section className="px-4 py-12 bg-neutral-900 dark:bg-zinc-900 text-zinc-800 dark:text-white rounded-2xl justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Certificados Recentes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify">
                <div
                    className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Programação Avançada</h3>
                    <p className="text-sm text-zinc-500 mb-4">Curso de Formação Avançada em Programação para Internet pelo IMD/UFRN</p>
                    <a
                        href="https://github.com/dvsantoss/assetsPortifolio/blob/main/certificado_imd_avancado.pdf"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        Ver Certificado
                    </a>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Boas Vindas</h3>
                    <p className="text-sm text-zinc-500 mb-4">Boas vindas do Curso Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                    <a
                        href="https://github.com/dvsantoss/assetsPortifolio/blob/main/boas_vindas_UFRN.pdf"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        Ver Certificado
                    </a>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Curso Udemy</h3>
                    <p className="text-sm text-zinc-500 mb-4">Relatório de Ações com Python e ChatGPT, podendo gerar planilhas,tendências e análises.

                    </p>
                    <a
                        href="#"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        Ver Certificado
                    </a>
                </div>
            </div>
        </section>
    );
}
