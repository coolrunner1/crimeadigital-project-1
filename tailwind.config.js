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
            colors: {
                'lavender': '#7E3AF2',
            }
        },
    },
    plugins: [],
}

