import React from "react";
import ToastProvider from "./ToastProvider";
import ToastDemo from "./ToastDemo";
import "./toast.css"; // Importar los estilos

/**
 * Componente de ejemplo que muestra cómo integrar el sistema de Toast
 * en tu aplicación de portfolio.
 */
const ToastIntegrationExample = ({ viewport }) => {
    return (
        <section className="mb-20">
            <div className="container mx-auto px-4">
                {/* Título de la sección */}
                <div className="text-center mb-8">
                    <div className="text-sm font-medium text-primary">
                        COMPONENTE
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text">
                        Sistema de Notificaciones Toast
                    </h2>
                    <p className="mt-2 text-text-secondary">
                        Un sistema flexible y accesible para mostrar
                        notificaciones temporales a los usuarios
                    </p>
                </div>

                {/* Características del componente */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="text-primary text-xl mb-2">
                            ✓ Flexible
                        </div>
                        <p className="text-text-secondary">
                            Múltiples tipos, posiciones y duraciones.
                            Completamente adaptable a cualquier diseño.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="text-primary text-xl mb-2">
                            ✓ Accesible
                        </div>
                        <p className="text-text-secondary">
                            Cumple con los estándares WCAG. Soporte para
                            lectores de pantalla y navegación por teclado.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="text-primary text-xl mb-2">
                            ✓ Interactivo
                        </div>
                        <p className="text-text-secondary">
                            Botones de acción personalizables, agrupamiento
                            inteligente y gestión automática.
                        </p>
                    </div>
                </div>

                {/* Demostración del componente */}
                <ToastProvider>
                    <ToastDemo viewport={viewport} />
                </ToastProvider>

                {/* Ventajas y características adicionales */}
                <div className="mt-16">
                    <h3 className="text-xl font-bold mb-4 text-text">
                        Ventajas del sistema de notificaciones
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <li className="flex items-start">
                            <div className="text-primary mr-2">✓</div>
                            <div>
                                <span className="font-medium">
                                    Sin dependencias externas
                                </span>{" "}
                                - Implementado completamente en React, sin
                                librerías adicionales.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-primary mr-2">✓</div>
                            <div>
                                <span className="font-medium">
                                    Rendimiento optimizado
                                </span>{" "}
                                - Solo renderiza lo necesario, con animaciones
                                eficientes.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-primary mr-2">✓</div>
                            <div>
                                <span className="font-medium">
                                    Totalmente tipado
                                </span>{" "}
                                - Incluye definiciones de TypeScript para un
                                desarrollo más seguro.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-primary mr-2">✓</div>
                            <div>
                                <span className="font-medium">
                                    Personalizable
                                </span>{" "}
                                - Fácil de adaptar a cualquier sistema de diseño
                                o identidad visual.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-primary mr-2">✓</div>
                            <div>
                                <span className="font-medium">
                                    Experiencia móvil
                                </span>{" "}
                                - Optimizado para dispositivos táctiles con
                                gestos nativos.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="text-primary mr-2">✓</div>
                            <div>
                                <span className="font-medium">
                                    API intuitiva
                                </span>{" "}
                                - Fácil de implementar y usar en cualquier
                                componente de tu aplicación.
                            </div>
                        </li>
                    </ul>

                    <p className="text-center text-text-secondary mt-8">
                        <a
                            href="#"
                            className="text-primary font-medium hover:underline"
                        >
                            Ver documentación completa →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ToastIntegrationExample;
