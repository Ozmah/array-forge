import React, { createContext, useState, useEffect, useContext } from "react";
import { THEMES } from "./themeData";

// Contexto para el tema
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Estado para el tema actual y el modo (claro/oscuro)
    const [currentTheme, setCurrentTheme] = useState(THEMES.RETRO_90S_D);

    // Recuperar preferencias guardadas al cargar
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (
            savedTheme &&
            Object.values(THEMES).some((theme) => theme.value === savedTheme)
        ) {
            setCurrentTheme(savedTheme);
        }
    }, []);

    // Guardar preferencias cuando cambian
    useEffect(() => {
        localStorage.setItem("theme", currentTheme);

        // Aplicar clases al elemento body
        const body = document.body;
        body.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    // Función para cambiar de tema
    const changeTheme = (newTheme) => {
        if (Object.values(THEMES).some((theme) => theme.value === newTheme)) {
            setCurrentTheme(newTheme);
        }
    };

    // Valores proporcionados por el contexto
    const value = {
        currentTheme,
        changeTheme,
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

export { ThemeContext };
