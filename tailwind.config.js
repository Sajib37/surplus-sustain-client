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
                Primary: "#364F6B",
                Secondary: "#3FC1C9",
                Accent: "#FC5185",
            },
            colors: {
                Primary: '#ffffff',
                background:"#F5F5F5"
            }
        },
    },
    plugins: [],
};
