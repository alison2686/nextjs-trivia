module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/utils/index.ts",
    ],
    theme: {
        extend: {
            fontFamily: {
                dosis: ["Dosis", "sans-serif"],
                lobster: ["Lobster Two", "cursive"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
