import dummyData from "../dummyData/dummy.json";
import AnimeCard from "../components/AnimeCard";

export default function AnimePage() {
  return (
    <>
      <h1 className="text-center">Anime List</h1>
      <div className="container text-center mt-5">
        <div className="row gap-3 justify-content-center">
          {dummyData.map((item) => (
            <AnimeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
