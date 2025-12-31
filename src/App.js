import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import Details from './components/Details';
import NotFound from "./components/NotFound";
import { Routes , Route } from 'react-router';


const App = () => {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Home' element={<Home/>} ></Route>
        <Route path='/movies/details/:movieId' element={<Details/>}></Route><Route/>

        <Route path='/*' element={<NotFound/>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
