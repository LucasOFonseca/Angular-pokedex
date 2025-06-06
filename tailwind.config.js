/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Open Sans", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        background: "var(--app-background)",
        "on-background": "var(--app-on-background)",
        inverse: "var(--app-inverse)",
        primary: {
          DEFAULT: "var(--app-primary)",
          0: "var(--app-primary-0)",
          50: "var(--app-primary-50)",
          100: "var(--app-primary-100)",
          200: "var(--app-primary-200)",
          300: "var(--app-primary-300)",
          400: "var(--app-primary-400)",
          450: "var(--app-primary-450)",
          500: "var(--app-primary-500)",
          600: "var(--app-primary-600)",
          650: "var(--app-primary-650)",
          700: "var(--app-primary-700)",
          800: "var(--app-primary-800)",
          900: "var(--app-primary-900)",
          950: "var(--app-primary-950)",
          1000: "var(--app-primary-1000)",
        },
        secondary: {
          DEFAULT: "var(--app-secondary)",
          0: "var(--app-secondary-0)",
          50: "var(--app-secondary-50)",
          100: "var(--app-secondary-100)",
          200: "var(--app-secondary-200)",
          300: "var(--app-secondary-300)",
          400: "var(--app-secondary-400)",
          450: "var(--app-secondary-450)",
          500: "var(--app-secondary-500)",
          600: "var(--app-secondary-600)",
          650: "var(--app-secondary-650)",
          700: "var(--app-secondary-700)",
          800: "var(--app-secondary-800)",
          900: "var(--app-secondary-900)",
          950: "var(--app-secondary-950)",
          1000: "var(--app-secondary-1000)",
        },
        tertiary: {
          DEFAULT: "var(--app-tertiary)",
          0: "var(--app-tertiary-0)",
          50: "var(--app-tertiary-50)",
          100: "var(--app-tertiary-100)",
          200: "var(--app-tertiary-200)",
          300: "var(--app-tertiary-300)",
          400: "var(--app-tertiary-400)",
          450: "var(--app-tertiary-450)",
          500: "var(--app-tertiary-500)",
          600: "var(--app-tertiary-600)",
          650: "var(--app-tertiary-650)",
          700: "var(--app-tertiary-700)",
          800: "var(--app-tertiary-800)",
          900: "var(--app-tertiary-900)",
          950: "var(--app-tertiary-950)",
          1000: "var(--app-tertiary-1000)",
        },
        neutral: {
          DEFAULT: "var(--app-neutral)",
          0: "var(--app-neutral-0)",
          50: "var(--app-neutral-50)",
          100: "var(--app-neutral-100)",
          200: "var(--app-neutral-200)",
          300: "var(--app-neutral-300)",
          400: "var(--app-neutral-400)",
          450: "var(--app-neutral-450)",
          500: "var(--app-neutral-500)",
          600: "var(--app-neutral-600)",
          650: "var(--app-neutral-650)",
          700: "var(--app-neutral-700)",
          800: "var(--app-neutral-800)",
          900: "var(--app-neutral-900)",
          950: "var(--app-neutral-950)",
          1000: "var(--app-neutral-1000)",
        },
        "neutral-variant": {
          DEFAULT: "var(--app-neutral-variant)",
          0: "var(--app-neutral-variant-0)",
          50: "var(--app-neutral-variant-50)",
          100: "var(--app-neutral-variant-100)",
          200: "var(--app-neutral-variant-200)",
          300: "var(--app-neutral-variant-300)",
          400: "var(--app-neutral-variant-400)",
          450: "var(--app-neutral-variant-450)",
          500: "var(--app-neutral-variant-500)",
          600: "var(--app-neutral-variant-600)",
          650: "var(--app-neutral-variant-650)",
          700: "var(--app-neutral-variant-700)",
          800: "var(--app-neutral-variant-800)",
          900: "var(--app-neutral-variant-900)",
          950: "var(--app-neutral-variant-950)",
          1000: "var(--app-neutral-variant-1000)",
        },
        error: {
          DEFAULT: "var(--app-error)",
          0: "var(--app-error-0)",
          50: "var(--app-error-50)",
          100: "var(--app-error-100)",
          200: "var(--app-error-200)",
          300: "var(--app-error-300)",
          400: "var(--app-error-400)",
          450: "var(--app-error-450)",
          500: "var(--app-error-500)",
          600: "var(--app-error-600)",
          650: "var(--app-error-650)",
          700: "var(--app-error-700)",
          800: "var(--app-error-800)",
          900: "var(--app-error-900)",
          950: "var(--app-error-950)",
          1000: "var(--app-error-1000)",
        },
        "on-primary": "var(--app-on-primary)",
        "primary-container": "var(--app-primary-container)",
        "on-primary-container": "var(--app-on-primary-container)",
        "primary-fixed": "var(--app-primary-fixed)",
        "primary-fixed-dim": "var(--app-primary-fixed-dim)",
        "on-primary-fixed": "var(--app-on-primary-fixed)",
        "on-primary-fixed-variant": "var(--app-on-primary-fixed-variant)",

        "on-secondary": "var(--app-on-secondary)",
        "secondary-container": "var(--app-secondary-container)",
        "on-secondary-container": "var(--app-on-secondary-container)",
        "secondary-fixed": "var(--app-secondary-fixed)",
        "secondary-fixed-dim": "var(--app-secondary-fixed-dim)",
        "on-secondary-fixed": "var(--app-on-secondary-fixed)",
        "on-secondary-fixed-variant": "var(--app-on-secondary-fixed-variant)",

        "on-tertiary": "var(--app-on-tertiary)",
        "tertiary-container": "var(--app-tertiary-container)",
        "on-tertiary-container": "var(--app-on-tertiary-container)",
        "tertiary-fixed": "var(--app-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--app-tertiary-fixed-dim)",
        "on-tertiary-fixed": "var(--app-on-tertiary-fixed)",
        "on-tertiary-fixed-variant": "var(--app-on-tertiary-fixed-variant)",

        "on-error": "var(--app-on-error)",
        "error-container": "var(--app-error-container)",
        "on-error-container": "var(--app-on-error-container)",

        surface: "var(--app-surface)",
        "surface-dim": "var(--app-surface-dim)",
        "surface-bright": "var(--app-surface-bright)",
        "surface-container-lowest": "var(--app-surface-container-lowest)",
        "surface-container-low": "var(--app-surface-container-low)",
        "surface-container": "var(--app-surface-container)",
        "surface-container-high": "var(--app-surface-container-high)",
        "surface-container-highest": "var(--app-surface-container-highest)",
        "on-surface": "var(--app-on-surface)",
        "on-surface-variant": "var(--app-on-surface-variant)",

        outline: "var(--app-outline)",
        "outline-variant": "var(--app-outline-variant)",

        "inverse-surface": "var(--app-inverse-surface)",
        "inverse-on-surface": "var(--app-inverse-on-surface)",
        "inverse-primary": "var(--app-inverse-primary)",

        scrim: "var(--app-scrim)",
        shadow: "var(--app-shadow)",

        accent: "var(--app-accent)",
        warn: "var(--app-warn)",
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
};
