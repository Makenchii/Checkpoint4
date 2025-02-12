import "./index.css";

export default function About() {
  return (
    <div className="about-page">
      <h2>À propos de JazzStream</h2>

      <div className="about-content">
        <p>
          JazzStream est une plateforme dédiée aux amateurs de jazz, offrant une
          expérience musicale unique à travers une vaste collection d'albums
          légendaires et de performances historiques.
        </p>

        <p>
          Notre mission est de préserver et partager l'héritage du jazz, en
          permettant aux auditeurs de découvrir ou redécouvrir les grands
          classiques ainsi que les artistes émergents du genre.
        </p>

        <div className="navigation-links">
          <a href="/" className="home-link">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}