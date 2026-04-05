// src/components/ui/SongCard/SongCard.jsx
import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import styles from './SongCard.module.scss'; 

const SongCard = ({ track }) => {
  const { playTrack, currentTrack, isPlaying } = useContext(PlayerContext);
  const isCurrent = currentTrack?.id === track.id;

  return (
    <div className={styles.card}>
      <img src={track.cover} alt={track.title} className={styles.image} />
      <h4>{track.title}</h4>
      <p>{track.artist}</p>
      <button 
        className={styles.playButton} 
        onClick={() => playTrack(track)}
      >
        {isCurrent && isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default SongCard;