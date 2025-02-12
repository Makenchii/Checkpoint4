import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./index.css";

export default function Home() {
  const [, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const featuredAlbums = [
    {
      id: 1,
      title: "Kind of Blue",
      artist: "Miles Davis",
      year: 1959,
      image: "/assets/images/milesdavis.jpg",
    },
    {
      id: 2,
      title: "A Love Supreme",
      artist: "John Coltrane",
      year: 1964,
      image: "/assets/images/timeout.jpg",
    },
    {
      id: 3,
      title: "Time Out",
      artist: "Dave Brubeck",
      year: 1959,
      image: "/assets/images/alovesupreme.jpg",
    },
    {
      id: 3,
      title: "White Rabbit",
      artist: "George Benson",
      year: 1972,
      image: "/assets/images/whiterabbit.jpg",
    },
  ];

  return (
    <main className="home-content">
      <div className="search-section">
        <SearchBar onSearch={handleSearch} />
      </div>

      <section className="featured-albums">
        <h2>Albums Populaires</h2>
        <div className="albums-grid">
          {featuredAlbums.map((album) => (
            <div key={album.id} className="album-card">
              <div className="album-cover">
                <img
                  src={`${import.meta.env.VITE_API_URL}${album.image}`}
                  alt={album.title}
                  className="album-image"
                />
              </div>
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <span className="album-year">{album.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
