import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Figure from 'react-bootstrap/Figure'; 
import fig2 from './fig2.png'
import form20 from './form20.png'
import form22 from './form22.png'
import form23 from './form23.png'
import form24 from './form24.png'


function TutoConcreto() {
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
                  {
                    linha: '13',
                    parametro: 'Modulo de Young do concreto aos 28 dias',
                    unidades: 'MPa',
                
                  },
                  {
                    linha: '14',
                    parametro: 'Tensão no concreto ao nível da armadura',
                    unidades: 'MPa',
                
                  },
                  {
                    linha: '15',
                    parametro: 'Resistência à compressão do concreto na idade da protensão',
                    unidades: 'MPa',
                
                  },
                  {
                    linha: '16',
                    parametro: 'Resistência à compressão do concreto aos 28 dias',
                    unidades: 'MPa',
                
                  },

        
              ],
          };};

          const data1 = () => {
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
                ],
            };};
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcFluenciaConc">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Tutorial</h3>
        <p>A fluência do concreto é o acréscimo de deformação, no caso
             aqui da protensão deformações de encurtamento, sob uma 
             tensão externa constante. Com isso o alongamento da
              armadura é reduzido, acarretando em uma perda de 
              protensão, conhecida como perda de protensão devido à 
              fluência [xx].
</p>
<p>
A calculadora "Perdas por fluência do concreto" tem como objetivo 
permitir que o usuário determine a perda de protensão devido à fluência 
do concreto. Para utilizar a calculadora, basta preencher os campos com 
os valores desejados e clicar no botão "Calcular".</p>
<p>Os valores esperados na entrada são:</p>
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

    <h1>Exemplo</h1>
    <p>  <MathJaxContext config={config}>
      <MathJax> Você é projetista de peças protendidas em uma indústria 
        e precisa verificar o projeto de uma viga. Sabe-se que as cargas
         de cálculo são: (a) Força de protensão inicial: 600 kN, (b) 
         Carga de peso próprio 3,75 kN/m, (c) Carga variável de 15 kN/m 
         \( \psi {"_{1}"} \)=0,60 Combinação frequente e  \( \psi {"_{2}"} \)​=0,40 
         Combinação quase permanente) e (d) Carga permanente externa de 3 kN/m. 
         Considerando que a viga de concreto é bi-apoiada, com um vão de 7
          metros, seção transversal com dimensões: b=0,20m e h=0,75m 
          (ver Figura 1) e que a curva de resistência mecânica do 
          concreto utilizado é dado conforme a Tabela 1. 
          Também considere que a introdução da protensão será realizada 
          no segundo dia e que a armadura longitudinal total (\( A{"_{sp}"} \)) da
           seção transversal é de 3,96 cm² (4 cordoalhas de 0,99 cm²
            \(  f{"_{u}"} \)=1888,89 MPa) de aço em uma cordoalha do tipo CP 190
             RB 12,70 mm.
      Para a determinação das tensões elásticas, considere perdas de 5%
       para o ato da protensão e 15% de perda acumuladas até o serviço, 
       totalizando uma perda de protensão total de 20%.
       <p>Tabela 1. Curva de resistência à compressão do concreto empregado na viga em MPa considerando um agregado de granito.</p>
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
    <Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={fig2}
        /> 
        <Figure.Caption> 
        Figura 1. Viga de concreto bi-apoiada.
                </Figure.Caption> 
      </Figure>

      <h1>Solução Manual      </h1>

      <p>
      Assim como na retração, o cálculo da perda de protensão devido à 
      fluência depende de alguns coeficientes, o primeiro a ser 
      determinado é o coeficiente de fluência rápida.
      </p>
      <Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={form20}
        /> 
        
      </Figure>

    <p>  Outro coeficiente a ser determinado é o dependente da umidade 
        relativa e é fornecido através da Tabela A.1 da ABNT NBR 6118, 
        como não há dados numéricos para a umidade de trabalho de 50%,
         o mesmo é obtido por meio de interpolação, sendo ϕ1c=3.37ϕ1c​=3.37.
</p><p>
Na sequência, obtém-se o coeficiente dependente da espessura fictícia da
 peça, o coeficiente de deformação lenta irreversível, coeficiente 
 de deformação lenta reversível em função do tempo e o coeficiente de 
 deformação lenta irreversível em função da idade fictícia. </p>

 <Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={form22}
        /> 
        
      </Figure>
      <p>Tais coeficientes calculados determinam o coeficiente de
         fluência, o que permite obter a deformação devido ao efeito da 
         fluência.</p>
         <Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={form23}
        /> 
        
      </Figure>
      <p>Por fim, outros dados são conhecidos, tais como: a redução de 
        tensão de protensão, a tensão final, a redução de carga, a carga 
        final e a perda percentual.</p>
        <Figure> 

        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={form24}
        /> 
      </Figure>
      <h1>Solução Coretec Tools      </h1>
</div>

    );
}export default TutoConcreto