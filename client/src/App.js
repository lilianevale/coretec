// Filename - App.js

// Importing modules
import React, { useState, useEffect } from "react";
//import "./App.css";
//import './styles.css';
//import './component/Header/header.css';
import Sidebar  from './component/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from './pages/sobre';
import Contato from './pages/Contato';
import Home from './pages/Home';
import About from './pages/about';
import Calculadora from './pages/Calculadora';
import Magnel from './pages/Magnel';
import ConcProtenido from "./pages/ConcProtenido";
import CalcTensaoElastica from "./pages/CalcTensaoElastica"; 
import CalcTensaoElasticaVao from "./pages/CalcTensaoElasticaVao"
import FigMagnel from './pages/FigMagnel.png'
import CalcConcreto from "./pages/CalcConcreto";

import Pretracao from './pages/Pretracao';
import TutoPretracao from './pages/TutoPretracao';
import TutoArmadura from './pages/TutoArmadura';
import TArmadura from './pages/TArmadura';
import TPerdaConcreto from './pages/TPerdaConcreto';
import TutoPerdaConcreto from './pages/TutoPerdaConcreto';





import logo from './logo.jpg';
import TMagnel from "./pages/TMagnel";
import TutotMagnel from "./pages/TutotMagnel";
import CalcPretracao from "./pages/CalcPretracao";
import CalcAncoragem from "./pages/CalcAncoragem";
import CalcArmadura from "./pages/CalcArmadura";
import CalcFluenciaConc from "./pages/CalcFluenciaConc";
import TAncoragem from "./pages/TAncoragem";
import TutoAncoragem from "./pages/TutoAncoragem";
import TutoConcreto from "./pages/TutoConcreto";
import TConcreto from "./pages/TConcreto";
import TTensaoElasticaVao from "./pages/TTensaoElasticaVao";
import TutoTensaoElasticaVao from "./pages/TutoTensaoElasticaVao";
import TutoTensaoElastica from "./pages/TutoTensaoElastica";
import TTensaoElastica from "./pages/TTensaoElastica";





import { BrowserRouter as Router } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBBtn,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
  CDBContainer,
} from 'cdbreact';



function App() {
  
    return (
      <div >
      {/* Header */}

      <div>
                
      <Navbar expand="lg" className="bg-body-tertiary" bg="#333" data-bs-theme="dark">  
      <Container fluid color="dark">
        <Navbar.Brand href="#" color="dark">          
                    <img src={logo} height='60px' width='160px'  /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Calculadora"> <CDBIcon className="me-2" icon="home" />Home</Nav.Link>
            <Nav.Link href="/Contato"> <CDBIcon className="me-2"  icon="fa-regular fa-envelope" />Contato</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
     
     
           {/* Header */}
     <BrowserRouter basename="/" >
     <Sidebar/>
     
     <Routes>
     
       <Route path="/contato" element={<Contato/>} />
       <Route path="/sobre" element={<Sobre/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/Calculadora" element={<Calculadora/>} />
       <Route path="/Magnel" element={<Magnel/>} />
       <Route path="/ConcProtenido" element={<ConcProtenido/>} />
       <Route path="/TMagnel" element={<TMagnel/>} />
       <Route path="/TutotMagnel" element={<TutotMagnel/>} />
       <Route path="/Pretracao" element={<Pretracao/>} />
       <Route path="/CalcPretracao" element={<CalcPretracao/>} />
       <Route path="/CalcAncoragem" element={<CalcAncoragem/>} />
       <Route path="/CalcConcreto" element={<CalcConcreto/>} />
       <Route path="/CalcTensaoElastica" element={<CalcTensaoElastica/>} />
       <Route path="/CalcTensaoElasticaVao" element={<CalcTensaoElasticaVao/>} />
       <Route path="/CalcFluenciaConc" element={<CalcFluenciaConc/>} />
       <Route path="/TutoPretracao" element={<TutoPretracao/>} />
       <Route path="/TAncoragem" element={<TAncoragem/>} />
       <Route path="/TutoAncoragem" element={<TutoAncoragem/>} />
       <Route path="/TutoConcreto" element={<TutoConcreto/>} />
       <Route path="/TConcreto" element={<TConcreto/>} />
       <Route path="/TutoArmadura" element={<TutoArmadura/>} />
       <Route path="/TArmadura" element={<TArmadura/>} />
       <Route path="/CalcArmadura" element={<CalcArmadura/>} />
       <Route path="/TPerdaConcreto" element={<TPerdaConcreto/>} />
       <Route path="/TutoPerdaConcreto" element={<TutoPerdaConcreto/>} />
       <Route path="/TutoTensaoElasticaVao" element={<TutoTensaoElasticaVao/>} />
       <Route path="/TTensaoElasticaVao" element={<TTensaoElasticaVao/>} />
       <Route path="/TTensaoElastica" element={<TTensaoElastica/>} />
       <Route path="/TutoTensaoElastica" element={<TutoTensaoElastica/>} />



























     
     </Routes>
     </BrowserRouter>
    
     </div>
     
     
    );
}

export default App;
