import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/์Navbar';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
