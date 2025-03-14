import React, { createContext, useState, useEffect, useContext } from "react";

// Definición de temas disponibles
export const THEMES = {
    TECH_PROFESSIONAL: "tech-professional",
    MINIMALIST: "minimalist",
    RETRO_90S: "retro90s",
};

// Contexto para el tema
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Estado para el tema actual y el modo (claro/oscuro)
    const [currentTheme, setCurrentTheme] = useState(THEMES.TECH_PROFESSIONAL);
    const [darkMode, setDarkMode] = useState(false);

    // Recuperar preferencias guardadas al cargar
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const savedDarkMode = localStorage.getItem("darkMode");

        if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
            setCurrentTheme(savedTheme);
        }

        if (savedDarkMode !== null) {
            setDarkMode(savedDarkMode === "true");
        } else {
            // Detectar preferencia del sistema
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setDarkMode(prefersDark);
        }
    }, []);

    // Guardar preferencias cuando cambian
    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
        localStorage.setItem("darkMode", darkMode);

        // Aplicar clases al elemento body
        const body = document.body;

        // Eliminar clases de tema anteriores
        Object.values(THEMES).forEach((theme) => {
            body.classList.remove(`theme-${theme}`);
        });

        // Agregar clase del tema actual
        body.classList.add(`theme-${currentTheme}`);

        // Gestionar modo oscuro
        if (darkMode) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }, [currentTheme, darkMode]);

    // Función para cambiar de tema
    const changeTheme = (theme) => {
        if (Object.values(THEMES).includes(theme)) {
            setCurrentTheme(theme);
        }
    };

    // Función para alternar modo oscuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Valores proporcionados por el contexto
    const value = {
        currentTheme,
        darkMode,
        changeTheme,
        toggleDarkMode,
        themes: THEMES,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

// Hook personalizado para usar el tema
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export default ThemeContext;
