import React, { useState } from "react";
import useToast from "./useToast";

/**
 * Componente de demostración del sistema de Toast
 * Permite probar diferentes configuraciones y ver el resultado en tiempo real
 */
const ToastDemo = ({ viewport }) => {
    const { showToast, clearToasts } = useToast();

    // Estado para las opciones del toast de demostración
    const [options, setOptions] = useState({
        message: "Esta es una notificación de ejemplo",
        type: "success",
        position: "top-right",
        duration: 3000,
        closable: true,
        action: {
            label: "Acción",
            onClick: () => alert("¡Acción del toast activada!"),
        },
    });

    // Actualizar una opción específica
    const updateOption = (key, value) => {
        setOptions((prev) => ({ ...prev, [key]: value }));
    };

    // Activar/desactivar la acción del toast
    const toggleAction = () => {
        setOptions((prev) => ({
            ...prev,
            action: prev.action
                ? null
                : {
                      label: "Acción",
                      onClick: () => alert("¡Acción del toast activada!"),
                  },
        }));
    };

    return (
        <div
            className={`toast-demo ${
                viewport === "mobile" ? "toast-demo-mobile" : ""
            }`}
        >
            <div className="toast-demo-header">
                <h3 className="toast-demo-title">
                    Sistema de Notificaciones Toast
                </h3>
                <p className="toast-demo-description">
                    Un sistema flexible y accesible de notificaciones para tu
                    aplicación
                </p>
            </div>

            <div className="toast-demo-content">
                <div className="toast-control-panel">
                    {/* Tipo de notificación */}
                    <div className="control-group">
                        <label className="control-label">Tipo:</label>
                        <div className="button-group">
                            {["success", "error", "warning", "info"].map(
                                (type) => (
                                    <button
                                        key={type}
                                        className={`control-button ${
                                            options.type === type
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            updateOption("type", type)
                                        }
                                        style={{
                                            /* Estilos específicos por tipo */
                                            ...(options.type === type
                                                ? {
                                                      backgroundColor: `var(--toast-${type}-color, var(--color-${type}))`,
                                                  }
                                                : {}),
                                        }}
                                    >
                                        {type}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* Posición */}
                    <div className="control-group">
                        <label className="control-label">Posición:</label>
                        <div className="button-group">
                            {[
                                ["top-left", "↖"],
                                ["top-center", "↑"],
                                ["top-right", "↗"],
                                ["bottom-left", "↙"],
                                ["bottom-center", "↓"],
                                ["bottom-right", "↘"],
                            ].map(([pos, icon]) => (
                                <button
                                    key={pos}
                                    className={`control-button ${
                                        options.position === pos ? "active" : ""
                                    }`}
                                    onClick={() =>
                                        updateOption("position", pos)
                                    }
                                    title={pos.replace("-", " ")}
                                >
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Duración */}
                    <div className="control-group">
                        <label className="control-label">
                            Duración:{" "}
                            {options.duration === 0
                                ? "Permanente"
                                : `${options.duration / 1000}s`}
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            step="1000"
                            value={options.duration}
                            onChange={(e) =>
                                updateOption("duration", Number(e.target.value))
                            }
                            className="control-range"
                        />
                    </div>

                    {/* Opciones adicionales */}
                    <div className="control-group">
                        <label className="control-label">Opciones:</label>
                        <div className="checkbox-group">
                            <label className="control-checkbox">
                                <input
                                    type="checkbox"
                                    checked={options.closable}
                                    onChange={(e) =>
                                        updateOption(
                                            "closable",
                                            e.target.checked
                                        )
                                    }
                                />
                                Se puede cerrar
                            </label>

                            <label className="control-checkbox">
                                <input
                                    type="checkbox"
                                    checked={!!options.action}
                                    onChange={toggleAction}
                                />
                                Incluir acción
                            </label>
                        </div>
                    </div>

                    {/* Mensaje personalizado */}
                    <div className="control-group">
                        <label className="control-label">Mensaje:</label>
                        <textarea
                            className="control-textarea"
                            value={options.message}
                            onChange={(e) =>
                                updateOption("message", e.target.value)
                            }
                            rows="2"
                        />
                    </div>

                    {/* Botones de acción */}
                    <div className="control-actions">
                        <button
                            className="demo-button primary"
                            onClick={() => showToast(options)}
                        >
                            Mostrar Notificación
                        </button>

                        <button
                            className="demo-button secondary"
                            onClick={clearToasts}
                        >
                            Limpiar Todas
                        </button>
                    </div>
                </div>

                <div className="toast-preview">
                    <div className="toast-preview-container">
                        <div className="preview-phone">
                            <div className="preview-screen">
                                <div className="preview-app">
                                    <div className="preview-header"></div>
                                    <div className="preview-content"></div>

                                    {/* Toast de muestra estático */}
                                    <div
                                        className={`preview-toast preview-${options.position}`}
                                    >
                                        <div
                                            className={`toast toast-${options.type} toast-preview-static`}
                                        >
                                            <div className="toast-icon">
                                                {options.type === "success" &&
                                                    "✓"}
                                                {options.type === "error" &&
                                                    "✕"}
                                                {options.type === "warning" &&
                                                    "⚠"}
                                                {options.type === "info" && "ℹ"}
                                            </div>
                                            <div className="toast-content">
                                                <div className="toast-message">
                                                    {options.message}
                                                </div>
                                            </div>
                                            {options.action && (
                                                <button className="toast-action">
                                                    {options.action.label}
                                                </button>
                                            )}
                                            {options.closable && (
                                                <button className="toast-close">
                                                    ✕
                                                </button>
                                            )}
                                            {options.duration > 0 && (
                                                <div className="toast-progress"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toast-demo-code">
                <h4>Implementación:</h4>
                <pre>
                    <code>{`
// 1. Envuelve tu aplicación con el provider
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

// 2. Usa el hook en cualquier componente
import { useToast } from './components/Toast';

function YourComponent() {
  const { showToast } = useToast();
  
  const handleAction = () => {
    showToast({
      message: "${options.message}",
      type: "${options.type}",
      position: "${options.position}",
      duration: ${options.duration},
      closable: ${options.closable},
      ${
          options.action
              ? `action: {
        label: "Acción",
        onClick: () => { /* Tu código aquí */ }
      }`
              : ""
      }
    });
  };
  
  return <button onClick={handleAction}>Mostrar Toast</button>;
}
        `}</code>
                </pre>
            </div>
        </div>
    );
};

export default ToastDemo;
