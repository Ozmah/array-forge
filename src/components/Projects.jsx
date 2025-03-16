import React, { useState } from "react";
import { useTheme } from "./Theme/ThemeContext";

const Projects = ({ viewport }) => {
    const { currentTheme } = useTheme();

    // Simulación de proyectos para el portafolio
    const proyectos = [
        {
            id: 1,
            title: "E-commerce Platform",
            description:
                "Plataforma completa con gestión de inventario y pagos",
            category: "web",
            technologies: ["PHP", "Laravel", "MySQL", "Stripe"],
            color: "var(--color-primary)",
        },
        {
            id: 2,
            title: "CMS Personalizado",
            description: "Sistema de gestión de contenidos modular escalable",
            category: "backend",
            technologies: ["PHP", "React", "API REST", "MongoDB"],
            color: "var(--color-accent)",
        },
        {
            id: 3,
            title: "App de Productividad",
            description: "Aplicación web progresiva con sincronización offline",
            category: "frontend",
            technologies: ["React", "IndexedDB", "PWA", "Firebase"],
            color: "var(--color-secondary)",
        },
        {
            id: 4,
            title: "Microservicios API",
            description: "Arquitectura de microservicios para plataforma SaaS",
            category: "backend",
            technologies: ["PHP", "Docker", "Kubernetes", "AWS"],
            color: "var(--color-primary)",
        },
    ];

    return (
        <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <div className="text-sm font-medium text-primary">
                        PORTAFOLIO
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text">
                        Proyectos Destacados
                    </h2>
                </div>
                <div>
                    <button
                        className={`
              text-sm font-medium px-4 py-2 rounded-lg transition-all
              bg-primary/10 text-primary
              ${currentTheme === "retro90s" ? "retro-border" : ""}
            `}
                    >
                        Ver todos los proyectos
                    </button>
                </div>
            </div>

            <div
                className={`grid ${
                    viewport === "mobile"
                        ? "grid-cols-1"
                        : viewport === "tablet"
                        ? "grid-cols-2"
                        : "grid-cols-3"
                } gap-6`}
            >
                {proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        className={`
              rounded-xl overflow-hidden transition-all hover:shadow-lg theme-transition
              bg-background border border-border
              ${currentTheme === "retro90s" ? "retro-border" : ""}
            `}
                        style={{
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <div
                            className="h-44 relative overflow-hidden"
                            style={{ backgroundColor: proyecto.color }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold
                    ${currentTheme === "retro90s" ? "retro-border" : ""}
                  `}
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.2)",
                                        color: "white",
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    {proyecto.title.split(" ")[0].charAt(0)}
                                    {proyecto.title.split(" ")[1]?.charAt(0) ||
                                        ""}
                                </div>
                            </div>
                            <div
                                className="absolute bottom-0 left-0 right-0 p-3 text-xs font-medium"
                                style={{
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                    color: "white",
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                {proyecto.category.toUpperCase()}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-text">
                                {proyecto.title}
                            </h3>
                            <p className="mb-4 text-text-secondary">
                                {proyecto.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {proyecto.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`
                      px-3 py-1 text-xs rounded-full
                      bg-primary/10 text-primary
                      ${currentTheme === "retro90s" ? "retro-border" : ""}
                    `}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button
                                className={`
                  mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  bg-primary text-primary-contrast
                  ${currentTheme === "retro90s" ? "retro-border" : ""}
                `}
                            >
                                Ver detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
