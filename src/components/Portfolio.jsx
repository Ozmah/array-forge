import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
    // Acceder al contexto del tema
    const { currentTheme } = useTheme();

    // Estado para la sección activa
    const [activeSection, setActiveSection] = useState("home");

    // Estado para detectar tamaño de viewport
    const [viewport, setViewport] = useState("desktop");

    // Detectar tamaño de pantalla para viewport
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setViewport("mobile");
            } else if (window.innerWidth < 1024) {
                setViewport("tablet");
            } else {
                setViewport("desktop");
            }
        };

        handleResize(); // Inicializar
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen theme-transition bg-background text-text">
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                viewport={viewport}
            />

            <main className="container mx-auto px-4 pt-24 pb-16">
                {activeSection === "home" && (
                    <Hero
                        viewport={viewport}
                        setActiveSection={setActiveSection}
                    />
                )}
                {activeSection === "projects" && (
                    <Projects viewport={viewport} />
                )}
                {activeSection === "skills" && <Skills viewport={viewport} />}
                {activeSection === "experience" && (
                    <Experience viewport={viewport} />
                )}
                {activeSection === "contact" && <Contact viewport={viewport} />}
            </main>

            <Footer viewport={viewport} />
        </div>
    );
};

export default Portfolio;
