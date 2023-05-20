import { useEffect, useRef } from "react";
import exampleImage from "../../assets/Oval.jpg";

import s from "./Main.module.scss";

const createDateStr = (value) => {
   const date = new Date(Date.parse(value));
   const options = {
      month: "long",
      year: "numeric",
      day: "numeric",
   };
   const dateStr = date.toLocaleString("en-US", options);
   // console.log(date.getDate());
   return (
      dateStr.split(",")[0].split(" ").reverse().join(" ") +
      " " +
      date.getFullYear()
   );
};

const Main = ({ user }) => {
   console.log(user);
   const parsedDate = createDateStr(user.created_at);
   // useEffect(() => {
   //    parsedDate.current = createDateStr(user.created_at)
   // }, [user]);
   return (
      <main className={s.mainSection}>
         <div className={s.avatar}>
            <img
               src={user.avatar_url ? user.avatar_url : exampleImage}
               alt=""
            />
         </div>
         <section className={s.descr}>
            <div className={s.descrInfo}>
               <div className={s.descrNameBlock}>
                  <h3 className={s.descrTitle}>{user.name || "The Octocat"}</h3>
                  <a href="#" className={s.descrSubtitle}>
                     @{user.login || "octocat"}
                  </a>
               </div>
               <div className={s.dateJoin}>
                  Joined {user.created_at ? parsedDate : "25 Jan 2011"}
               </div>
            </div>
         </section>
         <div className={s.descrText}>
            {user.bio ||
               "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
         </div>
         <section
            data-stats=""
            className={`${s.statistics} ${s.statisticsBgLight}`}
         >
            <div className={s.statisticsColumn}>
               <div className={s.columnSubtitle}>Repos</div>
               <div className={s.columnTitle}>{user.public_repos || "8"}</div>
            </div>
            <div className={s.statisticsColumn}>
               <div className={s.columnSubtitle}>Followers</div>
               <div className={s.columnTitle}>{user.followers || "3938"}</div>
            </div>
            <div className={s.statisticsColumn}>
               <div className={s.columnSubtitle}>Following</div>
               <div className={s.columnTitle}>{user.following || "9"}</div>
            </div>
         </section>
         <section className={s.social}>
            <div
               className={
                  user.location
                     ? `${s.socialItem} icon-location`
                     : `${s.socialItem} icon-location ${s.social__not_available}`
               }
            >
               {user.location || "Not Available"}
            </div>
            <a
               target="_blank"
               rel="noopener noreferrer"
               href={`https://twitter.com/${user.twitter_username}`}
               className={
                  user.twitter_username
                     ? `${s.socialItem} icon-twitter`
                     : `${s.socialItem} icon-twitter ${s.social__not_available}`
               }
            >
               {user.twitter_username || "Not Available"}
            </a>
            <a
               target="_blank"
               rel="noopener noreferrer"
               href={user.blog}
               className={
                  user.blog
                     ? `${s.socialItem} icon-website`
                     : `${s.socialItem} icon-website ${s.social__not_available}`
               }
            >
               {user.blog || "Not Available"}
            </a>
            <a
               target="_blank"
               rel="noopener noreferrer"
               href={user.company}
               className={
                  user.company
                     ? `${s.socialItem} icon-company`
                     : `${s.socialItem} icon-company ${s.social__not_available}`
               }
            >
               {user.company || "Not Available"}
            </a>
         </section>
      </main>
   );
};
export default Main;
