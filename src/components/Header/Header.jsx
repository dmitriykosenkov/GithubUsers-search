import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import s from './Header.module.scss'


const Header = () => {

   return (
      <header className={s.header}>
         <a href="" className={s.headerLogo}>
            devfinder
         </a>
         <ThemeSwitcher />
      </header>
   );
};
export default Header;
