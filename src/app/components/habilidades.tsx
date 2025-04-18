"use client";
import Image from "next/image";

export default function Habilidades() {
    const skills = [
        {
            nome: "HTML",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
            nome: "CSS",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
            nome: "JavaScript",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
            nome: "TypeScript",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
            nome: "C++",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        },
        {
            nome: "Python",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
            nome: "React",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
            nome: "Next.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
        {
            nome: "Node.js",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
            nome: "Express",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
            nome: "Tailwind",
            url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
            nome: "Bootstrap",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
        },
        {
            nome: "jQuery",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg",
        },
        {
            nome: "MySQL",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        },
        {
            nome: "Sequelize",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg",
        },
        {
            nome: "Git",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
            nome: "GitHub",
            url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        },
    ];

    return (
        <div className="px-4 py-12 md:py-16 dark:bg-zinc-900 rounded-2xl bg-neutral-900">
            <h2 className="text-3xl font-bold text-center mb-10">Minhas Habilidades</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 relative">
                            <Image
                                src={skill.url}
                                alt={skill.nome}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        <span className="mt-2 text-sm md:text-base text-zinc-700 dark:text-white text-center">
                            {skill.nome}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
