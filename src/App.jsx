import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
