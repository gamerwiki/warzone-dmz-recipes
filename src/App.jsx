import { Routes, Route, useParams } from 'react-router-dom';
import Header from '@components/Header';
import ListMaps from '@components/ListMaps';
import ListRecipes from '@components/ListRecipes';
import DisplayRecipe from '@components/DisplayRecipe';
import Settings from '@components/Settings';
import Footer from '@components/Footer'

import './App.css'

/* eslint-disable react/jsx-no-target-blank */

function App() {
  const params = useParams();
  console.log(params)
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<ListMaps/>} />
        <Route path="/map/:mapId" element={<ListRecipes/>} />
        <Route path="/map/:mapId/recipes/:id" element={<DisplayRecipe/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App
