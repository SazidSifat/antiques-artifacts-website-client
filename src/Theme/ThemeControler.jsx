import React, { useEffect, useState } from 'react';

const ThemeControler = () => {
    const [theme, SetTheme] = useState("light")

    useEffect(() => {
        const prevTheme = localStorage.getItem("theme")

    }, [])
    return (
        <div>

        </div>
    );
};

export default ThemeControler;