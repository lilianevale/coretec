import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox } from "cdbreact";
import React, { useState, useEffect } from 'react';
//import { Form, Input } from "antd";
//import "antd/dist/antd.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import form1 from './form1.png'
import form2 from './form2.png'
import form3 from './form3.png'
import form4 from './form4.png'

import { NavLink } from 'react-router-dom';


import Figure from 'react-bootstrap/Figure'; 
import MathJax1 from 'react-mathjax2'


function Pretracao() {

  const config = {
    loader: { load: ["input/asciimath"] }
  };
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="Pretracao">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoPreTracao">Tutorial</CDBBtn>
        <CDBBtn color="primary" > <NavLink to="/CalcPretracao" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>Calculadora </NavLink></CDBBtn>
      </CDBBtnGrp>
    </CDBContainer> 
    
    
        <p>Nas estruturas pré-tracionadas as perdas por deformação imediata do concreto ocorrem quando é efetuado o corte dos cabos. O encurtamento produzido pela inserção da força de protensão é responsável por reduzir a fibra do concreto e o cabo igualmente (
(εsp=εcp). Tal fato ocorre devido a perfeita aderência entre materiais e considerando as hipótese de linearidade no comportamento dos materiais as tensões a perda de tensão no aço é dada conforme equação (1):</p>
<Figure> 
        <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form1}
        /> 
      
      </Figure>


<p>  Δσsp - Perda da tensão de protensão;</p>
<p><MathJaxContext config={config}>
      <MathJax>{"`P_{sp}`"},0- Carga característica inicial de protensão;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>{"`A_{c}`"}- Área bruta da seção de concreto;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>{"`I_{c}`"} - Inércia da seção bruta de concreto;
</MathJax>
    </MathJaxContext></p>
<p> <MathJaxContext config={config}>
      <MathJax>{"`e_{p}`"} - Excentricidade de protensão;
</MathJax>
    </MathJaxContext></p>
<p> <MathJaxContext config={config}>
      <MathJax>{"`Mg_{,pp}`"} - Momento fletor característico devido ao peso próprio;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>{"`E_{sp}`"} - Módulo de elasticidade do aço protendido;
      </MathJax></MathJaxContext></p>
      <p><MathJaxContext config={config}>
      <MathJax>{"`E_{cp}`"} - Módulo de elasticidade do concreto;
      </MathJax></MathJaxContext></p>

      <p>   <MathJaxContext config={config}> 
      <MathJax> Conhecendo a tensão inicial de protensão \( (\sigma{"_{sp,0}=P_{sp,0}/A_{sp}"}) \) é possível obter a tensão de protensão após a perda \( (\sigma{"_{sp,}"} \Delta) \): </MathJax>
    </MathJaxContext>
</p>
<Figure> 
        <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form2}
        /> 
      
      </Figure>
      <p>Do mesmo modo, tem-se a redução da carga de protensão conforme equação (4) e a carga final de protensão após a perda conforme equação (5):</p>
      <Figure> 
        <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form3}
        /> 
      
      </Figure>
      <p><MathJaxContext config={config}>
      <MathJax>-\( \Delta P{"_{sp}"} \) - Perda da carga de protensão;
      </MathJax></MathJaxContext></p>
      <p><MathJaxContext config={config}>
      <MathJax>-\( P{"_{sp,}"} \Delta \) -  Carga de protensão após a perda;
      </MathJax></MathJaxContext></p>
      <p>
      <MathJaxContext config={config}>
      <MathJax>-\( A{"_{sp}"} \) - Área de aço longitudinal.
      </MathJax></MathJaxContext></p>
      <p>Com isso, tem-se o percentual da perda de protensão conforme a equação (6):

</p>
<Figure> 
        <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form4}
        /> 
      
      </Figure>
</div>
    );
}export default Pretracao;