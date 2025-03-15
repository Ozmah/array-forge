import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Skills = ({ viewport }) => {
    const { currentTheme } = useTheme();
    const [activeCategory, setActiveCategory] = useState("todos");

    // Determinar color basado en el nivel de habilidad
    const getSkillColor = (level) => {
        if (level >= 90) return "var(--color-primary)";
        if (level >= 80) return "var(--color-secondary)";
        if (level >= 70) return "var(--color-accent)";
        return "var(--color-text-secondary)";
    };

    // Función para obtener la etiqueta de categoría
    const getCategoryLabel = (category) => {
        const labels = {
            backend: "Backend",
            frontend: "Frontend",
            devops: "DevOps",
            database: "Database",
            design: "Design",
        };
        return labels[category] || category;
    };

    // Habilidades técnicas con niveles de experiencia
    const habilidades = [
        { name: "PHP", level: 95, category: "backend" },
        { name: "JavaScript", level: 85, category: "frontend" },
        { name: "React", level: 80, category: "frontend" },
        { name: "Laravel", level: 90, category: "backend" },
        { name: "Docker", level: 75, category: "devops" },
        { name: "SQL/NoSQL", level: 88, category: "database" },
        { name: "API Design", level: 92, category: "backend" },
        { name: "UI/UX", level: 70, category: "design" },
    ];

    // Filtrar habilidades por categoría activa
    const filteredSkills =
        activeCategory === "todos"
            ? habilidades
            : habilidades.filter(
                  (skill) => skill.category === activeCategory.toLowerCase()
              );

    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <div className="text-sm font-medium text-primary">
                    EXPERIENCIA
                </div>
                <h2
                    className={`
          text-2xl md:text-3xl font-bold text-text
          ${currentTheme === "retro90s" ? "retro-text" : ""}
        `}
                >
                    Habilidades Técnicas
                </h2>
            </div>

            <div
                className={`
          rounded-2xl overflow-hidden
          bg-background border border-border
          ${currentTheme === "retro90s" ? "retro-border" : ""}
        `}
                style={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                }}
            >
                <div className="px-8 py-6 border-b border-border">
                    <div className="flex gap-4 overflow-x-auto pb-2 sm:justify-center">
                        {[
                            "Todos",
                            "Backend",
                            "Frontend",
                            "DevOps",
                            "Database",
                            "Design",
                        ].map((category) => (
                            <button
                                key={category}
                                onClick={() =>
                                    setActiveCategory(category.toLowerCase())
                                }
                                className={`
                  px-4 py-2 text-sm rounded-lg whitespace-nowrap
                  ${
                      category.toLowerCase() === activeCategory
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                  }
                  ${currentTheme === "retro90s" ? "retro-border" : ""}
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-8">
                    <div
                        className={`grid ${
                            viewport === "mobile"
                                ? "grid-cols-1 gap-6"
                                : "grid-cols-2 gap-10"
                        }`}
                    >
                        {filteredSkills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-text">
                                        {skill.name}
                                    </span>
                                    <span
                                        className="text-sm font-medium"
                                        style={{
                                            color: getSkillColor(skill.level),
                                        }}
                                    >
                                        {skill.level}%
                                    </span>
                                </div>

                                <div
                                    className="w-full h-2.5 rounded-full"
                                    style={{
                                        backgroundColor: currentTheme.endsWith(
                                            "-dark"
                                        )
                                            ? "rgba(143, 155, 179, 0.1)"
                                            : "rgba(143, 155, 179, 0.15)",
                                    }}
                                >
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: `${skill.level}%`,
                                            backgroundColor: getSkillColor(
                                                skill.level
                                            ),
                                        }}
                                    ></div>
                                </div>

                                <div className="text-xs text-text-secondary">
                                    <span
                                        className={`
                      inline-block px-2 py-1 rounded-md
                      ${currentTheme === "retro90s" ? "retro-border" : ""}
                    `}
                                        style={{
                                            backgroundColor:
                                                currentTheme.endsWith("-dark")
                                                    ? "rgba(143, 155, 179, 0.15)"
                                                    : "rgba(143, 155, 179, 0.1)",
                                        }}
                                    >
                                        {getCategoryLabel(skill.category)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
