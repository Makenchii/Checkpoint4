
CREATE TABLE album (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    artiste VARCHAR(255) NOT NULL
);

CREATE TABLE track (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    album_id INT UNSIGNED NOT NULL,
    titre VARCHAR(255) NOT NULL,
    artiste VARCHAR(255) NOT NULL,
    annee YEAR NOT NULL,
    image VARCHAR(255),
    description TEXT,
    FOREIGN KEY (album_id) REFERENCES album(id)
);

INSERT INTO album (id, title, genre, image, artiste) VALUES
    (1, 'Kind of Blue', 'Jazz', '/assets/images/milesdavis.jpg', 'Miles Davis'),
    (2, 'A Love Supreme', 'Jazz', '/assets/images/timeout.jpg', 'John Coltrane'),
    (3, 'Time Out', 'Jazz', '/assets/images/alovesupreme.jpg', 'Dave Brubeck'),
    (4, 'White Rabbit', 'Jazz', '/assets/images/whiterabbit.jpg', 'George Benson');

INSERT INTO track (album_id, titre, artiste, annee, image, description) VALUES
    (1, 'So What', 'Miles Davis', 1959, '/assets/images/milesdavis.jpg', 'Premier morceau emblématique de l''album Kind of Blue'),
    (1, 'Freddie Freeloader', 'Miles Davis', 1959, '/assets/images/milesdavis.jpg', 'Une composition blues classique'),
    (1, 'Blue in Green', 'Miles Davis', 1959, '/assets/images/milesdavis.jpg', 'Une ballade lyrique et méditative'),
    (1, 'All Blues', 'Miles Davis', 1959, '/assets/images/milesdavis.jpg', 'Un blues en 6/8 devenu un standard'),
    (1, 'Flamenco Sketches', 'Miles Davis', 1959, '/assets/images/milesdavis.jpg', 'La dernière piste contemplative de l''album');

INSERT INTO track (album_id, titre, artiste, annee, image, description) VALUES
    (2, 'Acknowledgement', 'John Coltrane', 1964, '/assets/images/timeout.jpg', 'Première partie de la suite A Love Supreme'),
    (2, 'Resolution', 'John Coltrane', 1964, '/assets/images/timeout.jpg', 'Deuxième mouvement puissant de la suite'),
    (2, 'Pursuance', 'John Coltrane', 1964, '/assets/images/timeout.jpg', 'Troisième partie énergique de l''œuvre'),
    (2, 'Psalm', 'John Coltrane', 1964, '/assets/images/timeout.jpg', 'Conclusion méditative de la suite');

INSERT INTO track (album_id, titre, artiste, annee, image, description) VALUES
    (3, 'Take Five', 'Dave Brubeck', 1959, '/assets/images/alovesupreme.jpg', 'Le morceau le plus célèbre de l''album, en 5/4'),
    (3, 'Blue Rondo à la Turk', 'Dave Brubeck', 1959, '/assets/images/alovesupreme.jpg', 'Morceau inspiré par la musique turque'),
    (3, 'Strange Meadow Lark', 'Dave Brubeck', 1959, '/assets/images/alovesupreme.jpg', 'Une composition plus contemplative'),
    (3, 'Three to Get Ready', 'Dave Brubeck', 1959, '/assets/images/alovesupreme.jpg', 'Exploration rythmique en valse jazz'),
    (3, 'Kathy''s Waltz', 'Dave Brubeck', 1959, '/assets/images/alovesupreme.jpg', 'Valse dédiée à la fille de Dave Brubeck');

INSERT INTO track (album_id, titre, artiste, annee, image, description) VALUES
    (4, 'White Rabbit', 'George Benson', 1972, '/assets/images/whiterabbit.jpg', 'Titre phare de l''album'),
    (4, 'California Dreamin''', 'George Benson', 1972, '/assets/images/whiterabbit.jpg', 'Reprise jazz du classique des Mamas & Papas'),
    (4, 'Theme from Summer of ''42', 'George Benson', 1972, '/assets/images/whiterabbit.jpg', 'Interprétation jazz de la musique du film'),
    (4, 'All the Things You Are', 'George Benson', 1972, '/assets/images/whiterabbit.jpg', 'Reprise du standard de jazz de Jerome Kern'),
    (4, 'Cast Your Fate to the Wind', 'George Benson', 1972, '/assets/images/whiterabbit.jpg', 'Version jazz du hit de Vince Guaraldi');