import dummyData from "../dummyData/dummy.json";
import AnimeCard from "../components/AnimeCard";
import { useContext } from "react";
import ThemeContext from "../context/themeContext";

export default function AnimePage() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${theme[theme.currentTheme].bgColor} ${
        theme[theme.currentTheme].fontColor
      }`}
    >
      <h1 className="text-center">Anime List</h1>
      <div className="container text-center mt-5">
        <div className="row gap-3 justify-content-center">
          {dummyData.map((item) => (
            <AnimeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
