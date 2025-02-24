import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import form34 from './form34.png';
import form35 from './form35.png';
import form36 from './form36.png';
import form37 from './form37.png';


import Figure from 'react-bootstrap/Figure'; 



function TutoPerdaConcreto() {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
      const config = {
        loader: { load: ["input/asciimath"] }
      };
      function testClickEvent(param) {
        alert('Row Click Event');
      }
      const data2 = () => {
        return {
          columns: [
            {
              label: ' 1 dia',
              field: 'umdia',
              width: 50,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': '-',
              },
            },
            {
              label: '2 dias ',
              field: 'doisdia',
              width: 50,
            },
            {
              label: '4 dias',
              field: 'quatrodia',
              width: 50,
            },
        
            {
                label: '7 dias ',
                field: 'setedia',
                width: 50,
              },
              {
                label: '14 dias ',
                field: 'quatorzedia',
                width: 50,
              },
              {
                label: '21 dias ',
                field: 'vinteumdia',
                width: 50,
              },
              {
                label: '28 dias ',
                field: 'vinteeoitodia',
                width: 50,
              },],

            rows: [
              {
                umdia : '21.20',
                doisdia: '28.90',
                quatrodia: '36.00',
                setedia: '40.95',
                quatorzedia: '46.00',
                vinteumdia: '48.50',
                vinteeoitodia: '50.00',
                clickEvent: () => testClickEvent(1),
              },

                 
              ],
          };};
      
      const data = () => {
        return {
          columns: [
            {
              label: '-',
              field: 'linha',
              width: 50,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': '-',
              },
            },
            {
              label: 'Parâmetros',
              field: 'parametro',
              width: 200,
            },
            {
              label: 'Unidades',
              field: 'unidades',
              width: 50,
            },],
            rows: [
              {
                linha: '1',
                parametro: 'Carga inicial de protensão	',
                unidades: 'kN',
                clickEvent: () => testClickEvent(1),
              },
              
              {
                  linha: '2',
                  parametro: 'Tensão inicial de protensão	',
                  unidades: 'MPa',
              
                },
                {
                    linha: '3',
                    parametro: 'Area total de armadura protendida	',
                    unidades: 'cm²',
                    clickEvent: () => testClickEvent(1),
                  },
                {
                  linha: '4',
                  parametro: 'Area bruta da seção',
                  unidades: 'cm²',
              
                },
                {
                    linha: '5',
                    parametro: 'Parte do perímetro externo da seção em contato com ar',
                    unidades: 'cm',
                
                  },
                  {
                    linha: '6',
                    parametro: 'Abatimento ou slump test do concreto',
                    unidades: 'cm',
                
                  },
                  {
                    linha: '7',
                    parametro: 'Umidade do ambiente no intervalo de tempo de análise',
                    unidades: '%',
                
                  },
                  {
                    linha: '8',
                    parametro: 'Tipo de endurecimento do cimento',
                    unidades: '-',
                
                  },
                  {
                    linha: '9',
                    parametro: 'Tempo inicial de análise sem correção da temperatura',
                    unidades: 'dias',
                
                  },
                  {
                    linha: '10',
                    parametro: 'Tempo final de análise sem correção da temperatura',
                    unidades: 'dias',
                
                  },
                  {
                    linha: '11',
                    parametro: 'Temperatura de projeto',
                    unidades: '°C',
                
                  },
                  {
                    linha: '12',
                    parametro: 'Módulo de Young do aço protendido',
                    unidades: 'MPa',
                
                  },
                  
                  

        
              ],
          };};


      const data6 = () => {
        return {
          columns: [
            {
              label: '-',
              field: 'linha',
              width: 50,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': '-',
              },
            },
            {
              label: 'Parâmetros',
              field: 'parametro',
              width: 200,
            },
            {
                label: 'Valores',
                field: 'valores',
                width: 50,
              },
            {
              label: 'Unidades',
              field: 'unidades',
              width: 50,
            },],
            rows: [
              {
                linha: '1',
                parametro: 'Carga inicial de protensão	',
                valores:'600.00',
                unidades: 'kN',
                clickEvent: () => testClickEvent(1),
              },
              
              {
                  linha: '2',
                  parametro: 'Tensão inicial de protensão	',
                  valores:'1515.15',
                  unidades: 'MPa',
                  clickEvent: () => testClickEvent(1),

                },
                {
                    linha: '3',
                    parametro: 'Area total de armadura protendida	',
                    unidades: 'cm²',
                    valores:'3.96',
                    clickEvent: () => testClickEvent(1),
                  },
                {
                  linha: '4',
                  parametro: 'Area bruta da seção',
                  valores:'1500.00',
                  unidades: 'cm²',
                  clickEvent: () => testClickEvent(1),

                },
                {
                    linha: '5',
                    parametro: 'Parte do perímetro externo da seção em contato com ar',
                    valores:'190.00',
                    unidades: 'cm',
                    clickEvent: () => testClickEvent(1),

                  },
                  {
                    linha: '6',
                    parametro: 'Abatimento ou slump test do concreto',
                    valores:'12.00',
                    unidades: 'cm',
                    clickEvent: () => testClickEvent(1),

                  },
                  {
                    linha: '7',
                    parametro: 'Umidade do ambiente no intervalo de tempo de análise',
                    valores:'50.00',
                    unidades: '%',
                    clickEvent: () => testClickEvent(1),

                  },

                  {
                    linha: '8',
                    parametro: 'Tipo de endurecimento do cimento',
                    unidades: '-',
                    clickEvent: () => testClickEvent(1),

                  },
                  {
                    linha: '9',
                    parametro: 'Tempo inicial de análise sem correção da temperatura',
                    valores:'2',
                    unidades: 'dias',
                    clickEvent: () => testClickEvent(1),

                  },
                  {
                    linha: '10',
                    parametro: 'Tempo final de análise sem correção da temperatura',
                    valores:'100000',
                    unidades: 'dias',
                    clickEvent: () => testClickEvent(1),

                  },
                  {
                    linha: '11',
                    parametro: 'Temperatura de projeto',
                    valores:'30',
                    unidades: '°C',
                    clickEvent: () => testClickEvent(1),

                  },
                  {
                    linha: '12',
                    parametro: 'Módulo de Young do aço protendido',
                    valores:'210000',
                    unidades: 'MPa',
                    clickEvent: () => testClickEvent(1),

                  },
                  
                  

        
              ],
          };};
          const data5= () => {
            return {
              columns: [
                {
                  label: '-',
                  field: 'linha',
                  width: 50,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': '-',
                  },
                },
                {
                  label: 'Parâmetros',
                  field: 'parametro',
                  width: 200,
                },
                {
                  label: 'Unidades',
                  field: 'unidades',
                  width: 50,
                },],
                rows: [
                  {
                    linha: '1',
                    parametro: 'Perda percentual de protensão',
                    unidades: '%',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '2',
                    parametro: 'Carga final de protensão após a perda',
                    unidades: 'kN',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '3',
                    parametro: 'Tensão final de protensão após a perda',
                    unidades: 'MPa',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '3',
                    parametro: 'Coeficiente de fluência',
                    unidades: '-',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '5',
                    parametro:  <MathJaxContext config={config}>
                    <MathJax>  \( \epsilon{"_{CS}"}\)</MathJax>                </MathJaxContext>,
                    unidades: '-',
                    clickEvent: () => testClickEvent(1),
                  },
                ],
            };};

            const data7= () => {
            return {
              columns: [
                {
                  label: '-',
                  field: 'linha',
                  width: 50,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': '-',
                  },
                },
                {
                  label: 'Parâmetros',
                  field: 'parametro',
                  width: 200,
                },
                {
                  label: 'Unidades',
                  field: 'unidades',
                  width: 50,
                },],
                rows: [
                  {
                    linha: '1',
                    parametro: 'Perda percentual de protensão',
                    unidades: '%',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '2',
                    parametro: 'Carga final de protensão após a perda',
                    unidades: 'kN',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '3',
                    parametro: 'Tensão final de protensão após a perda',
                    unidades: 'MPa',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '3',
                    parametro: 'Coeficiente de fluência',
                    unidades: '-',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '5',
                    parametro:  <MathJaxContext config={config}>
                    <MathJax>  \( \epsilon{"_{CS}"}\)</MathJax>                </MathJaxContext>,
                    unidades: '-',
                    clickEvent: () => testClickEvent(1),
                  },
                ],
            };};

            const data1 = () => {
                return {
                  columns: [
                    {
                      label: ' 1 dia',
                      field: 'umdia',
                      width: 50,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': '-',
                      },
                    },
                    {
                      label: '2 dias ',
                      field: 'doisdia',
                      width: 50,
                    },
                    {
                      label: '4 dias',
                      field: 'quatrodia',
                      width: 50,
                    },
                
                    {
                        label: '7 dias ',
                        field: 'setedia',
                        width: 50,
                      },
                      {
                        label: '14 dias ',
                        field: 'quatorzedia',
                        width: 50,
                      },
                      {
                        label: '21 dias ',
                        field: 'vinteumdia',
                        width: 50,
                      },
                      {
                        label: '28 dias ',
                        field: 'vinteeoitodia',
                        width: 50,
                      },],
        
                    rows: [
                      {
                        umdia : '21.20',
                        doisdia: '28.90',
                        quatrodia: '36.00',
                        setedia: '40.95',
                        quatorzedia: '46.00',
                        vinteumdia: '48.50',
                        vinteeoitodia: '50.00',
                        clickEvent: () => testClickEvent(1),
                      },
        
                         
                      ],
                  };};
              
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TPerdaConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoPerdaConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcPerdaConcreto">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Tutorial</h3>
       
<p>A retração do concreto é uma deformação de encurtamento associada à perda de umidade para o meio ambiente ou secagem dos poros capilares pela hidratação do cimento ainda não hidratado. Este fenômeno depende de alguns fatores, tais como: umidade relativa do ambiente, consistência do concreto e espessura fictícia da peça.

</p><p>A calculadora "Perdas retração concreto" tem como objetivo permitir que o usuário determine a perda de protensão devido à retração do concreto. Para utilizar a calculadora, basta preencher os campos com os valores desejados e clicar no botão "Calcular".

</p><p>Os valores esperados na entrada são:</p>
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

    <p>Os valores de saída são:</p>
    <CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>
<h3>Exemplo 1</h3>
<MathJaxContext config={config}>
    <MathJax>  Você é projetista de peças protendidas em uma indústria 
        e precisa verificar o projeto de uma viga. Sabe-se que as cargas
         de cálculo são: (a) Força de protensão inicial: 600 kN, (b) 
         Carga de peso próprio 3,75 kN/m, (c) Carga variável de 15 kN/m 
         \( (\Psi{"_{1}"})\)=0,60 Combinação frequente e  \( (\Psi{"_{1}"})\)​=0,40 Combinação quase 
         permanente) e (d) Carga permanente externa de 3 kN/m. Considerando
          que a viga de concreto é bi-apoiada, com um vão de 7 metros, seção
           transversal com dimensões: b=0,20m e h=0,75m (ver Figura 1) e 
           que a curva de resistência mecânica do concreto utilizado é dado 
           conforme a Tabela 1. Também considere que a introdução da 
           protensão será realizada no segundo dia e que a armadura 
           longitudinal total  \( (\A{"_{sp}"}\) da seção transversal é de 3,96 cm² 
           (4 cordoalhas de 0,99 cm²  \( (\f{"_{u}"}\) ​=1888,89 MPa) de aço em uma 
           cordoalha do tipo CP 190 RB 12,70 mm.
                    Para a determinação das tensões elásticas, 
                    considere perdas de 5% para o ato da protensão e 15% de
                     perda acumuladas até o serviço, totalizando uma perda de
                      protensão total de 20%.
                      
                      <CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data1()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer></MathJax>                </MathJaxContext>

                      <p></p>
                      <Figure> 
        <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form34}
        /> 
      <Figure.Caption> 
      Figura 1. Viga de concreto bi-apoiada.        </Figure.Caption> 
      </Figure>

       <h3>Solução Manual       </h3>     
               <p>
               <MathJaxContext config={config}>
                    <MathJax> Para o cálculo da perda de protensão devido à 
                        retração consulta-se o coeficiente dependente do 
                        ambiente e da consistência do concreto \( (\epsilon{"_{1s}"})\) na 
                        Tabela A.1 da NBR 6118. Em seguida, obtém-se o 
                        coeficiente em razão da espessura fictícia da peça 
                        \( (\epsilon{"_{2s}"})\), assim o valor final de deformação por 
                        retração \( (\epsilon{"_{cs}"}\infty)\) poderá ser obtido. 
                        Para checagem em serviço considera-se que o 
                        valor de idade final é de 10.000 dias. 
                    </MathJax>    </MathJaxContext>
                    
               </p>
               <Figure>          

               <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form35}
        /> 
      
      </Figure>    
      <p><MathJaxContext config={config}>
                    <MathJax> Outro coeficiente a ser determinado consiste
                         no coeficiente relativo à retração \( \beta{"_{s}"}\), 
                         que depende da idade fictícia do concreto \(( t{"_{fic}"})\).
                    </MathJax>    </MathJaxContext>
                    </p> 

                    
               <Figure>          

               <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form36}
        /> 
      
      </Figure>      
      <p><MathJaxContext config={config}>
                    <MathJax> Estes coeficientes resultam na deformação por
                         retração \(( \epsilon{"_{CS}"})\), a qual permite determinar a 
                         redução da tensão de protensão (\( \Delta \sigma{"_{sp}"}\) e a 
                         tensão final de protensão \(( \sigma{"_{sp}"})\) \(( \Delta P{"_{sp}"})\) a tensão 
                         final \(( \sigma{"_{sp}"})\)  e consequentemente obter a 
                         redução da carga \(( \sigma{"_{sp}"}\Delta)\) e a carga final 
                         \(( P{"_{sp,}"}\Delta)\), assim como a perda percentual 
                         (Δ%).</MathJax>    </MathJaxContext>
                    </p>   
                    <Figure>          

               <Figure.Image 
          width={600} 
          height={600} 
          alt="200x200"
src={form37}
        /> 
      
      </Figure>   
      <CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data7()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>

</div>
    );
}export default TutoPerdaConcreto