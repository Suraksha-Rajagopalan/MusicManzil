import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import styles from './SearchBar.module.scss'; 

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(PlayerContext);

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search for tracks or artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
        </div>
    );
};

export default SearchBar;