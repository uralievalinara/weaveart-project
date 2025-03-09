import React, { useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArtPersonalPage.module.css';

const ArtPersonalPage = ({ works = [] }) => {
  const { workId } = useParams();

  // Поиск работы с useCallback
  const getWorkById = useCallback(() => {
    return works && works.length > 0 ? works.find(work => work.id === Number(workId)) : null;
  }, [works, workId]);

  const work = useMemo(() => getWorkById(), [getWorkById]);

  if (!work) {
    return <h2 className={styles.errorMessage}>Work not found</h2>;
  }

  return (
    <div className={styles.artPersonalPage}>
      <div className={styles.artHeaderContainer}>
        <img src={work.image} alt={work.topic} className={styles.artImageLarge} />

        <div className={styles.artistInfo}>
          {work.artistPhoto && (
            <img src={work.artistPhoto} alt={work.name} className={styles.artistPhoto} />
          )}
          <p className={styles.artistName}>{work.name}</p>
          <div className={styles.artPrice}>
            <p>{work.price} KGS</p>
          </div>
        </div>
      </div>

      <div className={styles.artOptions}>
        <div className={styles.optionsContainer}>
          <div className={styles.sizeSelector}>
            <label>Size:</label>
            <select>
              <option>30cm x 30cm</option>
              <option>50cm x 50cm</option>
            </select>
          </div>

          <div className={styles.quantitySelector}>
            <label>Pack quantity:</label>
            <input type="number" defaultValue={1} min={1} />
          </div>
        </div>

        <button className={styles.addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default React.memo(ArtPersonalPage);
