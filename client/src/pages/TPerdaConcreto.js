import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import form33 from './form33.png';
import Figure from 'react-bootstrap/Figure'; 


function TPerdaConcreto() {
  function testClickEvent(param) {
    alert('Row Click Event');
  }
  const config = {
    loader: { load: ["input/asciimath"] }
  };
  function testClickEvent(param) {
    alert('Row Click Event');
  }
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
              label: <MathJaxContext config={config}>
      <MathJax>  \( \epsilon{"_{1s}"}\)</MathJax>                        </MathJaxContext>,

              field: 'epsilon',
              width: 200,
            },
          
          {
            label: 'Condição',
            field: 'condicao',
            width: 50,
          },
          {
            label: 'Equação',
            field: 'equacao',
            width: 50,
          },],
          rows: [
            {
              linha: '1',
              epsilon: <MathJaxContext config={config}>
              <MathJax> \( \epsilon{"_{1s}"}\)=[-8,09 {"(\\(\\frac{U}{15} - \\frac{U^2}{2284}-\\frac{U^3}{133765}-\\frac{U^4}{7608150})]*10^{-4}\\)" }</MathJax>  </MathJaxContext>,
              condicao: 'Para consistência entre 5 cm a 9 cm e 40% ≤U ≤ 90%',
              equacao:'(2)',
              clickEvent: () => testClickEvent(1),
            },
        
            {
                linha: '2',
                epsilon: <MathJaxContext config={config}>
              <MathJax> \( \epsilon{"_{1s}"}=0,75\)</MathJax>  </MathJaxContext>,
                condicao: 'Para consistência entre 0 cm a 4 cm e U ≤ 90%',
                equacao:'(3)',
            
              },
             
              
              {
                linha: '3',
                epsilon: <MathJaxContext config={config}>
              <MathJax> \( \epsilon{"_{1s}"}=1,00\)</MathJax>  </MathJaxContext>,
                condicao: 'Para consistência entre 5 cm a 9 cm e U ≤ 90%',
                equacao: '(4)',
            
              },
              {
                linha: '4',
                epsilon: <MathJaxContext config={config}>
              <MathJax> \( \epsilon{"_{1s}"}=1,25\)</MathJax>  </MathJaxContext>,
                condicao: 'Para consistência entre 10 cm a 15 cm e U ≤ 90%',
                equacao: '(5)',
            
            
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
                  label: 'Cimento Portland (CP)',
                  field: 'cimento',
                  width: 200,
                },
              
              {
                label: 'α',
                field: 'alpha',
                width: 50,
              },
              {
                label: '',
                field: 'nada',
                width: 50,
              },],
              rows: [
                {
                  linha: '1',
                  cimento: '',
                  alpha: 'Fluencia',
                  nada:'Retração',
                  clickEvent: () => testClickEvent(1),
                },
                {
                  linha: '2',
                  cimento: 'De endurecimento lento (CP III e CP IV, todas as classes de resistência)',
                  alpha: '1',
                  nada:'-',
                },
                {
                  linha: '3',
                  cimento: 'De endurecimento normal (CP I e CP II, todas as classes de resistência)',
                  alpha: '2',
                  nada:'1',
                },
                {
                  linha: '4',
                  cimento: 'De endurecimento rápido (CP V-ARI)',
                  alpha: '3',
                  nada:'-',
                },
                {
                    
                  },
                 
                  
                    
                ],
            };};
        
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TPerdaConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoPerdaConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcConcreto">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Perdas retração concreto        </h3>
        <p><MathJaxContext config={config}>
                    <MathJax> O processo de retração do concreto consiste
                       em uma deformação de encurtamento associada à perda
                        de umidade para o meio ambiente ou secagem dos poros
                         capilares pela hidratação do cimento ainda não 
                         hidratado [x]. Este fenômeno depende de alguns
                          fatores, tais como: umidade relativa do ambiente,
                           consistência do concreto e espessura fictícia da 
                           peça. A partir disso ABNT NBR 6118 [1] item A.2.3
                            afirma que a deformação por retração entre
                             instantes de tempo  \(t {"_{0}"} \) e t é expressa 
                             conforme a equação (1):</MathJax>
                           </MathJaxContext></p>

                           <p><MathJaxContext config={config}>
                    <MathJax>  \( \epsilon {"_{cs}"}( t,t{"_{0}"}) =\epsilon{"_{cs}"}\infty.[\beta{"_{s}"}(t)-\beta{"_{s}"}(t{"_{0}"})]\) (1)</MathJax>
                           </MathJaxContext></p>


                           <p><MathJaxContext config={config}>
                    <MathJax>  \( \epsilon{"_{cs}"}\) Retração entre \(t{"_{0}"}\) e\(t\); </MathJax>
                           </MathJaxContext></p>
                           <p><MathJaxContext config={config}>
                    <MathJax>  \( \epsilon{"_{cs}"}\infty\) Valor final da retração; </MathJax>
                           </MathJaxContext></p>
                           <p><MathJaxContext config={config}>
                    <MathJax>  \( \beta{"_{s}"}\) Coeficiente relativo à retração; </MathJax>
                           </MathJaxContext></p>

                           <p><MathJaxContext config={config}>
                    <MathJax> O valor final da retração
                    \( \epsilon{"_{cs}"}\infty\) se dá através do produto entre o 
                       coeficiente dependente da umidade relativa do 
                       ambiente e da consistência do concreto \( \epsilon{"_{1s}"}\) e o
                        coeficiente em razão da espessura fictícia da peça
                        \( \epsilon{"_{2s}"}\). Onde o cálculo do coeficiente \( \epsilon{"_{1s}"}\) é 
                         realizado de acordo com a especificação da Tabela 
                         A.1 da ABNT NBR 6118 [1], dado pela equação (2): </MathJax>
                           </MathJaxContext></p>

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
   <p><MathJaxContext config={config}>
              <MathJax> Já a obtenção do coeficiente \( \epsilon{"_{2s}"}\)​ , depende da espessura fictícia da peça, que é dada pela equação (6):</MathJax>  </MathJaxContext>
                </p>
                <p><MathJaxContext config={config}>
                <MathJax> \( h{"_{fic}"}=\gamma{"\\frac{2*A_{c}}{u_{ar}}" }\) (6)</MathJax>  </MathJaxContext>
                </p>
                <p><MathJaxContext config={config}>
                <MathJax>\(\gamma\) - Coeficiente dependente da umidade relativa do ambiente (U), sendo \(\gamma=1+\exp(-7,8+0,1U)\) </MathJax>  </MathJaxContext>
                </p>
                <p><MathJaxContext config={config}>
                <MathJax>\( h{"_{fic}"}\) - Área da seção transversal da peça; </MathJax>  </MathJaxContext></p>
                
                <p><MathJaxContext config={config}>
                <MathJax>\( u{"_{ar}"}\) - Perímetro externo da seção transversal em contato com o ar.</MathJax>  </MathJaxContext></p>
               
                <p><MathJaxContext config={config}>
                <MathJax>A partir disso obtém-se o coeficiente \( \beta{"_{s}"}\) dependente da espessura fictícia da peça conforme equação (7), valor de expresso em metros:</MathJax>  </MathJaxContext></p>
                <p><MathJaxContext config={config}>
                <MathJax>\( \epsilon{"_{2s}"}={"\\frac{0,33+2*h_{fic}}{0,208+h_{fic}}" }\)   (7)</MathJax>  </MathJaxContext></p>
                
                <p><MathJaxContext config={config}>
                <MathJax>Para a determinação do coeficiente , é necessário conhecer a idade fictícia do concreto no instante considerado (seja \(t{"_{0}"} \) ou t) . Para isso emprega-se a equação (8) dada pela ABNT NBR 6118 [1] no item A.2.4.1.   (7)</MathJax>  </MathJaxContext></p>
                
                <p><MathJaxContext config={config}>
                <MathJax>\( t{"_{fic}"}=\alpha{"\\frac{T+10}{30}" }*t\)   (7)</MathJax>  </MathJaxContext></p>
                
                <p><MathJaxContext config={config}>
                <MathJax> Sendo \(\alpha\) o coeficiente de velocidade de endurecimento do concreto para fluência e retração dado conforme Tabela 3.2.  (7)</MathJax>  </MathJaxContext></p>
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
        <p>Legenda:</p>

        <p>CP I e CP I-S - Cimento Portland comum</p>
        <p>CP II-E, CP II-F e CP II-Z - Cimento Portland composto</p>
        <p>CP III - Cimento Portland de alto forno</p>
        <p>CP IV - Cimento Portland pozolânico</p>
        <p>CP V-ARI - Cimento Portland alta resistência inicial</p>
        <p>RS - Cimento Portland resistente a sulfatos (propriedade específica de alguns dos tipos de cimento citados)</p>
<p><MathJaxContext config={config}>
<MathJax>Após verificação das equações expostas neste item é possível determinar o coeficiente \( \beta{"_{s}"}\)​ nos tempos desejados conforme equação (9): </MathJax>  </MathJaxContext></p>
<Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={form33}
        />
              </Figure>
              <p><MathJaxContext config={config}>
                <MathJax>
                Substituindo os coeficientes encontrados na equação (1), obtém-se a deformação por retração \Epsilon(\({"_{cs}"} \) entre os instantes t{"_{o}"} e t.  Portanto, conhecendo 
                o módulo de elasticidade do concreto (E{"_{s,cp}"}) , calcula-se a perda por retração pela grandeza de tensão \((\Delta\sigma)\)  onforme equação (15) e a tensão final após a perda conforme equação (16).</MathJax>  </MathJaxContext></p>
                
                <p><MathJaxContext config={config}>
                    <MathJax>  \( \Delta \sigma {"_{s,sp}"}=\epsilon{"_{cs}"}) =\epsilon{"_{cs}"}\infty.[\beta{"_{s}"}(t)-\beta{"_{s}"}(t{"_{0}"})\) (1)</MathJax>,
                           </MathJaxContext></p>
                           
                           <p><MathJaxContext config={config}>
                    <MathJax>  \(  \sigma=\sigma{"_{0}"} -\Delta{"_{\sigma}"}) \) (1)</MathJax>,
                           </MathJaxContext></p>


                           <p>Do mesmo modo, tem-se a redução da carga de protensão conforme equação (17) e a carga final de protensão após a perda conforme (18):</p>
                           
                           
                           <p><MathJaxContext config={config}>
                    <MathJax>  \(  \Delta P{"_{sp}"}=\Delta \sigma{"_{sp}"} *A{"_{\sp}"}) \) (1)</MathJax>
                           </MathJaxContext></p>
                          
                           <p><MathJaxContext config={config}>
                    <MathJax>  \(   P{"_{sp}"}=P \sigma{"_{sp,0}"} -\Delta P{"_{\sp}"}) \) (1)</MathJax>
                           </MathJaxContext></p>

                           <p><MathJaxContext config={config}>
                    <MathJax>  \(  \Delta P{"_{sp}"}\) - Perda da carga de protensão;</MathJax>
                           </MathJaxContext></p>
                           
                           <p><MathJaxContext config={config}>
                    <MathJax>  \(   P{"_{sp,\Delta}"}\)- Carga de protensão após a perda.</MathJax>
                           </MathJaxContext></p>
                           <p>Com isso, tem-se o percentual da perda de protensão conforme a equação (19):</p>

                           <p><MathJaxContext config={config}>
                    <MathJax>  \(   \Delta \%={"\\frac{\Delta P_{sp}}{P_{sp,0}}"}*100\)</MathJax>
                           </MathJaxContext></p>
</div>

    );
}export default TPerdaConcreto