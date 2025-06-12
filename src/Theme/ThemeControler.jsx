import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WiDaySunny } from "react-icons/wi";
import { PiMoonStarsDuotone } from "react-icons/pi";


const ThemeControler = () => {
    const [theme, setTheme] = useState("mytheme")


    useEffect(() => {
        const prev = localStorage.getItem("theme") || "mytheme";
        setTheme(prev)
        document.documentElement.setAttribute("data-theme", prev)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "mytheme" ? "mythemeDark" : "mytheme"
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)

    }

    return (
        <div className='flex items-center justify-center'>
            <button className='px-6' onClick={toggleTheme}>{theme === "mytheme" ? <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <WiDaySunny size={29} />
            </motion.div>
                : <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <PiMoonStarsDuotone size={25} />
                </motion.div>}</button>
        </div>
    );
};

export default ThemeControler;