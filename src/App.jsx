import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Portfolio from "./components/Portfolio";

function App() {
    const [loading, setLoading] = useState(true);

    // Simular tiempo de carga
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <ThemeProvider>
            {loading ? (
                <div className="flex items-center justify-center min-h-screen bg-theme-background theme-transition">
                    <div className="flex flex-col items-center">
                        <svg
                            className="animate-spin h-12 w-12 text-theme-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <p className="mt-4 text-lg text-theme-default">
                            Cargando portafolio...
                        </p>
                    </div>
                </div>
            ) : (
                <Portfolio />
            )}
        </ThemeProvider>
    );
}

export default App;
