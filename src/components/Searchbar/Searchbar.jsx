import { useEffect, useState } from 'react';
import icon  from '../../assets/icon-search.svg'

import s from "./Searchbar.module.scss";

const Searchbar = ({ notFound, getUser, loading}) => {
   const [value, setValue] = useState('');
   const onSubmit = () => {
      getUser(value)
      setValue('')
   }
   return (
      <section className={s.searchSection}>
         <div className={s.searchIcon}>
            <img src={icon} alt="icon" />
         </div>
         <input value={value} onChange={e => setValue(e.currentTarget.value) } placeholder='Search GitHub username…' type="text" className={s.searchInput} />
         {loading && <div className={s.loader}>LOADING...</div>}
         <span className={s.notFound}>{notFound.message && "No results"}</span>
         <button onClick={onSubmit} className={s.searchBtn}>Search</button>
      </section>
   );
};
export default Searchbar;
