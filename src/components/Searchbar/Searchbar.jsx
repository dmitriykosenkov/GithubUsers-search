import { useEffect, useState } from "react";
import icon from "../../assets/icon-search.svg";

import s from "./Searchbar.module.scss";
import { Transition } from "react-transition-group";

const duration = 200;

const defaultStyle = {
   transition: `all ${duration}ms ease-in-out`,
   opacity: 0,
   visibility: "hidden"
};

const transitionStyles = {
   entering: { opacity: 1, visibility: "visible" },
   entered: { opacity: 1, visibility: "visible" },
   exiting: { opacity: 0, visibility: "hidden" },
   exited: { opacity: 0, visibility: "hidden" },
};

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
         <Transition in={showNoResult} timeout={duration} unmountOnExit>
            {(state) => {
               return (
                  <span
                     className={s.notFound}
                     style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                     }}
                  >
                     {showNoResult && "No results"}
                  </span>
               );
            }}
         </Transition>
         <button
            disabled={value === ""}
            onClick={onSubmit}
            className={s.searchBtn}
         >
            Search
         </button>
      </section>
   );
};
export default Searchbar;
