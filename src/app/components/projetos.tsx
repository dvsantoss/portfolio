"use client";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projetos = [
    {
        titulo: "Meu Portfólio",
        descricao: "Site pessoal feito com Next.js e Tailwind para apresentar minhas habilidades e projetos.",
        tecnologias: [
            { nome: "nextjs", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
            { nome: "tailwind", url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
            { nome: "typescript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" }
        ],
        github: "https://github.com/dvsantoss"
    },
    {
        titulo: "API de Cardápio",
        descricao: "CRUD de um cardápio com bando de dados MySQL.",
        tecnologias: [
            { nome: "nodejs", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
            { nome: "mysql", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
            { nome: "express", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
            { nome: "sequelize", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" },
        ],
        github: "https://github.com/dvsantoss/crud-cardapio"
    },
    {
        titulo: "App React",
        descricao: "App em React que exibe uma lista de usuários com informações como nome, CPF, telefone e e-mail. ",
        tecnologias: [
            { nome: "nodejs", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        ],
        github: "https://github.com/dvsantoss/react"
    },
];

export default function Projetos() {
    return (
        <section className="px-4 py-12 bg-neutral-900 dark:bg-zinc-900 text-zinc-800 dark:text-white rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-10">Projetos Recentes</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projetos.map((projeto, index) => (
                    <div key={index} className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{projeto.descricao}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                            <div className="flex gap-2">
                                {projeto.tecnologias.map((tech, i) => (
                                    <Image
                                        key={i}
                                        src={tech.url}
                                        alt={tech.nome}
                                        width={24}
                                        height={24}
                                        className="rounded"
                                    />
                                ))}
                            </div>
                            <a
                                href={projeto.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-700 dark:text-white hover:text-blue-500 transition-colors"
                            >
                                <FaGithub size={22} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
