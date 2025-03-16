import React, { useContext } from "react";
import { ToastContext } from "./ToastProvider";
import Toast from "./Toast";

/**
 * Contenedor para organizar y posicionar los toasts
 * Agrupa las notificaciones por posición y las renderiza en el lugar adecuado
 */
const ToastContainer = () => {
    const { toasts, removeToast } = useContext(ToastContext);

    // Si no hay toasts, no renderizar nada
    if (toasts.length === 0) return null;

    // Agrupar toasts por posición
    const groupedToasts = toasts.reduce((acc, toast) => {
        if (!acc[toast.position]) acc[toast.position] = [];
        acc[toast.position].push(toast);
        return acc;
    }, {});

    return (
        <div className="toast-wrapper">
            {Object.entries(groupedToasts).map(([position, positionToasts]) => (
                <div
                    key={position}
                    className={`toast-container position-${position}`}
                >
                    {positionToasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            toast={toast}
                            onClose={removeToast}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ToastContainer;
