"use client";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-full md:w-64 md:fixed md:top-10 md:left-[max(1rem,calc((100vw-1280px)/2))] md:h-[calc(100vh-5rem)] bg-neutral-900 p-6 rounded-t-2xl rounded-2xl text-center">
            <Image src="/perfil.JPG" alt="Minha foto" width={200} height={200} className="mx-auto rounded-xl"/>
            <h1 className="text-2xl font-bold mt-4">Davi Santos</h1>
            <p className="text-sm text-neutral-400 mt-1">Desenvolvedor Web</p>
            <div className="flex justify-center gap-4 mt-4 text-xl text-neutral-300">
                <a
                    href="https://github.com/dvsantoss"
                    target="_blank"
                    rel="Icone Github"
                    className="inline-block p-1 bg-transparent border-2 border-transparent rounded-lg hover:bg-purple-300 hover:border-purple-300 hover:text-white transition-all duration-300"
                >
                    <FaGithub size={32} />
                </a>
                <a
                    href="mailto:ivadseabra@gmail.com"
                    target="_blank"
                    rel="Icone Email"
                    className="inline-block p-1 bg-transparent border-2 border-transparent rounded-lg hover:bg-purple-300 hover:border-purple-300 hover:text-white transition-all duration-300"
                >
                    <FaEnvelope size={32} />
                </a>
                <a
                    href="https://www.linkedin.com/in/dvsantos/"
                    target="_blank"
                    rel="Icone Linkedin"
                    className="inline-block p-1 bg-transparent border-2 border-transparent rounded-lg hover:bg-purple-300 hover:border-purple-300 hover:text-white transition-all duration-300"
                >
                    <FaLinkedin size={32} />
                </a>

            </div>

            <a href="mailto:ivadseabra@gmail.com" target="_blank" rel="Enviar email">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg mt-6 w-full cursor-pointer">
                    Vamos conversar
                </button>
            </a>
            <a href="https://github.com/dvsantoss/assetsPortifolio/blob/main/CurriculoDaviSantos.pdf" target="_blank" rel="Ver curriculo">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg mt-6 w-full cursor-pointer">
                    Ver Currículo
                </button>
            </a>
        </div>
    );
}
