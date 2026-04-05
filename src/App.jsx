// src/App.jsx
import { PlayerProvider } from './context/PlayerContext';
import Home from './pages/Home';

function App() {
  return (
    <PlayerProvider>
      <div className="App">
        <Home />
        {/* You can add your Persistent Player Bar here later! */}
      </div>
    </PlayerProvider>
  );
}

export default App;