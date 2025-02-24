import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Figure from 'react-bootstrap/Figure'; 
import form25 from './form25.png';
import form26 from './form26.png';
import form27 from './form27.png';
import form28 from './form28.png';
import form29 from './form29.png';
import form30 from './form30.png';





function TArmadura() {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
    const config = {
        loader: { load: ["input/asciimath"] }
      };
      const data2 = () => {
        return {
          columns: [
            {
              label:'-',
              field: 'linha',
              width: 50,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': '-',
              },
            },
            {
                label: <MathJaxContext config={config}>
            <MathJax>  \(( \sigma {"_{sp,0}"} )\)</MathJax>
                   </MathJaxContext>,
                field: 'sigma',
                width: 50,
              },
            
            {
              label: 'Cordoalhas ',
              field: 'cordoalhas',
              width: 50,
            },
            {
                label: '',
                field: 'nada1',
                width: 50,
              },

            {
              label: 'Fios',
              field: 'fios',
              width: 50,
            },
            {
                label: '',
                field: 'nada2',
                width: 50,
              },
            {
                label: 'Barras ',
                field: 'barras',
                width: 50,
              },
              ],

            rows: [
              {
                    linha: '1',
                    sigma:'-',
                    cordoalhas: 'RN',
                    nada1:'RB',
                    fios: 'RN',
                    nada2:'RB',
                    barras:'',
                    clickEvent: () => testClickEvent(1),
                  },
            
                  {
                    linha: '2',
                    sigma:<MathJaxContext config={config}>
                    <MathJax>  \(( 0,5f {"_{ptk}"} )\)</MathJax>,
                           </MathJaxContext>,
                    cordoalhas: '0',
                    nada1:'0',
                    fios: '0',
                    nada2:'0',
                    barras:'0',
                    clickEvent: () => testClickEvent(1),
                  },
            
                  {
                    linha: '3',
                    sigma:<MathJaxContext config={config}>
                    <MathJax>  \(( 0,6f {"_{ptk}"} )\)</MathJax>,
                           </MathJaxContext>,
                    cordoalhas: '3,5',
                    nada1:'1,3',
                    fios: '2,5',
                    nada2:'1,0',
                    barras:'1,5',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '4',
                    sigma:<MathJaxContext config={config}>
                    <MathJax>  \(( 0,7f {"_{ptk}"} )\)</MathJax>,
                           </MathJaxContext>,
                    cordoalhas: '7,0',
                    nada1:'2,5',
                    fios: '5,0',
                    nada2:'2,0',
                    barras:'4,0',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '5',
                    sigma:<MathJaxContext config={config}>
                    <MathJax>  \(( 0,8f {"_{ptk}"} )\)</MathJax>,
                           </MathJaxContext>,
                    cordoalhas: '12,0',
                    nada1:'3,5',
                    fios: '8,5',
                    nada2:'3,0',
                    barras:'7,0',
                    clickEvent: () => testClickEvent(1),
                  },
            
              ],
          };};
      
      
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TArmadura">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoArmadura">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcArmadura">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <p><MathJaxContext config={config}>
            <MathJax>   A relaxação é o processo de redução ao longo do
                 tempo da tensão sob deformação constante. A relaxação 
                 de fios e cordoalhas é dada pelos itens 
                 8.4.8 e 9.6.3.4.5 da NBR 6118. Esta mesma normativa
                  apresenta a perda percentual por relaxação do aço após
                   1000h em uma temperatura de 20°C \(( \psi {"_{1000}"} )\)
            </MathJax>
            </MathJaxContext></p>
            <CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data2()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>
    <p>Onde:</p>
    <p>
    - RN é a relaxação normal;</p>
    <p>
    - RB é a relaxação baixa;</p>
    <p><MathJaxContext config={config}>
                    <MathJax>  \(- f {"_{ptk}"}\) é a tensão última característica do aço. </MathJax>,
                           </MathJaxContext> 
</p>
<p>Para tempos infinitos a intensidade da relaxação do aço se dá
     pela equação (1):</p>
     <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form25}
        /> 
        
      </Figure>
      <p>Em casos onde a temperatura difere de 20°C é necessário 
        realizar uma correção no tempo decorrido para cálculo da perda
         conforme equação (2):</p>
         <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form26}
        /> 
        
      </Figure>
      <p><MathJaxContext config={config}>
                    <MathJax>  \(- \Delta t {"_{cor}"}\): Tempo decorrido corrigido para temperaturas diferentes de 20°C em dias; </MathJax>,
                           </MathJaxContext> 
</p>
<p><MathJaxContext config={config}>
                    <MathJax>  \(- T {"_{proj}"}\): Temperatura de projeto em °C; </MathJax>,
                           </MathJaxContext> 
</p>
<p><MathJaxContext config={config}>
                    <MathJax>  \(- \Delta t \): Tempo de estiramento do cabo em dias. </MathJax>,
                           </MathJaxContext> 
</p>
<p><MathJaxContext config={config}>
                    <MathJax>  Já em tempos diferentes de 1000h a intensidade da relaxação da armadura \(\psi (t, t{"_{0}"})\) pode ser calculada pela equação (3): </MathJax>,
                           </MathJaxContext> 
</p>
<Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form27}
        /> 
        
      </Figure>
      <p><MathJaxContext config={config}>
                    <MathJax>  Conhecendo a intensidade da relaxação da armadura é possível obter a tensão de protensão \((\sigma {"_{sp}"}\Delta)\) após a perda, conforme equação (5):

 </MathJax>,
                           </MathJaxContext> 
</p>

<Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form28}
        /> 
        
      </Figure>
      <p>Do mesmo modo, tem-se a redução da carga de protensão conforme equação (6) e a carga final de protensão após a perda conforme equação (7):</p>
      <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form29}
        /> 
        
      </Figure>
      <p><MathJaxContext config={config}>
                    <MathJax>  \(- \Delta P {"_{sp}"}\): erda da carga de protensão; </MathJax>,
                           </MathJaxContext> 
</p>
<p><MathJaxContext config={config}>
                    <MathJax>  \(- P {"_{sp,}"}\Delta \): Carga de protensão após a perda; </MathJax>,
                           </MathJaxContext> 
</p>
<p><MathJaxContext config={config}>
                    <MathJax>  \(- A {"_{sp,}"} \): Área de aço longitudinal. </MathJax>,
                           </MathJaxContext> 
</p>
<p>Com isso, tem-se o percentual da perda de protensão conforme a equação (8):</p>
<Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form30}
        /> 
        
      </Figure>

      
</div>
    );
}export default TArmadura