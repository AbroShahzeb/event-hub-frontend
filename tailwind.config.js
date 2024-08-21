/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // primary: {
                //     light: '#007BFF',
                //     dark: '#1E90FF',
                // },
                secondary: {
                    light: '#6C757D',
                    dark: '#6C757D',
                },
                primary: {
                    50: 'hsl(330.12, 100%, 90%)',
                    100: 'hsl(330.12, 100%, 80%)',
                    400: 'hsl(330.12, 100%, 70%)',
                    500: 'hsl(330.12, 100%, 50%)',
                    600: 'hsl(330.12, 100%, 45%)',
                    700: 'hsl(330.12, 100%, 35%)',
                    800: 'hsl(330.12, 100%, 30%)',
                    900: 'hsl(330.12, 100%, 15%)',
                },
                surface: {
                    light: '#ffffff',
                    dark: 'hsl(222.22, 47.37%, 11.18%)',
                },
                text: {
                    light: 'rgb(51 65 85)',
                    dark: 'rgb(241 245 249)',
                },
                'text-secondary': {
                    light: 'hsl(215.29, 19.32%, 34.51%)',
                    dark: ' rgb(226 232 240)',
                },
                'btn-primary': {
                    light: '#007BFF',
                    dark: '#1E90FF',
                },
                'btn-primary-hover': {
                    light: '#0056b3',
                    dark: '#1C7CD6',
                },
                'btn-secondary': {
                    light: '#6C757D',
                    dark: '#6C757D',
                },
                'btn-secondary-hover': {
                    light: '#5A6268',
                    dark: '#5A6268',
                },
                'btn-accent': {
                    light: '#50E3C2',
                    dark: '#3AB89B',
                },
                'btn-accent-hover': {
                    light: '#3AB89B',
                    dark: '#50E3C2',
                },
                border: {
                    light: '#CED4DA',
                    dark: '#495057',
                },
                'input-bg': {
                    light: '#FFFFFF',
                    dark: '#495057',
                },
                'input-border': {
                    light: '#CED4DA',
                    dark: '#6C757D',
                },
                link: {
                    light: '#007BFF',
                    dark: '#1E90FF',
                },
                'link-hover': {
                    light: '#0056b3',
                    dark: '#1C7CD6',
                },
                error: '#FF4C4C',
            },
            fontFamily: {
                headings: 'Proxima Soft',
                body: 'Lato',
            },
            borderRadius: {
                primary: '0.1875rem',
            },
            fontSize: {
                body: '1rem',
                'body-big': '1.125rem',
                'heading-1': '4.5rem',
                'heading-2': '3rem',
                'heading-3': '2rem',
                'heading-4': '1.5rem',
                'heading-5': '1.25rem',
                'heading-6': '1.125rem',
            },
            screens: {
                xs: '375px',
            },
            backgroundImage: {
                grid: 'url(/grid.svg)',
            },
        },
    },
    plugins: [],
};
