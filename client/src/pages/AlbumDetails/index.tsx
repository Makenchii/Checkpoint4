import "./index.css";

const albums = [
  {
    id: 1,
    title: "Kind of Blue",
    artist: "Miles Davis",
    year: 1959,
    image: "/assets/images/milesdavis.jpg",
    tracks: [
      { id: 1, title: "So What", duration: "9:22" },
      { id: 2, title: "Freddie Freeloader", duration: "9:46" },
      { id: 3, title: "Blue in Green", duration: "5:37" },
      { id: 4, title: "All Blues", duration: "11:33" },
      { id: 5, title: "Flamenco Sketches", duration: "9:26" },
    ],
  },
  {
    id: 2,
    title: "A Love Supreme",
    artist: "John Coltrane",
    year: 1964,
    image: "/assets/images/alovesupreme.jpg",
    tracks: [
      { id: 1, title: "Part 1: Acknowledgement", duration: "7:43" },
      { id: 2, title: "Part 2: Resolution", duration: "7:22" },
      { id: 3, title: "Part 3: Pursuance", duration: "10:45" },
      { id: 4, title: "Part 4: Psalm", duration: "7:05" },
    ],
  },
  {
    id: 3,
    title: "Time Out",
    artist: "Dave Brubeck",
    year: 1959,
    image: "/assets/images/timeout.jpg",
    tracks: [
      { id: 1, title: "Blue Rondo à la Turk", duration: "6:44" },
      { id: 2, title: "Strange Meadow Lark", duration: "7:22" },
      { id: 3, title: "Take Five", duration: "5:24" },
      { id: 4, title: "Three to Get Ready", duration: "5:23" },
      { id: 5, title: "Kathy's Waltz", duration: "4:48" },
    ],
  },
  {
    id: 4,
    title: "White Rabbit",
    artist: "George Benson",
    year: 1972,
    image: "/assets/images/whiterabbit.jpg",
    tracks: [
      { id: 1, title: "White Rabbit", duration: "6:55" },
      { id: 2, title: "Theme from 'Summer of '42'", duration: "5:05" },
      { id: 3, title: "Little Train", duration: "5:46" },
      { id: 4, title: "California Dreaming", duration: "7:20" },
      { id: 5, title: "El Mar", duration: "11:00" },
    ],
  },
];

export default function AlbumDetails() {
  return (
    <div className="album-list">
      {albums.map((album) => (
        <div key={album.id} className="album-details">
          <div className="album-header">
            <img src={album.image} alt={album.title} className="album-cover" />
            <h2>{album.title}</h2>
            <p className="album-artist">{album.artist}</p>
            <p className="album-year">{album.year}</p>
          </div>

          <div className="tracks-list">
            <h3>Morceaux</h3>
            <ul>
              {album.tracks.map((track) => (
                <li key={track.id} className="track-item">
                  <span className="track-number">{track.id}</span>
                  <span className="track-title">{track.title}</span>
                  <span className="track-duration">{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
