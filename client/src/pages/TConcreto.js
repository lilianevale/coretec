import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox } from "cdbreact";

import { MathJax, MathJaxContext } from "better-react-mathjax";
import form10 from './form10.png'
import form11 from './form11.png'
import form12 from './form12.png'
import form13 from './form13.png'
import form15 from './form15.png'
import form16 from './form16.png'
import form14 from './form14.png'
import form17 from './form17.png'
import form18 from './form18.png'
import form19 from './form19.png'
import form21 from './form20.png'


import MathJax1 from 'react-mathjax2'


import Figure from 'react-bootstrap/Figure'; 

function TConcreto() {
    const config = {
        loader: { load: ["input/asciimath"] }
      };
      
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcConcreto">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Perdas por fluência do concreto
        </h3>
        <p>Outro fenômeno reológico causado pela saída de água
             do sistema é a fluência ou deformação lenta. A fluência 
             é o acréscimo de deformação, no caso aqui da protensão 
             deformações de encurtamento, sob uma tensão externa 
             constante. Com isso o alongamento da armadura é reduzido, 
             acarretando em uma perda de protensão, conhecida como perda
              de protensão devido à fluência [xx].

A deformação por perda devido à fluência para um intervalo de tempo 
<MathJaxContext config={config}>
      <MathJax>\( t{"_{0}"} \) a t. 
</MathJax>
    </MathJaxContext>
t é dada pela equação (1) conforme item A.2.2.3 da ABNT NBR 6118 [1].

</p>
<p>  <MathJaxContext config={config}>
      <MathJax>\( \epsilon{"_{cc}"} \)- Deformação por fluência;
</MathJax>
    </MathJaxContext></p>
<p><MathJaxContext config={config}> <MathJax> \( \sigma{"_{CGP}"} \)- Tensão no centro de gravidade da armadura de protensão;
</MathJax>
</MathJaxContext></p>
<p><MathJaxContext config={config}>
      <MathJax>\(  E{"_{s,cp}"} \)- Módulo de elasticidade do concreto;
</MathJax>
    </MathJaxContext></p>
    <p><MathJaxContext config={config}>
      <MathJax>\(  \phi(t,t{"_{0}"}) \)-  Coeficiente de fluência.
</MathJax>
    </MathJaxContext></p>


    <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form10}
        /> 
        
      </Figure>
<Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form11}
        /> 
        
      </Figure>

      <p>  <MathJaxContext config={config}>
      <MathJax>\( \phi{"_{a}"} \)- Coeficiente de fluência rápida;
</MathJax>
    </MathJaxContext></p>
    <p>  <MathJaxContext config={config}>
      <MathJax>\( \phi{"_{f}"}\infty \)- Valor final do coeficiente de deformação lenta irreversível;
</MathJax>
    </MathJaxContext></p>
    <p>  <MathJaxContext config={config}>
      <MathJax>\( \phi{"_{d}"}\infty \)- Valor final do coeficiente de deformação lenta reversível = 0,4;
</MathJax>
    </MathJaxContext></p>
    <p>  <MathJaxContext config={config}>
      <MathJax>\( t{"_{fic}"} \)- Idade fictícia do concreto;
</MathJax>
    </MathJaxContext></p>
    <p>  <MathJaxContext config={config}>
      <MathJax>\( \beta{"_{f}"} \)-  Coeficiente de deformação lenta irreversível em função da idade fictícia;
</MathJax>
    </MathJaxContext></p>
    <p>  <MathJaxContext config={config}>
      <MathJax>\( \beta{"_{d}"} \)-  Coeficiente de deformação lenta reversível.
</MathJax>
    </MathJaxContext></p>

    <p>O coeficiente de fluência rápida é dado pelas equações (3) e (4):</p>
    <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form12}
        /> 
        
      </Figure>
<p>Para determinar o coeficiente do valor final da deformação
     lenta irreversível, é preciso antes obter o coeficiente 
     dependente da umidade relativa  <MathJaxContext config={config}>
      <MathJax>\( \phi{"_{1c}"} \) e o coeficiente 
     dependente da espessura fictícia da peça \( \phi{"_{2c}"} \) 
      O primeiro é obtido através de análise da Tabela A.1 da ABNT NBR 6118 [1] equação (6). Já o segundo é calculado pela equação (10):
</MathJax>
    </MathJaxContext></p> 


    <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form13}
        /> 
        
      </Figure>
<p>A partir disso têm-se que o valor final do coeficiente de deformação lenta irreversível para a classe conforme equações (11) e (12):</p>
      <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form14}
        /> 
        
      </Figure>
      <p>Conhecendo a idade fictícia tanto no instante inicial de análise, tanto quanto no instante final, é possível obter o coeficiente relativo à deformação lenta reversível pela equação (13):</p>
      <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form15}
        /> 
      </Figure>
      <p>Já o coeficiente de deformação lenta irreversível é expresso pela equação (14):</p>

      <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form16}
        /> 
        
      </Figure>
      <p>  <MathJaxContext config={config}>
      <MathJax> Substituindo os coeficientes encontrados na equação (1), 
        obtém-se a deformação por retração (\(\epsilon{"_{cs}"} \) )  no instante \(t{"_{0}"} \)  ​ à \(t\)  , sendo possível determinar a perda de tensão no concreto ao nível da armadura. 
</MathJax>
    </MathJaxContext></p>
    <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form17}
        /> 
        
      </Figure>
<p>Do mesmo modo, tem-se a redução da carga de protensão conforme equação (21) 
    e a carga final de protensão após a perda conforme (22):</p>
      <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form18}
        /> 
        
      </Figure>
      <p>  <MathJaxContext config={config}>
      <MathJax>\(-  \Delta P{"_{sp}"} \)- Perda da carga de protensão;
</MathJax>
    </MathJaxContext></p>
    <p>  <MathJaxContext config={config}>
      <MathJax>\(-  P{"_{sp,}"} \Delta \)- Carga de protensão após a perda.
</MathJax>
    </MathJaxContext></p>
    <p>Com isso, tem-se o percentual da perda de protensão conforme a equação (23):</p>
      <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form21}
        /> 
        
      </Figure>
</div>
    );
}export default TConcreto