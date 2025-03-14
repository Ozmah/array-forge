import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ activeSection, setActiveSection, viewport }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentTheme, darkMode } = useTheme();

    // Navegación
    const navItems = ["Home", "Projects", "Skills", "Experience", "Contact"];

    return (
        <nav
            className={`
        fixed w-full z-40 transition-all duration-300 theme-transition
        border-b border-theme
        ${currentTheme === "retro90s" ? "retro-border" : ""}
      `}
            style={{
                backgroundColor: "var(--nav-background)",
                backdropFilter: "blur(10px)",
            }}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div
                        className={`
              flex items-center justify-center h-10 w-10 rounded-lg
              ${currentTheme === "retro90s" ? "retro-border" : ""}
              bg-theme-primary text-white font-bold text-lg
            `}
                    >
                        GA
                    </div>
                    <span
                        className={`
            font-bold text-xl text-theme-primary
            ${currentTheme === "retro90s" ? "retro-text" : ""}
          `}
                    >
                        Portafolio
                    </span>
                </div>

                {/* Desktop & Tablet Nav */}
                {viewport !== "mobile" && (
                    <div className="flex items-center gap-6">
                        <div className="flex gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    className={`
                    px-4 py-2 rounded-md transition-all duration-300
                    ${activeSection === item.toLowerCase() ? "font-medium" : ""}
                    ${
                        activeSection === item.toLowerCase()
                            ? "bg-theme-primary bg-opacity-10 text-theme-primary"
                            : "text-theme-default hover:bg-theme-background"
                    }
                  `}
                                    onClick={() =>
                                        setActiveSection(item.toLowerCase())
                                    }
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <ThemeSwitcher />
                    </div>
                )}

                {/* Mobile Nav Toggle */}
                {viewport === "mobile" && (
                    <div className="flex items-center gap-2">
                        <ThemeSwitcher />

                        <button
                            className="p-2 rounded-lg text-theme-primary"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`block h-0.5 rounded transition-all duration-300 transform bg-theme-primary
                    ${menuOpen ? "rotate-45 translate-y-2" : ""}
                  `}
                                ></span>
                                <span
                                    className={`block h-0.5 rounded transition-all duration-300 bg-theme-primary
                    ${menuOpen ? "opacity-0" : "opacity-100"}
                  `}
                                ></span>
                                <span
                                    className={`block h-0.5 rounded transition-all duration-300 transform bg-theme-primary
                    ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
                  `}
                                ></span>
                            </div>
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {viewport === "mobile" && menuOpen && (
                <div
                    className="absolute w-full py-3 shadow-lg transition-all duration-300 theme-transition"
                    style={{
                        backgroundColor: "var(--nav-background)",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <div className="container mx-auto px-4 flex flex-col gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                className={`
                  px-4 py-3 rounded-md text-left transition-all duration-300
                  ${activeSection === item.toLowerCase() ? "font-medium" : ""}
                  ${
                      activeSection === item.toLowerCase()
                          ? "bg-theme-primary bg-opacity-10 text-theme-primary"
                          : "text-theme-default"
                  }
                `}
                                onClick={() => {
                                    setActiveSection(item.toLowerCase());
                                    setMenuOpen(false);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
