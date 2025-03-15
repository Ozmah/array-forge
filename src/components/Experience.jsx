import React from "react";
import { useTheme } from "../context/ThemeContext";

const Experience = ({ viewport }) => {
    const { currentTheme } = useTheme();

    // Experiencia profesional
    const experiences = [
        {
            role: "Lead PHP Developer",
            company: "Internet Brands",
            period: "April 2015 - Presente",
            description:
                "Liderazgo técnico en desarrollo de soluciones empresariales. Arquitectura de sistemas distribuidos y APIs. Mentorización de equipos de desarrollo.",
        },
        {
            role: "Full Stack Developer",
            company: "WebSolutions Agency",
            period: "2014 - 2018",
            description:
                "Desarrollo de aplicaciones web con PHP, Laravel y JavaScript. Implementación de sistemas de comercio electrónico y plataformas SaaS.",
        },
        {
            role: "PHP Developer",
            company: "Creative Digital Studio",
            period: "2010 - 2014",
            description:
                "Desarrollo de sitios web corporativos y sistemas CMS personalizados. Integración con APIs de terceros y pasarelas de pago.",
        },
    ];

    return (
        <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <div className="text-sm font-medium text-primary">
                        TIMELINE
                    </div>
                    <h2
                        className={`
            text-2xl md:text-3xl font-bold text-text
            ${currentTheme === "retro90s" ? "retro-text" : ""}
          `}
                    >
                        Experiencia Profesional
                    </h2>
                </div>
            </div>

            <div
                className={`
          rounded-2xl overflow-hidden relative
          bg-background border border-border
          ${currentTheme === "retro90s" ? "retro-border" : ""}
        `}
                style={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                }}
            >
                {/* Línea de tiempo */}
                {viewport !== "mobile" && (
                    <div
                        className="absolute left-1/4 top-0 bottom-0 w-px"
                        style={{
                            backgroundColor: currentTheme.endsWith("-dark")
                                ? "rgba(2, 122, 255, 0.2)"
                                : "rgba(2, 122, 255, 0.3)",
                        }}
                    ></div>
                )}

                <div className="p-8 space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                viewport === "mobile"
                                    ? "flex-col gap-4"
                                    : "flex-row"
                            }`}
                        >
                            {viewport !== "mobile" && (
                                <div className="w-1/4 pr-8 text-right relative">
                                    <div
                                        className="absolute right-0 w-4 h-4 rounded-full transform translate-x-2"
                                        style={{
                                            backgroundColor:
                                                index === 0
                                                    ? "var(--color-primary)"
                                                    : index === 1
                                                    ? "var(--color-secondary)"
                                                    : "var(--color-accent)",
                                            top: "0.375rem",
                                            right: "-0.125rem",
                                        }}
                                    ></div>

                                    <div className="font-bold text-primary">
                                        {exp.period}
                                    </div>
                                    <div className="text-sm text-text-secondary">
                                        {exp.company}
                                    </div>
                                </div>
                            )}

                            <div
                                className={
                                    viewport === "mobile" ? "" : "w-3/4 pl-12"
                                }
                            >
                                {viewport === "mobile" && (
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="w-3 h-3 rounded-full flex-shrink-0"
                                            style={{
                                                backgroundColor:
                                                    index === 0
                                                        ? "var(--color-primary)"
                                                        : index === 1
                                                        ? "var(--color-secondary)"
                                                        : "var(--color-accent)",
                                            }}
                                        ></div>
                                        <div>
                                            <div className="font-bold text-primary">
                                                {exp.period}
                                            </div>
                                            <div className="text-sm text-text-secondary">
                                                {exp.company}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div
                                    className={`
                    p-5 rounded-xl
                    ${currentTheme === "retro90s" ? "retro-border" : ""}
                  `}
                                    style={{
                                        backgroundColor: currentTheme.endsWith(
                                            "-dark"
                                        )
                                            ? "rgba(34, 43, 69, 0.7)"
                                            : "rgba(247, 249, 252, 0.7)",
                                        boxShadow:
                                            "0 4px 12px rgba(0, 0, 0, 0.03)",
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-2 text-text">
                                        {exp.role}
                                    </h3>
                                    <p className="text-text-secondary">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
