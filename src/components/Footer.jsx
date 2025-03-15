import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = ({ viewport }) => {
    const { currentTheme } = useTheme();

    return (
        <footer
            className={`
        bg-background border-t border-border theme-transition
        ${currentTheme === "retro90s" ? "retro-border" : ""}
      `}
            style={{
                backgroundColor: currentTheme.endsWith("-dark")
                    ? "rgba(26, 35, 58, 0.7)"
                    : "rgba(247, 249, 252, 0.7)",
            }}
        >
            <div className="container mx-auto px-4 py-12">
                <div
                    className={`grid ${
                        viewport === "mobile"
                            ? "grid-cols-1 gap-10"
                            : "grid-cols-4 gap-8"
                    }`}
                >
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className={`
                  flex items-center justify-center h-10 w-10 rounded-lg
                  bg-primary text-white font-bold text-lg
                  ${currentTheme === "retro90s" ? "retro-border" : ""}
                `}
                                style={{
                                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                                }}
                            >
                                GA
                            </div>
                            <span
                                className={`
                font-bold text-xl text-primary
                ${currentTheme === "retro90s" ? "retro-text" : ""}
              `}
                            >
                                Portafolio
                            </span>
                        </div>

                        <p className="mb-6 text-text-secondary">
                            Un portafolio profesional para mostrar proyectos y
                            habilidades de desarrollo de software.
                        </p>

                        <div
                            className={`
                inline-block px-4 py-2 rounded-lg text-sm font-medium
                bg-primary/10 text-primary
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            Disponible para proyectos
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-4 text-text">
                            Enlaces
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "Inicio",
                                "Proyectos",
                                "Habilidades",
                                "Experiencia",
                                "Contacto",
                                "Servicios",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="block py-1.5 hover:translate-x-1 transition-transform text-text-secondary"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-4 text-text">
                            Servicios
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "Desarrollo Web",
                                "Desarrollo Backend",
                                "APIs",
                                "E-commerce",
                                "CMS Personalizados",
                                "Consultoría",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="block py-1.5 hover:translate-x-1 transition-transform text-text-secondary"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-4 text-text">
                            Newsletter
                        </h4>
                        <p className="mb-4 text-text-secondary">
                            Suscríbete para recibir actualizaciones sobre
                            proyectos y artículos.
                        </p>

                        <div className="flex mb-4">
                            <input
                                type="email"
                                className={`
                  px-4 py-2 rounded-l-lg flex-1 theme-transition
                  bg-background border border-border border-r-0 text-text
                  ${currentTheme === "retro90s" ? "retro-border" : ""}
                `}
                                placeholder="tu@email.com"
                            />
                            <button
                                className={`
                  px-4 py-2 rounded-r-lg bg-primary text-primary-contrast
                  ${currentTheme === "retro90s" ? "retro-border" : ""}
                `}
                            >
                                →
                            </button>
                        </div>

                        <div className="flex gap-3 mt-6">
                            {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map(
                                (platform) => (
                                    <a
                                        key={platform}
                                        href="#"
                                        className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs
                    bg-primary/10 text-primary
                    ${currentTheme === "retro90s" ? "retro-border" : ""}
                  `}
                                    >
                                        {platform.charAt(0)}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className="mt-12 pt-6 text-center text-sm text-text-secondary"
                    style={{
                        borderTop: `1px solid var(--color-border)`,
                    }}
                >
                    © {new Date().getFullYear()} Gabriel Alegría. Todos los
                    derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
