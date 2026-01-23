export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rosebrown: {
                    50: "#fdf6f4",
                    100: "#f7e6e1",
                    200: "#eac4b9",
                    300: "#dca296",
                    400: "#c67b6a",
                    500: "#a85a4a", // ⭐ primary
                    600: "#8f4a3d",
                    700: "#743b31",
                    800: "#5a2e26",
                    900: "#3f201a",
                },
            },
            keyframes: {
                marquee: {
                    "0%": { transform: 'translateX(50%)' },
                    "100%": { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 18s linear infinite',
            },

        },
        plugins: [],
    }
}