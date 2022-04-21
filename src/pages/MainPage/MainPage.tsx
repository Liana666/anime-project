import { AniList } from "../../components/AniApi/AniList";
import img from "../../img/img4.jpg";
import { getAuth } from "firebase/auth";
import "./MainPage.css";

export const MainPage = () => {
  const auth = getAuth();
  console.log(auth)
  return (
    <>
      <main className="main">
        <img className="back" src={img} alt="" />
        <div className="main__container">
          <AniList />
        </div>
      </main>
    </>
  );
};
