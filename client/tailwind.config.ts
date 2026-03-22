/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // This ensures it scans all your components
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                accent: "#06b6d4",
            },
            fontFamily: {
                mono: ['Fira Code', 'monospace'],
            }
        },
    },
    plugins: [],
}