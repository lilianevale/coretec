import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox } from "cdbreact";
import form5 from './form5.png'
import form6 from './form6.png'
import form7 from './form7.png'
import form8 from './form8.png'



import Figure from 'react-bootstrap/Figure'; 
import { MathJax, MathJaxContext } from "better-react-mathjax";


function TAncoragem() {
    const config = {
        loader: { load: ["input/asciimath"] }
      };
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TAncoragem">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoAncoragem">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcAncoragem">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    <br></br>
        <p>No processo de pré-tração ao realizar a fixação da armadura no sistema de ancoragem é comum um pequeno deslizamento relativo entre as cunhas e armaduras. Esse processo de acomodação das armaduras nas cunhas gera uma diminuição da tensão de protensão. Para prever esta perda adota-se informações do fabricante a respeito do deslizamento relativo na ancoragem.
</p>
<p>
Para prever esta perda é necessário obter a redução da deformação nas armaduras causada pelo deslizamento. A equação (1) fornece o pré-alongamento do cabo e a equação (2) a redução na deformação da armadura:</p>
<Figure> 
        <Figure.Image 
          width={400} 
          height={400} 
          alt="200x200"
src={form5}
        /> 
        
      </Figure>

      <p>  <MathJaxContext config={config}>
      <MathJax>\( \Delta L{"_{sp}"} \)- Pré-alongamento do cabo;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>{"`L_{0}`"}- Comprimento inicial da armadura de protensão;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>\( \sigma {"_{sp,0}"} \)- Tensão inicial na armadura de protensão;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>{"`E_{sp}`"} -  Módulo de elasticidade do aço protendido;
</MathJax>
    </MathJaxContext></p>
<p> <MathJaxContext config={config}>
      <MathJax>\( \Delta \epsilon {"_{sp}"} \) - Redução na deformação da armadura;
</MathJax>
    </MathJaxContext></p>
<p> <MathJaxContext config={config}>
      <MathJax>\( \Delta{"_{anc}"} \) - Valor do deslizamento dado pelo fabricante do equipamento (4 a 6 mm, por exemplo);
</MathJax>
    </MathJaxContext></p>
<p>Conhecendo a redução da deformação na armadura de protensão <MathJaxContext config={config}>
      <MathJax>\( (\Delta \epsilon{"_{sp}"}) \) - Valor do deslizamento dado pelo fabricante do equipamento (4 a 6 mm, por exemplo);
</MathJax> é possível obter a tensão de protensão \( (\sigma{"_{sp}"}\Delta) \) após a perda, conforme equação (4):
    </MathJaxContext>
</p>

<Figure> 
        <Figure.Image 
          width={400} 
          height={400} 
          alt="200x200"
src={form6}
        /> 
        
      </Figure>
      <p>Do mesmo modo, tem-se a redução da carga de protensão conforme equação (5) e a carga final de protensão após a perda conforme (6):</p>
      <Figure> 
        <Figure.Image 
          width={400} 
          height={400} 
          alt="200x200"
src={form7}
        /> 
        
      </Figure>

      <p> <MathJaxContext config={config}>
      <MathJax>\( \Delta P{"_{sp}"} \) - Perda da carga de protensão;
</MathJax>
    </MathJaxContext></p>
    <p> <MathJaxContext config={config}>
      <MathJax>\(P{"_{sp,}"}\Delta \) - Carga de protensão após a perda;
</MathJax>
    </MathJaxContext></p>
    <p> <MathJaxContext config={config}>
      <MathJax>\(A{"_{sp,}"} \) ​ - Área de aço longitudinal.
</MathJax>
    </MathJaxContext></p>
    <p>Com isso, tem-se o percentual da perda de protensão conforme a equação (7):</p>
    <Figure> 
        <Figure.Image 
          width={400} 
          height={400} 
          alt="200x200"
src={form8}
        /> 
        
      </Figure>
</div>
    );
}export default TAncoragem