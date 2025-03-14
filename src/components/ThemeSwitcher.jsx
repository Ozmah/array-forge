import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { THEMES } from "../context/themeData";

const ThemeSwitcher = () => {
    const { currentTheme, darkMode, changeTheme, toggleDarkMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    // Mapeo de temas a nombres legibles
    const themeNames = {
        [THEMES.TECH_PROFESSIONAL]: "tp",
        [THEMES.TECH_PROFESSIONAL_D]: "tp-dark",
        [THEMES.MINIMALIST]: "mm",
        [THEMES.MINIMALIST_D]: "mm-dark",
        [THEMES.RETRO_90S]: "r9",
        [THEMES.RETRO_90S_D]: "r9-dark",
    };

    // Funciones para manejar el menú
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // Cambiar tema y cerrar menú
    const handleThemeChange = (theme) => {
        changeTheme(theme);
        closeMenu();
    };

    return (
        <div className="relative z-50 ml-4">
            {/* Botón principal - siempre ajustado al tema actual */}
            <button
                onClick={toggleMenu}
                className={`
          p-2 rounded-full theme-transition
          flex items-center gap-2 
          bg-theme-primary bg-opacity-10 hover:bg-opacity-20
          text-theme-primary
        `}
                aria-label="Theme settings"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 20.25c4.55 0 8.25-3.7 8.25-8.25S16.55 3.75 12 3.75 3.75 7.45 3.75 12s3.7 8.25 8.25 8.25Z" />
                    <path d="m15.98 9-3.87-1.3-1.31-3.9-1.31 3.9L5.63 9l2.8 2.1-.5 3.9L12 13.12l4.07 1.88-.5-3.9 2.4-2.1Z" />
                </svg>
                <span className="hidden sm:inline font-medium">Temas</span>
            </button>

            {/* Menú desplegable */}
            {menuOpen && (
                <div
                    className="
            absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden
            bg-theme-card border border-theme
            theme-transition
          "
                >
                    <div className="p-3 border-b border-theme">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-theme-default">
                                Tema
                            </span>

                            {/* Alternador de modo oscuro */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-1.5 rounded-full bg-theme-background"
                                aria-label={
                                    darkMode
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                            >
                                {darkMode ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="5" />
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line
                                            x1="4.22"
                                            y1="4.22"
                                            x2="5.64"
                                            y2="5.64"
                                        />
                                        <line
                                            x1="18.36"
                                            y1="18.36"
                                            x2="19.78"
                                            y2="19.78"
                                        />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line
                                            x1="4.22"
                                            y1="19.78"
                                            x2="5.64"
                                            y2="18.36"
                                        />
                                        <line
                                            x1="18.36"
                                            y1="5.64"
                                            x2="19.78"
                                            y2="4.22"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="py-1">
                        {Object.values(THEMES).map((theme) => (
                            <button
                                key={theme}
                                onClick={() => handleThemeChange(theme)}
                                className={`
                  w-full text-left px-4 py-2 theme-transition
                  ${
                      currentTheme === theme
                          ? "bg-theme-primary text-white"
                          : "text-theme-default hover:bg-theme-background"
                  }
                `}
                            >
                                {themeNames[theme]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
