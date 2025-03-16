import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

/**
 * Hook para utilizar el sistema de notificaciones Toast
 * @returns {Object} Objeto con métodos para gestionar toasts
 */
const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useToast debe ser utilizado dentro de un ToastProvider"
        );
    }

    const { showToast, removeToast, clearToasts, updateToast, toasts } =
        context;

    return {
        // Métodos principales
        showToast,
        removeToast,
        clearToasts,
        updateToast,

        // Métodos de conveniencia para tipos específicos
        success: (message, options = {}) =>
            showToast({ message, type: "success", ...options }),
        error: (message, options = {}) =>
            showToast({ message, type: "error", ...options }),
        warning: (message, options = {}) =>
            showToast({ message, type: "warning", ...options }),
        info: (message, options = {}) =>
            showToast({ message, type: "info", ...options }),

        // Estado actual
        toasts,
    };
};

export default useToast;
