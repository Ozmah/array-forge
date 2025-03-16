// Use of barrel pattern, compiling all exports in a single file for all files Toast related.
import ToastProvider from "./ToastProvider";
import useToast from "./useToast";
import ToastDemo from "./ToastDemo";

// Exportar componentes y hooks principales
export { ToastProvider, useToast, ToastDemo };

// Exportación por defecto para facilitar la importación
export default ToastProvider;
