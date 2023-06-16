import { useEffect, useState } from "react";
import icon from "../../assets/icon-search.svg";

import s from "./Searchbar.module.scss";

const Searchbar = ({ notFound, getUser, loading }) => {
   const [value, setValue] = useState("");
   const [showNoResult, setShowNoResult] = useState(false);
   const onSubmit = () => {
      getUser(value);
      setValue("");
   };
   const onKeyHandler = (e) => {
      if (e.key === "Enter") {
         getUser(value);
         setValue("");
      }
   };
   useEffect(() => {
      let timerId;
      if (notFound.message) {
         setShowNoResult(true);
         timerId = setTimeout(() => {
            setShowNoResult(false);
         }, 1000);
      }
      return () => {
         clearTimeout(timerId);
      };
   }, [notFound]);
   
   return (
      <section className={s.searchSection}>
         <div className={s.searchIcon}>
            <img src={icon} alt="icon" />
         </div>
         <input
            onKeyDown={onKeyHandler}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder="Search GitHub username…"
            type="text"
            className={s.searchInput}
         />
         {loading && <div className={s.loader}>LOADING...</div>}
         <span className={s.notFound}>{showNoResult && "No results"}</span>
         <button onClick={onSubmit} className={s.searchBtn}>
            Search
         </button>
      </section>
   );
};
export default Searchbar;
