import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:characterId" element={<CharacterDetail />} /> {/* Character detail route */}
      </Routes>
    </Router>
  );
}

export default App;

