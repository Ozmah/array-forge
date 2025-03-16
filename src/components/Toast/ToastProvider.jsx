import React, { createContext, useState, useCallback } from "react";
import ToastContainer from "./ToastContainer";

// Crear el contexto
export const ToastContext = createContext();

/**
 * Proveedor del sistema de notificaciones Toast
 * Gestiona el estado de todas las notificaciones y proporciona métodos para crearlas y eliminarlas
 */
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    // Añadir una nueva notificación
    const showToast = useCallback((options) => {
        const newToast = {
            id: Date.now(),
            type: "info",
            duration: 3000,
            position: "top-right",
            closable: true,
            ...options,
        };

        setToasts((prev) => [...prev, newToast]);

        // Configurar el autocierre si duration > 0
        if (newToast.duration > 0) {
            setTimeout(() => removeToast(newToast.id), newToast.duration);
        }

        return newToast.id; // Devolver ID para posible referencia futura
    }, []);

    // Eliminar una notificación por su ID
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    // Eliminar todas las notificaciones
    const clearToasts = useCallback(() => {
        setToasts([]);
    }, []);

    // Actualizar una notificación existente
    const updateToast = useCallback((id, options) => {
        setToasts((prev) =>
            prev.map((toast) =>
                toast.id === id ? { ...toast, ...options } : toast
            )
        );
    }, []);

    return (
        <ToastContext.Provider
            value={{
                toasts,
                showToast,
                removeToast,
                clearToasts,
                updateToast,
            }}
        >
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

export default ToastProvider;
