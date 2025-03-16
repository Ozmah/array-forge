import React, { useEffect, useRef, useState } from "react";

/**
 * Componente Toast individual
 * Renderiza una notificación con animaciones y estilos basados en su tipo
 */
const Toast = ({ toast, onClose }) => {
    const { id, message, type, closable, action } = toast;
    const [isExiting, setIsExiting] = useState(false);
    const toastRef = useRef(null);

    // Gestionar cierre de la notificación
    const handleClose = () => {
        setIsExiting(true);
        // Esperar a que termine la animación antes de eliminar
        setTimeout(() => {
            onClose(id);
        }, 300); // Debe coincidir con la duración de la animación CSS
    };

    // Soporte para cerrar con ESC o deslizando
    useEffect(() => {
        const toastElement = toastRef.current;

        // Detector de tecla ESC
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && closable) {
                handleClose();
            }
        };

        // Soporte para deslizar en dispositivos táctiles
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (Math.abs(touchEndX - touchStartX) > 80) {
                // Si el deslizamiento es suficiente, cerrar
                handleClose();
            }
        };

        // Añadir event listeners
        document.addEventListener("keydown", handleKeyDown);
        toastElement?.addEventListener("touchstart", handleTouchStart);
        toastElement?.addEventListener("touchend", handleTouchEnd);

        return () => {
            // Limpiar
            document.removeEventListener("keydown", handleKeyDown);
            toastElement?.removeEventListener("touchstart", handleTouchStart);
            toastElement?.removeEventListener("touchend", handleTouchEnd);
        };
    }, [id, closable, onClose]);

    // Obtener el icono correspondiente al tipo
    const getIconForType = () => {
        switch (type) {
            case "success":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                );
            case "error":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                );
            case "warning":
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                );
            case "info":
            default:
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                );
        }
    };

    return (
        <div
            ref={toastRef}
            className={`toast toast-${type} ${
                isExiting ? "toast-exit" : "toast-enter"
            }`}
            role="alert"
            aria-live="assertive"
        >
            <div className="toast-icon">{getIconForType()}</div>

            <div className="toast-content">
                <div className="toast-message">{message}</div>
            </div>

            {action && (
                <button
                    className="toast-action"
                    onClick={action.onClick}
                    aria-label={action.label}
                >
                    {action.label}
                </button>
            )}

            {closable && (
                <button
                    className="toast-close"
                    onClick={handleClose}
                    aria-label="Cerrar notificación"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            )}

            {/* Barra de progreso que muestra el tiempo restante (solo si hay duración) */}
            {toast.duration > 0 && (
                <div
                    className="toast-progress"
                    style={{
                        animationDuration: `${toast.duration}ms`,
                        backgroundColor: `var(--toast-${type}-color, var(--color-${type}, currentColor))`,
                    }}
                />
            )}
        </div>
    );
};

export default Toast;
