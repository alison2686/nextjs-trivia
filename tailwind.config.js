module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/utils/index.ts",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "textured-gray": "url('/src/images/textured-gray.jpg')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
