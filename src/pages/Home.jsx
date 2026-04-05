import React, { useEffect, useState, useContext } from 'react'; 
import { getPopularTracks } from '../services/musicService';
import SongCard from '../components/ui/SongCard'; 
import SearchBar from '../features/search/SearchBar';
import { PlayerContext } from '../context/PlayerContext'; 

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const { searchTerm } = useContext(PlayerContext);

  useEffect(() => {
    getPopularTracks().then(setTracks);
  }, []);

  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ 
        padding: '40px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        minHeight: '100vh' 
    }}>
        <SearchBar />
        
        <h1 style={{ 
            color: '#a855f7', 
            fontSize: '2rem', 
            marginBottom: '30px',
            fontWeight: '700' 
        }}>
            {searchTerm ? `Results for "${searchTerm}"` : 'Top Tracks'}
        </h1>
        
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '24px' 
        }}>
            {filteredTracks.map(track => (
                <SongCard key={track.id} track={track} />
            ))}
        </div>
        
        {filteredTracks.length === 0 && (
            <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '50px' }}>
                No tracks found matching "{searchTerm}"
            </p>
        )}
    </div>
  ); 
};

export default Home;