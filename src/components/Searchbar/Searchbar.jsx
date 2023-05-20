import { useState } from 'react';
import icon  from '../../assets/icon-search.svg'

import s from "./Searchbar.module.scss";

const Searchbar = ({setSearchTerm}) => {
   const [value, setValue] = useState('');
   return (
      <section className={s.searchSection}>
         <div className={s.searchIcon}>
            <img src={icon} alt="icon" />
         </div>
         <input value={value} onChange={e => setValue(e.currentTarget.value) } placeholder='Search GitHub username…' type="text" className={s.searchInput} />
         <button onClick={() => setSearchTerm(value)} className={s.searchBtn}>Search</button>
      </section>
   );
};
export default Searchbar;
