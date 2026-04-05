// src/context/PlayerContext.jsx
import React, { createContext, useState, useRef } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); 
    const audioRef = useRef(new Audio());

    const playTrack = (track) => {
        // ... your existing playTrack logic remains the same ...
    };

    return (
        <PlayerContext.Provider value={{ 
            currentTrack, 
            isPlaying, 
            playTrack, 
            searchTerm,    
            setSearchTerm   
        }}>
            {children}
        </PlayerContext.Provider>
    );
};