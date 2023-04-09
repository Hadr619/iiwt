import {useState, useEffect} from "react";
import clsx from "clsx";
import styles from "./ThemeToggle.module.scss";


export default function ThemeToggle() {

    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

    const handleClick = () => {
        setActiveTheme(inactiveTheme)
    }
    
      useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
      }, [activeTheme]);

    return (
        <div className={clsx(styles.toggle, activeTheme === 'light' ? styles.light : styles.dark)} onClick={()=> handleClick()}></div>
    )
}