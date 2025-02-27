
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Sobre from './pages/sobre';
import Contato from './pages/Contato';


function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Home/> } />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="/contato" element={ <Contato/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;

//        <Route path="/" element={ <Home/> } />
