export default function AnimeCard({ item }) {
  return (
    <div className="col-3">
      <div className="card">
        <img
          src={item.imageUrl}
          className="card-img-top"
          style={{ height: "25rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
