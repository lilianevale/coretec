import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function ConcProtenido() {
  
    return (
      <div>
        <h3>Concreto Protendido </h3>
        <p>Seja bem vindo à página de concreto protendido. Aqui você encontrará diversos simuladores de cálculos matemáticos para concreto protendido. Basta selecionar no droplist a calculadora desejada e preencher os campos com os valores apropriados. O resultado será exibido na tela. Selecione uma aba para visualizar:
</p>

<Dropdown>
      <Dropdown.Toggle  id="dropdown-basic"  basename="/">
        -------------------------------Selecione uma calculadora---------------------------------------
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item > <NavLink to="/Pretracao" style={{color: 'black', textDecoration: 'none'}}>Perdas por deformação imediata do concreto na pré-tração</NavLink></Dropdown.Item>
        <NavLink to="/CalcAncoragem">Perdas por deslizamento na ancoragem</NavLink><br></br>
        <Dropdown.Item href="/TMagnel">Verificação de tensões por enquações de Magnel</Dropdown.Item>
        <Dropdown.Item href="/CalcConcreto">Perdas por Retração do Concreto</Dropdown.Item>
        <Dropdown.Item href="/CalcTensaoElastica">Verificação de tensões elásticas na seção </Dropdown.Item>
        <Dropdown.Item href="/CalcTensaoElasticaVao">Verificação de tensões elásticas no vão </Dropdown.Item>
        <Dropdown.Item href="/CalcArmadura">Perdas por relaxação da armadura </Dropdown.Item>
        <Dropdown.Item href="/CalcFluenciaConc">Perdas por fluência do concreto </Dropdown.Item>




      </Dropdown.Menu>
    </Dropdown>
  
</div>  
    );
}export default ConcProtenido