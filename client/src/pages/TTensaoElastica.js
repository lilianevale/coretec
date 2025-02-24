import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Figure from 'react-bootstrap/Figure'; 
import form40 from './form40.png'


function TTensaoElastica() {
    const config = {
        loader: { load: ["input/asciimath"] }
      };
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TTensaoElastica">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoTensaoElastica">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcTensaoElastica">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Verificação de tensões elásticas na seção
        </h3>
        <p>
        As verificações em peças de concreto protendido são similares às verificações em concreto armado, porém no caso da protensão, alguns estados limites são adicionados para avaliar a capacidade da peça de suportar a própria força de protensão quando inserida no elemento estrutural.
</p><p>
Para verificar estes novos estados é necessário estabelecer o comportamento das tensões elásticas ao longo da seção transversal e então estabelecer se um estado limite é ou não atingido.
</p><p>
O procedimento utilizado para determinar as tensões elásticas numa peça protendida é o mesmo procedimento de determinação das tensões elásticas da resistência dos materiais. Portanto é possível escrever o caso geral da equação de flexão composto normal para seções.
        </p>



<Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={form40}
        /> 
       
      </Figure>

      <p><MathJaxContext config={config}><MathJax>  As equações (1) e (2) 
        indicam as tensões elásticas na base e no topo da seção transversal,
         onde a \( P{"_{Sd}"} \) é a força de protensão no tempo tt analisado. \(M {"_{Sd}"}\)
         \(t \) é o momento fletor de cálculo para a combinação desejada. \( A{"_{c}"}\)​ e
         \( W\) representam as propriedades geométricas de área bruta da seção e módulo resistente da seção transversal, respectivamente. </MathJax> </MathJaxContext>
</p>
</div>
    );
}export default TTensaoElastica