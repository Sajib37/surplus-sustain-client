/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lobster: "Lobster",
                poppins: "Poppins",
            },
            textColor: {
                Primary: "#37B100",
                Secondary: "#61876E",
                Accent: "#EB6635",
            },
        },
    },
    plugins: [],
};
