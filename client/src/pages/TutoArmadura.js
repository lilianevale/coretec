import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Figure from 'react-bootstrap/Figure'; 
import fig31 from './fig31.png';
import form32 from './form32.png';

import form31 from './form31.png';

function TutoArmadura() {

    function testClickEvent(param) {
        alert('Row Click Event');
      }
    const config = {
        loader: { load: ["input/asciimath"] }
      };
    const data3 = () => {
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
                label: 'Parâmetro',
                field: 'parametro',
                width: 200,
              },
            
            {
              label: 'Unidade',
              field: 'unidades',
              width: 50,
            },],
            rows: [
              {
                linha: '1',
                parametro: 'Carga inicial de protensão',
                unidades: 'kN',
                clickEvent: () => testClickEvent(1),
              },
          
              {
                  linha: '1',
                  parametro: 'Tensão inicial de protensão',
                  unidades: 'MPa',
              
                },
               
                {
                  linha: '2',
                  parametro: 'Tempo inicial de análise sem correção da temperatura	',
                  unidades: 'dias',
              
                },
                {
                  linha: '3',
                  parametro: ' Tempo final de análise sem correção da temperatura',
                  unidades: 'dias',
              
                },
                {
                  linha: '4',
                  parametro: 'Temperatura de projeto',
                  unidades: '°C',
              
                },
                {
                    linha: '5',
                    parametro: 'Tensão última do aço',
                    unidades: 'MPa',
                
                  },
                  {
                    linha: '6',
                    parametro: 'Área total de armadura protendida',
                    unidades: '	cm²',
                
                  },
                  {
                    linha: '7',
                    parametro: 'Tipo de armadura de protensão',
                    unidades: '-',
                
                  },

                  {
                    linha: '8',
                    parametro: 'Tipo de aço',
                    unidades: '-',
                
                  },
                  
              ],
          };};
          const data4 = () => {
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
                    label: 'Parâmetro',
                    field: 'parametro',
                    width: 200,
                  },
                  {
                    label: 'Valores',
                    field: 'valores',
                    width: 50,
                  },
                {
                  label: 'Unidade',
                  field: 'unidades',
                  width: 50,
                },],
                rows: [
                  {
                    linha: '1',
                    parametro: 'Carga inicial de protensão',
                    unidades: 'kN',
                    valores:600.00,
                    clickEvent: () => testClickEvent(1),
                  },
              
                  {
                      linha: '1',
                      parametro: 'Tensão inicial de protensão',
                      valores:1515.15,
                      unidades: 'MPa',
                  
                    },
                   
                    {
                      linha: '2',
                      parametro: 'Tempo inicial de análise sem correção da temperatura	',
                      valores:0,
                      unidades: 'dias',
                  
                    },
                    {
                      linha: '3',
                      parametro: ' Tempo final de análise sem correção da temperatura',
                      valores:2,
                      unidades: 'dias',
                  
                    },
                    {
                      linha: '4',
                      parametro: 'Temperatura de projeto',
                      valores:30.00,
                      unidades: '°C',
                  
                    },
                    {
                        linha: '5',
                        parametro: 'Tensão última do aço',
                        valores:1888.89,
                        unidades: 'MPa',
                    
                      },
                      {
                        linha: '6',
                        parametro: 'Área total de armadura protendida',
                        unidades: '	cm²',
                        valores:3.96,
                    
                      },
                      {
                        linha: '7',
                        parametro: 'Tipo de armadura de protensão',
                        valores: 'cordoalha',
                        unidades: '	-',

                      },
    
                      {
                        linha: '8',
                        parametro: 'Tipo de aço',
                        unidades: '-',
                        valores: 'relaxação baixa',
                    
                      },
                      
                  ],
              };};
    
          const data2 = () => {
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
                    label: 'Parâmetro',
                    field: 'parametro',
                    width: 200,
                  },
                
                {
                  label: 'Unidade',
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
                  
                    },
                    {
                      linha: '3',
                      parametro: 'Tensão final de protensão após a perda',
                      unidades: 'MPa',
                  
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
      <CDBBtn color="primary" href="TArmadura">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoArmadura">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcArmadura">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>

    <p>A tensão aplicada na armadura de protensão decresce em razão do tempo, isso se dá através da diminuição do alongamento da armadura, o que acarreta na redução da força de protensão, que é gerada por diferentes causas, estas por sua vez são denominadas de perdas de protensão e ocorrem de forma imediata (perdas imediatas) ou ao longo do tempo (perdas progressivas). As perdas imediatas podem ser subdivididas em: (a) Perda devido a deformação imediata do concreto, (b) Perdas por deslizamento da ancoragem. Já as perdas progressivas podem se subdividir em: (c) Perdas por relaxação da armadura, (d) Perdas por retração no concreto e (e) Perdas por fluência no concreto.
</p><p>
A calculadora "Perdas por relaxação da armadura" tem como objetivo permitir que o usuário determine a perda de protensão devido à relaxação da armadura. Para utilizar a calculadora, basta preencher os campos com os valores desejados e clicar no botão "Calcular".</p>
<p>Os valores esperados na entrada são:</p>
<CDBContainer>
          <CDBRow className="py-3">
            <CDBCol md="12">
              <CDBCard>
                <CDBCardBody>
                  <CDBDataTable striped bordered hover paging={false} data={data3()} materialSearch />
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
                  <CDBDataTable striped bordered hover paging={false} data={data2()} materialSearch />
                </CDBCardBody>
              </CDBCard>
            </CDBCol>
          </CDBRow>
        </CDBContainer>

        <h1>Exemplo 1</h1>
        <MathJaxContext config={config}>
                    <MathJax>  Você é projetista de peças protendidas em
                         uma indústria e precisa verificar o projeto de 
                         uma viga. Sabe-se que as cargas de cálculo são: 
                         (a) Força de protensão inicial: 600 kN, (b) 
                         Carga de peso próprio 3,75 kN/m, (c) 
                         Carga variável de 15 kN/m \(( \psi=0,60 )\) Combinação 
                         frequente e \(( \psi=0,40 )\) Combinação quase permanente) 
                         e (d) Carga permanente externa de 3 kN/m. 
                         Considerando que a viga de concreto é bi-apoiada, 
                         com um vão de 7 metros, seção transversal com 
                         dimensões: b = 0,20 m e h = 0,75 m (ver Figura 1) 
                         e que a curva de resistência mecânica do concreto 
                         utilizado é dado conforme a Tabela 1. Também 
                         considere que a introdução da protensão será 
                         realizada no segundo dia e que a armadura 
                         longitudinal total \( A {"_{sp}"}\) da seção transversal é
                          de 3,96 cm² (4 cordoalhas de 0,99 cm² \( f {"_{u}"}\)​=1888,89 
                          MPa) de aço em uma cordoalha do tipo CP 190 RB 
                          12,70 mm.
Para a determinação das tensões elásticas, considere perdas de 5% para o 
ato da protensão e 15% de perda acumuladas até o serviço, totalizando uma 
perda de protensão total de 20%. Além disso adote o módulo de elasticidade 
do aço protendido de 210 GPa. Considere que toda a seção está em contato 
com o ar para perdas de protensão. O abatimento do concreto é de 12 cm.</MathJax>,
                           </MathJaxContext>
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
        </CDBContainer>
        <p>Tabela 1. Curva de resistência à compressão do concreto empregado na viga em MPa considerando um agregado de granito.</p>
        <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={fig31}
        /> 
        <Figure.Caption> 
        Figura 1. Viga de concreto bi-apoiada.        </Figure.Caption> 
      </Figure>
<p>Como considerações adicionais leve em conta que o projeto será 
implementado em um região de temperatura média de 30ºC e que a umidade 
relativa do ar é de 50%. Além disso, tome como referência uma pista de 
protensão de 25 m e o deslizamento relativo da ancoragem de 5 mm.</p>
<h1>Solução Manual</h1>
<p><MathJaxContext config={config}>
                    <MathJax>  Apesar de considerada uma perda progressiva, 
                        a perda devido a relaxação da armadura será 
                        considerada como uma perda imediata na etapa de 
                        introdução da protensão. Considerando a cordoalha
                         de CP 190 RB 12,7 mm e que a resistência 
                         característica da ruptura do aço de protensão
                         \(( f {"_{ptk}"} )\) é 1888890 kPa, tem-se a razão entre 
                          tensão atual e tensão última.
                          </MathJax>,
                           </MathJaxContext>,</p>
                           <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
         src={form31}
        /> 
        </Figure>
        <MathJaxContext config={config}>
                    <MathJax> A partir deste dado e consultando a 
                        Tabela 3.1, para uma cordoalha de relaxação baixa
                         tem-se o coeficiente \(( \psi {"_{1000}"} )\)=3.5%ψ1000​=3.5% A 
                         qual, possibilita realizar os cálculos do tempo 
                         corrigido \(( \delta {"_{t,cor}"} )\), já que a temperatura 
                         difere de 20°C e por fim da intensidade da 
                         relaxação da armadura \(( \theta t, t{"_{0}"} )\). </MathJax>,
                           </MathJaxContext>

   <p><MathJaxContext config={config}>
                    <MathJax> Perante os dados obtidos, calcula-se a redução
                         da tensão de protensão \(( \Delta \sigma{"_{sp}"} )\), a 
                         tensão final
                          de protensão \(( \sigma {"_{sp}"}\Delta )\), a redução 
                          de carga de 
                          protensão \(( \Delta P{"_{sp}"} )\), a carga final de protensão 
                         e a perda percentual  \((  P{"_{sp,}"} \Delta )\) protensão (\( \Delta  \)%)
                          </MathJax>,
                           </MathJaxContext></p> 
                           
                           
                           
                           
    <Figure>
    <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
         src={form32}
        /> 
    </Figure>
    <h1>Solução Coretec Tools   </h1>  
    <p>Abaixo segue a tabela com os dados de entrada para a solução do exemplo 1.</p>
    <CDBContainer>
          <CDBRow className="py-3">
            <CDBCol md="12">
              <CDBCard>
                <CDBCardBody>
                  <CDBDataTable striped bordered hover paging={false} data={data4()} materialSearch />
                </CDBCardBody>
              </CDBCard>
            </CDBCol>
          </CDBRow>
        </CDBContainer>
        
</div>
    );
}export default TutoArmadura