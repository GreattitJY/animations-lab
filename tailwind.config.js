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
    },
  },
  plugins: [],
};
