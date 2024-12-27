import plugin from "tailwindcss/plugin";

const addComponents = plugin(({ addComponents }) => {
  addComponents({
    ".text-title": {
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "29px",
      letterSpacing: "-0.4px",
    },
  });
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        header: "var(--header-height)",
      },
      maxWidth: {
        layout: "var(--layout-max)",
      },
      spacing: {
        header: "var(--header-height)",
      },
      transitionTimingFunction: {
        "in-quad": "var(--ease-in-quad)",
        "in-cubic": "var(--ease-in-cubic)",
        "in-quart": "var(--ease-in-quart)",
        "in-quint": "var(--ease-in-quint)",
        "in-expo": "var(--ease-in-expo)",
        "in-circ": "var(--ease-in-circ)",
        "in-back": "var(--ease-in-back)",

        "out-quad": "var(--ease-out-quad)",
        "out-cubic": "var(--ease-out-cubic)",
        "out-quart": "var(--ease-out-quart)",
        "out-quint": "var(--ease-out-quint)",
        "out-expo": "var(--ease-out-expo)",
        "out-circ": "var(--ease-out-circ)",
        "out-back": "var(--ease-out-back)",

        "in-out-quad": "var(--ease-in-out-quad)",
        "in-out-cubic": "var(--ease-in-out-cubic)",
        "in-out-quart": "var(--ease-in-out-quart)",
        "in-out-quint": "var(--ease-in-out-quint)",
        "in-out-expo": "var(--ease-in-out-expo)",
        "in-out-circ": "var(--ease-in-out-circ)",
        "in-out-back": "var(--ease-in-out-back)",
      },
    },
  },
  plugins: [addComponents],
};
