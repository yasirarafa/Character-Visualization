import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from './Components/CharacterList/CharacterList';
import CharacterDetails from './Components/CharacterDetails/CharacterDetails'


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<CharacterList />}></Route>
        <Route path="/character/:id" element={<CharacterDetails />} /></Routes>
    </Router>
  );
}

export default App;


