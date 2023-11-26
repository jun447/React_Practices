import {useEffect, useState} from 'react'
import './App.css'
import {ThemeProvider} from "./context/theme.js";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";

function App() {
    const [themeMode, setThemeMode] = useState('light')
    const lightTheme =() => {
        setThemeMode("light")
    }
    const darkTheme =() => {
        setThemeMode("dark")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('dark', 'light')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode]);

    return (
        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
            <div className="flex flex-wrap  min-h-screen items-center dark:bg-gray-900">
                <div className="w-full border-2 bg-orange-700">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className=" border-2 border-amber-50  max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App