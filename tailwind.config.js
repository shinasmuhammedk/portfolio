/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0a0a0a',    /* near-black */
                    darker: '#000000',  /* pure black */
                    accent: '#4ade80',  /* green-400 */
                    hover: '#22c55e',   /* green-500 */
                    light: '#f0fdf4',   /* green-50 */
                    muted: '#6b7280',   /* gray-500 */
                }
            }
        },
    },
    plugins: [],
}
