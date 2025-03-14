import React from "react";
import { useTheme } from "../context/ThemeContext";

const Hero = ({ viewport, setActiveSection }) => {
    const { currentTheme } = useTheme();

    console.log(currentTheme.endsWith("-dark"));
    console.log(currentTheme);

    return (
        <section className="py-12 mb-16">
            <div
                className={`flex ${
                    viewport === "mobile" ? "flex-col" : "flex-row"
                } items-center gap-12`}
            >
                <div
                    className={
                        viewport === "mobile" ? "text-center mt-8" : "w-1/2"
                    }
                >
                    <div
                        className={`
  inline-block px-4 py-1 rounded-full text-sm font-medium mb-4
  ${
      currentTheme.endsWith("-dark")
          ? "bg-primary/50 text-white"
          : "bg-primary/20 text-theme-primary"
  }
  ${currentTheme === "retro90s" ? "retro-border" : ""}
`}
                    >
                        Desarrollador Full Stack
                    </div>

                    <h1
                        className={`
            text-4xl md:text-5xl font-bold mb-4 leading-tight
            ${currentTheme === "retro90s" ? "retro-text" : ""}
          `}
                    >
                        Soy Gabriel Alegría,{" "}
                        <span className="text-theme-primary">
                            desarrollador web profesional
                        </span>
                    </h1>

                    <p className="text-lg mb-8 text-theme-muted">
                        Transformando ideas en soluciones digitales innovadoras.
                        Con experiencia en tecnologías web modernas, enfocado en
                        crear experiencias de usuario excepcionales.
                    </p>

                    <div
                        className={`flex gap-4 ${
                            viewport === "mobile" ? "justify-center" : ""
                        }`}
                    >
                        <button
                            onClick={() => setActiveSection("projects")}
                            className={`
                px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg
                bg-theme-primary text-white 
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            Ver proyectos
                        </button>
                        <button
                            className={`
                px-6 py-3 rounded-lg font-medium border-2 transition-all hover:shadow-lg
                border-theme-primary text-theme-primary bg-transparent
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            Descargar CV
                        </button>
                    </div>

                    <div
                        className={`flex mt-8 ${
                            viewport === "mobile" ? "justify-center" : ""
                        }`}
                    >
                        <div className="flex -space-x-2">
                            {["#027AFF", "#7B61FF", "#4CE1B6"].map(
                                (color, i) => (
                                    <div
                                        key={i}
                                        className={`
                    w-10 h-10 rounded-full border-2 flex items-center justify-center
                    text-white font-bold
                    ${currentTheme === "retro90s" ? "retro-border" : ""}
                  `}
                                        style={{
                                            backgroundColor: color,
                                            borderColor:
                                                "var(--color-background)",
                                        }}
                                    >
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                )
                            )}
                        </div>
                        <div className="ml-4 flex items-center text-sm text-theme-muted">
                            <span className="font-medium mr-1 text-theme-primary">
                                18+
                            </span>{" "}
                            años de experiencia
                        </div>
                    </div>
                </div>

                <div className={viewport === "mobile" ? "w-full" : "w-1/2"}>
                    <div
                        className={`
              relative
              ${currentTheme === "retro90s" ? "retro-border" : ""}
            `}
                        style={{
                            filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15))",
                        }}
                    >
                        {/* Fondo con gradiente de la paleta */}
                        <div
                            className="absolute inset-0 rounded-3xl transform translate-x-4 translate-y-4 -z-10 opacity-40"
                            style={{
                                background: `linear-gradient(135deg, var(--color-accent), var(--color-secondary))`,
                            }}
                        ></div>

                        <div
                            className={`
                relative rounded-3xl overflow-hidden
                bg-theme-card border border-theme
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            <div className="px-6 py-4 border-b border-theme">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="space-y-3 font-mono text-sm mb-4">
                                    <div>
                                        <span className="text-theme-accent">
                                            const
                                        </span>{" "}
                                        <span className="text-theme-secondary">
                                            developer
                                        </span>{" "}
                                        = {`{`}
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-theme-secondary">
                                            name
                                        </span>
                                        :{" "}
                                        <span className="text-orange-400">
                                            'Gabriel'
                                        </span>
                                        ,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-theme-secondary">
                                            skills
                                        </span>
                                        : [
                                        <span className="text-orange-400">
                                            'PHP'
                                        </span>
                                        ,{" "}
                                        <span className="text-orange-400">
                                            'React'
                                        </span>
                                        ,{" "}
                                        <span className="text-orange-400">
                                            'Vite'
                                        </span>
                                        ,{" "}
                                        <span className="text-orange-400">
                                            'JS'
                                        </span>
                                        ],
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-theme-secondary">
                                            experience
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            18
                                        </span>
                                        ,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-theme-secondary">
                                            available
                                        </span>
                                        :{" "}
                                        <span className="text-blue-400">
                                            true
                                        </span>
                                    </div>
                                    <div>{`}`};</div>
                                </div>

                                <div
                                    className="w-full h-2 rounded-full overflow-hidden mb-2"
                                    style={{
                                        backgroundColor:
                                            "rgba(143, 155, 179, 0.15)",
                                    }}
                                >
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: "75%",
                                            background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
                                        }}
                                    ></div>
                                </div>
                                <div className="text-xs text-theme-muted">
                                    Actualmente aprendiendo{" "}
                                    <span className="font-medium text-theme-accent">
                                        Docker
                                    </span>{" "}
                                    y{" "}
                                    <span className="font-medium text-theme-accent">
                                        React
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
