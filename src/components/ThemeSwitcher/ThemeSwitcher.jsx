import s from "./ThemeSwitcher.module.scss";
import { useUserTheme } from "./hooks/useUserThemeHook";

const ThemeSwitcher = () => {
   const { theme, toggleTheme } = useUserTheme("light");

   return (
      <div className={s.body}>
         <div
            className={
               "light" === theme
                  ? `${s.themeTitle} ${s.themeTitleLight} icon-moon`
                  : `${s.themeTitle} ${s.themeTitleDark} icon-sun`
            }
            onClick={toggleTheme}
         >
            {theme === "light" ? "dark" : "light"}
         </div>
      </div>
   );
};
export default ThemeSwitcher;
