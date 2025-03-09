import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ArtistSection.module.css'; // Проверяем, что импорт правильный

export default function ArtistSection({ artists = [] }) {
  const navigate = useNavigate(); 

  return (
    <div className={styles.artistSection}> {/* Проверяем, что имя класса совпадает */}
      <h2 className={styles.sectionTitle}>Some of our artists:</h2>
      <div className={styles.artistGrid}>
        {artists.map((artist) => (
          <div
            key={artist.id}
            className={styles.artistCard}
            onClick={() => navigate(`/artist/${artist.id}`)}
          >
            <div className={styles.imageContainer}>
              <img src={artist.photo} alt={artist.name} className={styles.artistPhoto} />
            </div>
            <p className={styles.artistName}>{artist.name}</p>
          </div>
        ))}
      </div>
      <button className={styles.viewAllButton} onClick={() => navigate('/artist')}>
        View All
      </button>
    </div>
  );
}

ArtistSection.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
