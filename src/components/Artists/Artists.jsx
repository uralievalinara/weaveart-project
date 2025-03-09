import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Artists.module.css'; 

export default function Artists({ ArtistsPage = [] }) {
  const navigate = useNavigate();

  const memoizedArtists = useMemo(
    () =>
      ArtistsPage.map((artist) => (
        <div
          key={artist.id}
          className={styles.artistsCard} // Используем styles вместо "className"
          onClick={() => navigate(`/artistpersonalpage/${artist.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.artistsImageContainer}>
            <img src={artist.photo} alt={artist.name} className={styles.artistsPhoto} />
          </div>
          <p className={styles.artistsName}>{artist.name}</p>
        </div>
      )),
    [ArtistsPage, navigate]
  );

  return (
    <div className={styles.artistsSection}>
      <h2 className={styles.artistsSectionTitle}>Our Artists</h2>
      <div className={styles.artistsGrid}>{memoizedArtists}</div>
    </div>
  );
}

Artists.propTypes = {
  ArtistsPage: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
