import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Figure from 'react-bootstrap/Figure'; 
import form38 from './form38.png'


function TTensaoElasticaVao() {
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
              label: 'Condições a serem verificadas',
              field: 'cond',
              width: 200,
            },
            {
              label: 'ELS',
              field: 'els',
              width: 50,
            },
            {
                label: 'Combinação',
                field: 'combinacao',
                width: 50,
              },

              
              {
                label: <p><MathJaxContext config={config}>
                <MathJax>  \( \sigma {"_{c}"}\) </MathJax>
                       </MathJaxContext></p>
,
                field: 'sigmac',
                width: 50,
              },

              {
                label: <MathJaxContext config={config}>
                <MathJax>  \( \sigma {"_{t}"}\) </MathJax>
                       </MathJaxContext>,
                field: 'sigmat',
                width: 50,
              },
        ],
            rows: [
              {
                linha: '1',
                cond: 'Ato da protensão',
                els: 'Qualquer nível',
                combinacao:'ELS-CE item 17.4.3.2',
                sigmac:'ver eq. (1)',
                sigmat:<MathJaxContext config={config}>
                <MathJax>  \( 1,20 f {"_{ctmj}"}\) </MathJax> </MathJaxContext>,
                clickEvent: () => testClickEvent(1),
              },
          
              {
                  linha: '2',
                  cond: 'Em serviço',
                  els: 'Concreto protendido nível 1 (protensão parcial)',
                  combinacao:<MathJaxContext config={config}>
                  <MathJax>   Para pré-tração com \( CAA {"_{1}"}\) ou pós-tração com \( CAA{"_{2}"}\) I e II </MathJax> </MathJaxContext>,
                 sigmac:'Combinação frequente',
                  sigmat:<MathJaxContext config={config}>
                  <MathJax>  \( 0,60f{"_{ck}"}\) </MathJax> </MathJaxContext>,
                
              
                },
                {
                  linha: '3',
                  combinacao:<MathJaxContext config={config}>
                  <MathJax>   Para pré-tração com \( CAA {"_{1}"}\) e II ou pós-tração com \( CAA{"_{2}"}\) a IV </MathJax> </MathJaxContext>,
                 sigmac:'Combinação frequente',
                  sigmat:<MathJaxContext config={config}>
                  <MathJax>  \( -0,70f{"_{ctm}"}\) </MathJax> </MathJaxContext>,
                
              
                },
                {
                  linha: '4',
                  els: 'Concreto protendido nível 2 (protensão limitada)',
                  combinacao:<MathJaxContext config={config}>
                  <MathJax>  Para pré-tração com \(CAA{"_{1}"}\) e II ou pós-tração com \(CAA{"_{2}"}\) a IV </MathJax> </MathJaxContext>,
                 sigmac:'Combinação quase permanente',
                  sigmat:<MathJaxContext config={config}>
                  <MathJax>  \( 0,45f{"_{ck}"}\) </MathJax> </MathJaxContext>,
                
              
                },
                {
                  linha: '5',
                  els: 'Concreto protendido nível 3 (protensão completa)',
                  combinacao:<MathJaxContext config={config}>
                  <MathJax>  Para pré-tração com \( CAA {"_{1}"}\) e II ou pós-tração com \( CAA{"_{2}"}\) a IV </MathJax> </MathJaxContext>,
                 sigmac:'Combinação rara',
                  sigmat:<MathJaxContext config={config}>
                  <MathJax>  \( 0,45f{"_{ck}"}\) </MathJax> </MathJaxContext>,
                
                },
                {
                  linha: '6',
                  combinacao:<MathJaxContext config={config}>
                  <MathJax>   Para pré-tração com \( CAA {"_{1}"}\) e II ou pós-tração com \( CAA{"_{2}"}\) a IV </MathJax> </MathJaxContext>,
                 sigmac:'Combinação frequente',
                  sigmat:<MathJaxContext config={config}>
                  <MathJax>  \( -0,70f{"_{ck}"}\) </MathJax> </MathJaxContext>,
                
              
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
        <h3>Verificação de tensões elásticas no vão
        </h3>
        <p>A ABNT NBR 6118 item 13.4.2 define os estados limites a serem respeitados levando em consideração o nível de protensão da peça e as condições de classe de agressividade ambiental. A Tabela 1 apresenta as condições limitantes impostas pela ABNT NBR 6118 (ver item 17.2.4.2).

</p>
<p>Tabela 1. Estados Limites e tensão limite em peças de concreto protendido adaptado da NBR 6118 [1]. </p>
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

<p><MathJaxContext config={config}><MathJax>  \( {"^{1}"}NA = Não se Aplica   \) </MathJax> </MathJaxContext>
</p>
<p><MathJaxContext config={config}><MathJax>  \( {"^{2}"}CAA = Classe de Agressividade Ambiental   \) </MathJax> </MathJaxContext>
</p>
<Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={form38}
        /> 
       
      </Figure>
<p>Os estados limites descritos na Tabela 1 podem ser encontrados na ABNT NBR 6118 seção 3.2. De forma geral os mesmo são:
</p><p>
a) Estado-limite último (ELU): estado limite relacionado ao colapso, ou a qualquer outra forma de ruína estrutural, que determine a paralisação do uso da estrutura.
</p>
<p>b) <MathJaxContext config={config}><MathJax> Estado-limite de formação de fissuras (ELS-F): estado em que se inicia a formação de fissuras. Admite-se que este estado-limite é atingido quando a tensão de tração máxima na seção transversal for igual a  \(f {"_{ct,f}"}  \) </MathJax> </MathJaxContext>
​</p>
<p>c) Estado-limite de abertura de fissuras (ELS-W): estado em que as fissuras se apresentam com aberturas iguais aos valores máximos especificados em 13.4.2 (ver 17.3.3).
</p><p>
d) Estado-limite de deformações excessivas (ELS-DEF): estado em que as deformações atingem os limites estabelecidos para a utilização normal, dados em 13.3 (ver 17.3.2).
</p><p>
e) Estado-limite de descompressão (ELS-D): estado no qual, em um ou mais pontos da seção transversal, a tensão normal é nula, não havendo tração no restante da seção. Verificação usual no caso do concreto protendido (ver 13.4.2).</p>
<p><MathJaxContext config={config}><MathJax> Estado-limite de descompressão parcial (ELS-DP): estado no qual garante-se a compressão na seção transversal, na região onde existem armaduras ativas. Essa região deve se estender até uma distância \( a{"_{p}"}\) da face mais próxima da cordoalha ou da bainha de protensão (ver Figura 3.1 e Tabela 13.4) </MathJax> </MathJaxContext>
</p>
<p>g) Estado-limite de compressão excessiva (ELS-CE): estado em que as tensões de compressão atingem o limite convencional estabelecido. Usual no caso do concreto protendido na ocasião da aplicação da protensão (ver 17.2.4.3.2.a).
</p><p>
h) Estado-limite de vibrações excessivas (ELS-VE): estado em que as vibrações atingem os limites estabelecidos para a utilização normal da construção (ver 23.3).</p>
</div>
    );
}export default TTensaoElasticaVao