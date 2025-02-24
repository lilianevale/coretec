import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import React, { useState, useEffect } from 'react';
//import { Form, Input } from "antd";
//import "antd/dist/antd.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import figanco from './figanco.png'
import form9 from './form9.png'





import Figure from 'react-bootstrap/Figure'; 
import MathJax1 from 'react-mathjax2'


function TutoAncoragem() {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
    
      
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
                parametro: 'Perda percentual de protensão	',
                unidades: '%',
                clickEvent: () => testClickEvent(1),
              },
          
              {
                  linha: '2',
                  parametro: 'Carga final de protensão após a perda	',
                  unidades: 'kN',
              
                },
                {
                  linha: '3',
                  parametro: 'Tensão final de protensão após a perda	',
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
                label: 'Parâmetro',
                field: 'parametro',
                width: 200,
              },
            {
              label: 'Valores',
              field: 'valores',
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
                valores:600.00,
                unidades: 'kN',
                clickEvent: () => testClickEvent(1),
              },
          
              {
                  linha: '2',
                  parametro: 'Tensão inicial de protensão',
                  valores: 1515.15,
                  unidades: 'MPa',
              
                },
                {
                  linha: '3',
                  parametro: 'Área total de armadura protendida',
                  valores: 3.96,
                  unidades: 'cm²',
              
                },
                {
                  linha: '4',
                  parametro: 'Comprimento da pista de protensão	',
                  valores: 25.00,
                  unidades: 'm',
              
                },
                {
                  linha: '5',
                  parametro: ' Previsão do deslizamento do sistema de ancoragem',
                  valores: 5.00,
                  unidades: 'mm',
              
                },
                {
                  linha: '6',
                  parametro: 'Módulo de elasticidade do aço protendido',
                  valores:210000,
                  unidades: 'MPa',
              
                },
                
              ],
          };};
      
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
                      linha: '2',
                      parametro: 'Tensão inicial de protensão',
                      unidades: 'MPa',
                  
                    },
                    {
                      linha: '3',
                      parametro: 'Área total de armadura protendida',
                      unidades: 'cm²',
                  
                    },
                    {
                      linha: '4',
                      parametro: 'Comprimento da pista de protensão	',
                      unidades: 'm',
                  
                    },
                    {
                      linha: '5',
                      parametro: ' Previsão do deslizamento do sistema de ancoragem',
                      unidades: 'mm',
                  
                    },
                    {
                      linha: '6',
                      parametro: 'Módulo de elasticidade do aço protendido',
                      unidades: 'MPa',
                  
                    },
                    
                  ],
              };};
          
          
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

    <p>A tensão aplicada na armadura de protensão decresce em razão do tempo, isso se dá através da diminuição do alongamento da armadura, o que acarreta na redução da força de protensão, que é gerada por diferentes causas, estas por sua vez são denominadas de perdas de protensão e ocorrem de forma imediata (perdas imediatas) ou ao longo do tempo (perdas progressivas). As perdas imediatas podem ser subdivididas em: (a) Perda devido a deformação imediata do concreto, (b) Perdas por deslizamento da ancoragem. Já as perdas progressivas podem se subdividir em: (c) Perdas por relaxação da armadura, (d) Perdas por retração no concreto e (e) Perdas por fluência no concreto.
</p><p>
A calculadora "Perdas por deslizamento na ancoragem" tem como objetivo permitir que o usuário determine a perda de protensão devido ao deslizamento na ancoragem. Para utilizar a calculadora, basta preencher os campos com os valores desejados e clicar no botão "Calcular".
</p>
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
              <CDBDataTable striped bordered hover paging={false} data={data()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>

    <h1>Exemplo 1</h1>
    <p>Você é projetista de peças protendidas em uma indústria e precisa
         verificar o projeto de uma viga. Sabe-se que as cargas de 
         cálculo são: (a) Força de protensão inicial: 600 kN, 
         (b) Carga de peso próprio 3,75 kN/m, 
         (c) Carga variável de 15 kN/m (ψ1​=0,60 Combinação frequente e ψ2​=0,40
          Combinação quase permanente) e (d) Carga permanente externa de 3 
          kN/m. Considerando que a viga de concreto é bi-apoiada, com um 
          vão de 7 metros, seção transversal com dimensões: b = 0,20 m e 
          h = 0,75 m (ver Figura 1) e que a curva de resistência mecânica do
           concreto utilizado é dado conforme a Tabela 1. Também considere 
           que a introdução da protensão será realizada no segundo dia e 
           que a armadura longitudinal total <MathJaxContext config={config}>
      <MathJax>\( A{"_{sp}"} \) 
</MathJax>
    </MathJaxContext>
           da seção transversal é de 3,96 cm² (4 cordoalhas de 0,99 cm²  <MathJaxContext config={config}>
      <MathJax>\( f{"_{u}"}​=1888,89 MPa \) 
</MathJax>
    </MathJaxContext>) de aço em uma cordoalha do tipo CP 190 RB 12,70 mm.
    Para a determinação das tensões elásticas, considere perdas de 5% 
    para o ato da protensão e 15% de perda acumuladas até o serviço, totalizando uma perda de protensão total de 20%. Além disso adote o módulo de elasticidade do aço protendido de 210 GPa. Considere que toda a seção está em contato com o ar para perdas de protensão. O abatimento do concreto é de 12 cm.</p>
   <p>Tabela 1. Curva de resistência à compressão do concreto empregado na viga em MPa considerando um agregado de granito.</p>
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
          width={600} 
          height={600} 
          alt="200x200"
src={figanco}
        /> 
      <Figure.Caption> 
      Figura 1. Viga de concreto bi-apoiada.        </Figure.Caption> 
      </Figure>

      <h1>Solução Manual</h1>
      <p>Na determinação da perda devido ao deslizamento na ancoragem 
        tem-se a sequência abaixo para o cálculo da redução da tensão. 
        Sendo que, para este exemplo foi considerado um deslizamento na
         ancoragem <MathJaxContext config={config}>
      <MathJax>\( \delta{"_{anc}"} \) de 5 mm. 
</MathJax>
    </MathJaxContext> </p>

    <Figure> 
        <Figure.Image 
          width={700} 
          height={700} 
          alt="200x200"
          src={form9}
        /> 
</Figure>
<h1>Soluçao Coretec Tools</h1>
<p>Abaixo segue a tabela com os dados de entrada para a solução do exemplo 1.</p>
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
    </div>

  
);
}export default TutoAncoragem;