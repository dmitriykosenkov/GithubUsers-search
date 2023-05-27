import { useState } from "react";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
   const [user, setUser] = useState({});
   const [notFound, setNotFound] = useState({});
   const [loading, setLoading] = useState(false);
   const getUser = (searchTerm) => {
      setNotFound({})
      const getData = async () => {
         setLoading(true)
         const response = await fetch(
            `https://api.github.com/users/${searchTerm}`
         );
         return response.json();
      };
      getData().then((data) => {
         if (data.login) {
            setUser(data);
            setLoading(false)
         } else {
            setNotFound(data)
         }
      });
   }
  
   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <div className={s.body}>
               <Header />
               <Searchbar
               loading={loading}
               getUser={getUser}
                  notFound={notFound}
               />
               <Main user={user} />
            </div>
         </div>
      </div>
   );
}

export default App;
