module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                MuseoModerno: ['"MuseoModerno"', "cursive"],
            },
            boxShadow: {
                hover: "0px 14px 20px rgba(0, 0, 0, 0.1);",
            },
            fontSize: {
                xs8: "0.5rem",
                xs9: "0.5625em",
                xs: "0.625rem",
                xs12: "0.75rem",
                xl: "1.3125rem",
                "2xl": "2.25rem",
            },
            colors: {
                rhino: {
                    DEFAULT: "#333269",
                    500: "#333269",
                },
                melrose: {
                    DEFAULT: "#C0BEFF",
                    500: "#C0BEFF",
                },
                indigo: {
                    DEFAULT: "#5855D6",
                    500: "#5855D6",
                },
                mercury: {
                    DEFAULT: "#E5E5E5",
                    500: "#E5E5E5",
                },
                manatee: {
                    DEFAULT: "#9592A6",
                    500: "#9592A6",
                },
                "titan-white": {
                    DEFAULT: "#E7E7FF",
                    500: "#E7E7FF",
                },
                "titan-white-hover": {
                    DEFAULT: "#FAFAFF",
                    500: "#FAFAFF",
                },
                "radical-red": {
                    DEFAULT: "#FF2C55",
                },
                emerald: {
                    DEFAULT: "#4ED964",
                },
                "white-lilac": {
                    DEFAULT: "#F8F8FC",
                },
            },
            width: {
                "240px": "240px",
                "68px": "68px",
                "127px": "127px",
                "111px": "111px",
                "72px": "72px",
            },
            height: {
                "68px": "68px",
                "221px": "221px",
                "72px": "72px",
                "48px": "48px",
            },
            margin: {
                "240px": "240px",
                "111px": "111px",
            },
        },
    },
    variants: {
        extend: {
            margin: ["responsive", "hover", "focus"],
        },
    },
    plugins: [],
};
