import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { THEMES } from "./themeData";

const ThemeSwitcher = () => {
    const { currentTheme, changeTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

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
          bg-primary/10 hover:bg-primary/20
          text-primary
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
            bg-dropdown-bg border border-dropdown-border
            theme-transition
          "
                >
                    <div>
                        {Object.values(THEMES).map((theme) => (
                            <button
                                key={theme.value}
                                onClick={() => handleThemeChange(theme.value)}
                                className={`
                  w-full text-left px-4 py-2 theme-transition
                  ${
                      currentTheme === theme.value
                          ? "bg-primary text-primary-contrast"
                          : "text-text hover:bg-dropdown-hover"
                  }
                `}
                            >
                                {
                                    Object.values(THEMES).find(
                                        (themeName) =>
                                            themeName.value === theme.value
                                    ).name
                                }
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
