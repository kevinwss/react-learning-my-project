import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Root component <Button>Log in</Button> */}

        {/* Route Linke */}
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/citylist">城市选择</Link></li>
        </ul>
        {/* Route rules */}
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/citylist" element={<CityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
