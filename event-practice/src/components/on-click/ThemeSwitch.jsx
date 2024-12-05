import { useState } from "react";


export const ThemeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="bg-gray-100 font-semibold dark:bg-gray-800 dark:text-white flex items-center justify-center p-3 rounded">
                <button className=" outline-none" onClick={() => setDarkMode(!darkMode)}>Toggle {darkMode ? "Light" : "Dark"} Mode</button>
            </div>
        </div>
    )
}
