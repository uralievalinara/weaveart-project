import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistsWorksSection.module.css';

const ArtistsWorksSection = ({ artistsWorks = [] }) => {
  // Оптимизированный рендер списка работ
  const worksList = useMemo(() => {
    return artistsWorks.map((work) => (
      <div key={work.id} className={styles.workCard}>
        <img src={work.image} alt={`${work.name} - ${work.topic}`} className={styles.workImage} />
        <div className={styles.info}>
          <p className={styles.workTitle}>{work.topic}</p>
          <p className={styles.workPrice}><strong>Price:</strong> {work.price}</p>
        </div>
      </div>
    ));
  }, [artistsWorks]);

  return (
    <div className={styles.artistsWorkSection}>
      <h2 className={styles.sectionTitle}>Our artists work:</h2>
      <div className={styles.worksGrid}>{worksList}</div>
      <button className={styles.viewAllButton}>View all</button>
    </div>
  );
};

// Пропсы для валидации
ArtistsWorksSection.propTypes = {
  artistsWorks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArtistsWorksSection;
