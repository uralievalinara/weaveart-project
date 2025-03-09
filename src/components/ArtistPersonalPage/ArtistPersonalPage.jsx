import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ArtistPersonalPage.module.css'; 

export default function ArtistPersonalPage({ ArtistInfoPage, works }) {
  const { artistId } = useParams(); 
  const navigate = useNavigate(); 

  const artist = ArtistInfoPage?.find((a) => a.id === parseInt(artistId, 10));
  const artistsWorks = works?.filter((work) => work.artistId === parseInt(artistId, 10));

  if (!artist) {
    return <h2>Artist not found</h2>;
  }

  return (
    <div className={styles.artistPersonalPage}>
      <header className={styles.artistHeader}>
        <h1>{artist.name}</h1>
        <p>{artist.bio}</p>
      </header>
      <div className={styles.artistPhotos}>
        <img src={artist.photo} alt={artist.name} className={styles.artistPhoto1} />
        <img src={artist.secondaryPhoto} alt={artist.name} className={styles.artistPhoto2} />
      </div>

      <section className={styles.artistWorks}>
        <h2>Artist's works:</h2>
        <div className={styles.worksGrid}>
          {artistsWorks.map((work) => (
            <div
              key={work.id}
              className={styles.workCard}
              onClick={() => navigate(`/artpersonalpage/${work.id}`)} // Заменили history.push
              style={{ cursor: 'pointer' }}
            >
              <img src={work.image} alt={work.topic} className={styles.workImage} />
              <p className={styles.workTitle}>{work.topic}</p>
              <p className={styles.workPrice}>Price: {work.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className={styles.subscribe}>
        <h2>Subscribe to our emails</h2>
        <p>Stay informed about new works and updates from this artist.</p>
        <form
          className={styles.subscribeForm}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
          }}
        >
          <input
            type="email"
            className={styles.subscribeInput}
            placeholder="Enter your email"
            required
          />
        </form>
      </section>
    </div>
  );
}

// Валидация пропсов
ArtistPersonalPage.propTypes = {
  ArtistInfoPage: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      secondaryPhoto: PropTypes.string.isRequired,
    })
  ).isRequired,
  works: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      artistId: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
