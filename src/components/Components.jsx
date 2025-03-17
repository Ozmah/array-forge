// src/components/Components.jsx
import React, { useState } from "react";
import { useTheme } from "./Theme/ThemeContext";
import ToastIntegrationExample from "./Toast/ToastIntegrationExample";

const Components = ({ viewport }) => {
    const { currentTheme } = useTheme();
    const [activeComponent, setActiveComponent] = useState("toast");

    // Lista de componentes disponibles (actualmente solo toast)
    const components = [
        {
            id: "toast",
            name: "Toast Notifications",
            description: "Sistema de notificaciones interactivo",
        },
        // Espacio para futuros componentes
        {
            id: "future1",
            name: "Futuro Componente",
            description: "Próximamente",
            disabled: true,
        },
        {
            id: "future2",
            name: "Otro Componente",
            description: "En desarrollo",
            disabled: true,
        },
    ];

    // Renderizar el componente activo
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "toast":
                return <ToastIntegrationExample viewport={viewport} />;
            default:
                return (
                    <div className="text-center py-12">
                        Selecciona un componente para visualizar
                    </div>
                );
        }
    };

    return (
        <div className="mb-20">
            {/* Encabezado de la sección */}
            <div className="text-center mb-12">
                <div className="text-sm font-medium text-primary">
                    BIBLIOTECA
                </div>
                <h2
                    className={`text-2xl md:text-3xl font-bold text-text ${
                        currentTheme === "retro90s" ? "retro-text" : ""
                    }`}
                >
                    Componentes Técnicos
                </h2>
                <p className="mt-2 max-w-2xl mx-auto text-text-secondary">
                    Una colección de componentes React reutilizables creados
                    para resolver problemas específicos y demostrar soluciones
                    técnicas avanzadas.
                </p>
            </div>

            {/* Navegación de componentes */}
            <div className="flex overflow-x-auto pb-2 mb-8 hide-scrollbar">
                <div
                    className={`flex mx-auto p-1 rounded-lg ${
                        currentTheme.endsWith("-dark")
                            ? "bg-background border border-border"
                            : "bg-gray-100"
                    }`}
                >
                    {components.map((component) => (
                        <button
                            key={component.id}
                            onClick={() =>
                                !component.disabled &&
                                setActiveComponent(component.id)
                            }
                            className={`
                px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all
                ${
                    component.disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                }
                ${
                    activeComponent === component.id
                        ? "bg-primary text-primary-contrast shadow-sm"
                        : "text-text-secondary hover:text-text hover:bg-background"
                }
                ${
                    component.id !== components[components.length - 1].id
                        ? "mr-1"
                        : ""
                }
                ${currentTheme === "retro90s" ? "retro-border" : ""}
              `}
                            disabled={component.disabled}
                        >
                            {component.name}
                            {component.disabled && (
                                <span className="ml-2 text-xs">🔜</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Descripción del componente seleccionado */}
            <div className="mb-8 p-4 rounded-lg bg-background border border-border">
                <div className="flex items-start">
                    <div
                        className={`mr-4 p-3 rounded-full ${
                            currentTheme.endsWith("-dark")
                                ? "bg-primary/20"
                                : "bg-primary/10"
                        }`}
                    >
                        {activeComponent === "toast" && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-primary"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-text">
                            {components.find((c) => c.id === activeComponent)
                                ?.name || "Componente"}
                        </h3>
                        <p className="text-text-secondary">
                            {components.find((c) => c.id === activeComponent)
                                ?.description || "Descripción del componente"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenedor del componente actual */}
            <div
                className={`bg-background border border-border rounded-lg overflow-hidden ${
                    currentTheme === "retro90s" ? "retro-border" : ""
                }`}
            >
                {renderActiveComponent()}
            </div>
        </div>
    );
};

export default Components;
