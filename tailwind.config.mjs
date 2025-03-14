import { defineConfig } from "tailwindcss";

export default defineConfig({
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                background: "var(--color-background)",
            },
            backgroundColor: {
                theme: {
                    card: "var(--card-background)",
                    nav: "var(--nav-background)",
                },
            },
            textColor: {
                theme: {
                    default: "var(--color-text)",
                    muted: "var(--color-text-secondary)",
                },
            },
            borderColor: {
                DEFAULT: "var(--color-border)", // Tailwind 4 recomienda `DEFAULT`
            },
            borderRadius: {
                sm: "var(--border-radius-sm)",
                md: "var(--border-radius-md)",
                lg: "var(--border-radius-lg)",
                xl: "var(--border-radius-xl)",
                "2xl": "var(--border-radius-2xl)",
            },
            fontFamily: {
                sans: ["var(--font-family)", "sans-serif"],
            },
            fontWeight: {
                normal: "var(--font-weight-normal)",
                medium: "var(--font-weight-medium)",
                bold: "var(--font-weight-bold)",
            },
        },
    },
    plugins: [],
});
