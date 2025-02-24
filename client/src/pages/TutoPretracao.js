import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import React, { useState, useEffect } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import form1 from './form1.png'
import form2 from './form2.png'
import form3 from './form3.png'
import form4 from './form4.png'
import Figure from 'react-bootstrap/Figure'; 
import MathJax1 from 'react-mathjax2'


function TutoPretracao() {
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
                parametro: 'Módulo de elasticidade do aço protendido',
                unidades: 'MPa',
                clickEvent: () => testClickEvent(1),
              },
          
              {
                  linha: '2',
                  parametro: 'Módulo de elasticidade do concreto',
                  unidades: 'MPa',
              
                },
                {
                  linha: '3',
                  parametro: 'Carga inicial de protensão',
                  unidades: 'kN',
              
                },
                {
                  linha: '4',
                  parametro: 'Tensão inicial de protensão	',
                  unidades: 'MPa',
              
                },
                {
                  linha: '5',
                  parametro: ' Área total de armadura protendida',
                  unidades: 'cm²',
              
                },
                {
                  linha: '6',
                  parametro: 'Área bruta da seção',
                  unidades: 'cm²',
              
                },
                {
                  linha: '7',
                  parametro: 'Inércia da seção bruta',
                  unidades: 'cm⁴',
              
                },
                {
                  linha: '8',
                  parametro: 'Excentricidade do cabo de protensão',
                  unidades: 'cm',
              
                },
                {
                  linha: '9',
                  parametro: 'Momento fletor devido ao peso próprio	',
                  unidades: 'kN.m',
              
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
          
  const config = {
    loader: { load: ["input/asciimath"] }
  };
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="Pretracao">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoPretracao">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcPretracao">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer> 

    <p>A tensão aplicada na armadura de protensão decresce em razão do
         tempo, isso se dá através da diminuição do alongamento da 
         armadura, o que acarreta na redução da força de protensão,
          que é gerada por diferentes causas, estas por sua vez são 
          denominadas de perdas de protensão e ocorrem de forma imediata (perdas imediatas)
           ou ao longo do tempo (perdas progressivas). As perdas imediatas
            podem ser subdivididas em: (a) Perda devido a deformação imediata 
            do concreto, (b) Perdas por deslizamento da ancoragem. Já as perdas
             progressivas podem se subdividir em: (c) Perdas por relaxação da
              armadura, (d) Perdas por retração no concreto e (e) Perdas por 
              fluência no concreto.
</p>
<p>A calculadora "Perdas por deformação imediata do concreto
     na pré-tração" tem como objetivo permitir que o usuário 
     determine a perda de protensão devido à deformação 
     imediata do concreto. Para utilizar a calculadora, 
     basta preencher os campos com os valores desejados e 
     clicar no botão "Calcular".
</p>
<p>Os valores esperados na entrada são:
</p>
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
              <CDBDataTable striped bordered hover paging={false} data={data1()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>
    </div>

  
);
}export default TutoPretracao;