import { useEffect, useState } from "react";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Searchbar from "./components/Searchbar/Searchbar";
import exampleImage from "./assets/Oval.jpg";

function App() {
   const [user, setUser] = useState({
       
   });
   const [searchTerm, setSearchTerm] = useState("");
   useEffect(() => {
      const getUser = async () => {
         const response = await fetch(
            `https://api.github.com/users/${searchTerm}`
         );
         return response.json();
      };
      getUser().then((data) => setUser(data));
   }, [searchTerm]);
   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <div className={s.body}>
               <Header />
               <Searchbar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
               />
               <Main user={user} />
            </div>
         </div>
      </div>
   );
}

export default App;
