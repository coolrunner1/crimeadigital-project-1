/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat']
            },
            backgroundImage: {
                'music': "url('/music.svg')",
                'art': "url('/art.svg')",
                'photo': "url('/photo.svg')",
            },
            keyframes: {
                slideIn: {
                    '0%': {
                        transform: "translateY(-200px)",
                        opacity: "0"
                    },
                    '100%': {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                }
            },
            animation: {
                'slide-in': "0.3s linear 0s alternate slideIn",
            },
            colors: {
                'lavender': '#7E3AF2',
            }
        },
    },
    plugins: [],
}

