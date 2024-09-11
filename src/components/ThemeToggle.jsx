import { Within } from '@theme-toggles/react';
import { useState, useEffect } from 'react';

function ThemeToggle({ size }) {
    const [isDark, setIsDark] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme === 'dark';
    });

    useEffect(
        function () {
            if (isDark) {
                localStorage.setItem('theme', 'dark');
                document.getElementsByTagName('html')[0].classList.add('dark');
            } else {
                document.getElementsByTagName('html')[0].classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        },
        [isDark, setIsDark]
    );

    return (
        <Within
            className={`text-text-light  dark:text-text-dark z-10  ${size}`}
            toggled={isDark}
            toggle={setIsDark}
        />
    );
}

export default ThemeToggle;
