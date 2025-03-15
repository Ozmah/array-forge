import React from "react";
import { useTheme } from "../context/ThemeContext";

const Hero = ({ viewport, setActiveSection }) => {
    const { currentTheme } = useTheme();

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
                      : "bg-primary/20 text-primary"
              }
              ${currentTheme === "retro90s" ? "retro-border" : ""}
            `}
                    >
                        Senior Full Stack Developer
                    </div>

                    <h1
                        className={`
            text-4xl md:text-5xl font-bold mb-4 leading-tight
            ${currentTheme === "retro90s" ? "retro-text" : ""}
          `}
                    >
                        Building{" "}
                        <span className="text-primary">digital solutions</span>{" "}
                        that deliver results
                    </h1>

                    <p className="text-lg mb-6 text-text-secondary">
                        With +15 years of web development experience, I create
                        custom technical components that solve complex problems.
                        PHP specialist with strong Frontend and Backend skills.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                            PHP
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary">
                            React
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent">
                            WordPress
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                            Laravel
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary">
                            AI Integration
                        </span>
                    </div>

                    <div
                        className={`flex gap-4 ${
                            viewport === "mobile" ? "justify-center" : ""
                        }`}
                    >
                        <button
                            className={`
                px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg
                bg-primary text-primary-contrast 
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            Download CV
                        </button>
                        <button
                            onClick={() => setActiveSection("projects")}
                            className={`
                px-6 py-3 rounded-lg font-medium border-2 transition-all hover:shadow-lg
                border-primary text-primary bg-transparent
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            View Technical Components
                        </button>
                    </div>

                    <div className="mt-8 p-3 rounded-lg bg-background border border-border">
                        <div className="flex items-center">
                            <div className="mr-3 text-primary text-xl">⚡</div>
                            <p className="text-sm text-text-secondary">
                                <span className="font-medium text-text">
                                    Looking for a technically versatile
                                    developer?
                                </span>{" "}
                                Check out my components section to see my work
                                with APIs, AI integrations and custom solutions.
                            </p>
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
                bg-background border border-border
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                        >
                            <div className="px-6 py-4 border-b border-border">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="font-mono text-base mb-4">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2 font-bold">
                                            F
                                        </div>
                                        <div className="font-medium">
                                            Frontend Development
                                        </div>
                                    </div>
                                    <div className="pl-10 mb-4">
                                        <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                                            <div
                                                className="h-full rounded-full bg-primary"
                                                style={{ width: "85%" }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-text-secondary">
                                            React, JavaScript, CSS, UI/UX
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center mr-2 font-bold">
                                            B
                                        </div>
                                        <div className="font-medium">
                                            Backend Development
                                        </div>
                                    </div>
                                    <div className="pl-10 mb-4">
                                        <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                                            <div
                                                className="h-full rounded-full bg-secondary"
                                                style={{ width: "95%" }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-text-secondary">
                                            PHP, Laravel, MySQL, API Design
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mr-2 font-bold">
                                            W
                                        </div>
                                        <div className="font-medium">
                                            WordPress & CMS
                                        </div>
                                    </div>
                                    <div className="pl-10 mb-4">
                                        <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                                            <div
                                                className="h-full rounded-full bg-accent"
                                                style={{ width: "90%" }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-text-secondary">
                                            Theme Development, Plugins,
                                            Customization
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2 font-bold">
                                            A
                                        </div>
                                        <div className="font-medium">
                                            AI Integration
                                        </div>
                                    </div>
                                    <div className="pl-10">
                                        <div className="h-2 w-full bg-gray-200 rounded-full mb-2">
                                            <div
                                                className="h-full rounded-full bg-primary"
                                                style={{ width: "75%" }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-text-secondary">
                                            OpenAI, Claude, LLM APIs, Prompt
                                            Engineering
                                        </div>
                                    </div>
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
