import React, { useState, useEffect } from "react";
import { useTheme } from "./Theme/ThemeContext";
import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import About from "./About";
import Footer from "./Footer";
import Components from "./Components";

const Home = () => {
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
                    <React.Fragment>
                        <Hero
                            viewport={viewport}
                            setActiveSection={setActiveSection}
                        />
                        <Experience viewport={viewport} />
                    </React.Fragment>
                )}
                {activeSection === "components" && (
                    <Components viewport={viewport} />
                )}
                {activeSection === "about" && <About viewport={viewport} />}
            </main>

            <Footer viewport={viewport} />
        </div>
    );
};

export default Home;
