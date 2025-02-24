import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBContainer } from 'cdbreact';

function Calculadora() {
  
  
  return (
    <div>
    

<p>Olá seja bem vindo a plataforma Coretec Tools. Confira os nossos simuladores para acelerar sua curva de aprendizagem. Você também pode ver as nossas <a href="https://github.com/wmpjrufg/coretectools/blob/main/version.md">versões</a> já implementadas.</p>
<p>
A ferramenta Coretec Tools tem como objetivo servir de apoio para estudantes e profissionais da área. As informações, cálculos e modelos apresentados são baseados em dados teóricos e normas técnicas vigentes. No entanto, a precisão e a aplicabilidade das informações fornecidas podem variar de acordo com o contexto específico de cada projeto ou situação. </p>

<p> A plataforma não se responsabiliza por eventuais erros, omissões ou interpretações equivocadas das informações aqui apresentadas. É de responsabilidade do usuário verificar e validar todos os dados. </p>

<p>O uso desta ferramenta não substitui o julgamento profissional, a experiência prática ou o acompanhamento técnico necessário para a execução de projetos. O usuário assume total responsabilidade pelo uso das informações fornecidas e pelos resultados obtidos a partir desta ferramenta.
</p>

      
      <p>Aqui você encontrará diversos simuladores de cálculos matemáticos para engenharia civil e sua 5 grandes áreas.</p>

<p> - Construção Civil</p>
<p> - Estruturas</p>
<p> - Geotecnia</p>
<p> - Hidráulica</p>
<p> - Transportes</p> 
<p>Para usar as nossas calculadoras, basta clicar no menu ao lado e escolher a área desejada. Em seguida, escolha a calculadora que deseja usar e preencha os campos com os valores desejados. O resultado será exibido na tela.</p>

<p> Caso tenha alguma dúvida ou sugestão, entre em contato conosco através do nosso 
     <a href="mailto:someone@example.com?Subject=ola" target="_top"> email</a></p>

     
     
  </div>

  ); 
}export default Calculadora