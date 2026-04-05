import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import styles from './MusicPlayer.module.scss';

const MusicPlayer = () => {
  const { currentTrack, isPlaying, playTrack } = useContext(PlayerContext);

  if (!currentTrack) return null; // Don't show player if nothing is playing

  return (
    <div className={styles.playerBar}>
      <div className={styles.trackInfo}>
        <img src={currentTrack.cover} alt="" />
        <div>
          <h5>{currentTrack.title}</h5>
          <p>{currentTrack.artist}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={() => playTrack(currentTrack)}>
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      <div className={styles.volume}>
        {/* Placeholder for volume slider */}
        <span>🔊</span>
      </div>
    </div>
  );
};

export default MusicPlayer;