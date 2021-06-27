import './App.css';
import Starships from './Starships'

function App() {
  return (
    <div className="bg-dark">
      <div className="App container py-4">
        <div className="row g-3">
          <h1>Starships</h1>
          <Starships />
        </div>
      </div>
    </div>
  );
}

export default App;
