import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Figure from 'react-bootstrap/Figure'; 
import form39 from './form39.png'


function TutoTensaoElasticaVao() {
    function testClickEvent(param) {
        alert('Row Click Event');
      }
      const config = {
        loader: { load: ["input/asciimath"] }
      };
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
            },
            
        ],
            rows: [
              {
                linha: '1',
                parametro:'Planilha com dados de esforços, cablagem e seções',
                unidades:'',
                clickEvent: () => testClickEvent(1),
              },
              {
                linha: '2',
                parametro:'Área da seção transversal da viga',
                unidades:'cm²',
                clickEvent: () => testClickEvent(1),
              },

              {
                linha: '3',
                parametro:'Inércia da viga',
                unidades:'cm⁴',
                clickEvent: () => testClickEvent(1),
              },
          
              {
                linha: '4',
                parametro:'Distância do topo da seção até o centro de gravidade',
                unidades:'cm',
                clickEvent: () => testClickEvent(1),
              },
              {
                linha: '5',
                parametro:'Distância da  base da seção até o centro de gravidade',
                unidades:'cm',
                clickEvent: () => testClickEvent(1),
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
                },
                
            ],
                rows: [
                  {
                    linha: '1',
                    parametro:'Tensão na base da seção',
                    unidades:'MPa',
                    clickEvent: () => testClickEvent(1),
                  },
                  {
                    linha: '2',
                    parametro:'Tensão no topo da seção',
                    unidades:'MPa',
                    clickEvent: () => testClickEvent(1),
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
              
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TTensaoElasticaVao">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoTensaoElasticaVao">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcTensaoElasticaVao">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3> Tutorial
        </h3>
       <p> As verificações em peças de concreto protendido são similares às verificações em concreto armado, porém no caso da protensão, alguns estados limites são adicionados para avaliar a capacidade da peça de suportar a própria força de protensão quando inserida no elemento estrutural.

</p><p>Para verificar estes novos estados é necessário estabelecer o comportamento das tensões elásticas ao longo da seção transversal e então estabelecer se este estado limite de tensões é ou não atingido.
</p><p>
Para verificar estes novos estados é necessário estabelecer o comportamento das tensões elásticas ao longo da seção transversal e então estabelecer se este estado limite de tensões é ou não atingido. A calculadora "Verificação de tensões elásticas no vão" tem como objetivo permitir que o usuário determine as tensões elásticas na base e no topo da seção transversal de uma viga de concreto protendido. Para utilizar a calculadora, basta preencher os campos com os valores desejados e clicar no botão "Calcular".
</p><p>
Os dados de entrada são:</p>
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

    <p>Os dados de saída são:</p>
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

    <h3>Exemplo 1</h3>
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
src={form39}
        /> 
        <Figure.Caption> 
        Figura 1. Viga de concreto bi-apoiada.        </Figure.Caption> 
      </Figure>
</div>
    );
}export default TutoTensaoElasticaVao