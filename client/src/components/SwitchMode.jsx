import { useState } from 'react';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌑' }
        </button>
    );
};

export default ThemeSwitcher;