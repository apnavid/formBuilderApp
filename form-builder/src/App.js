import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar';
import Listing from './components/Listing';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/listing" element={<Listing />} /> */}
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
