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
                Primary: "#0F4C75",
                Secondary: "#3282B8",
                Accent: "#363062",
            },
            colors: {
                Primary:'#ffffff'
            }
        },
    },
    plugins: [],
};
