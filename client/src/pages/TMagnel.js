import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox } from "cdbreact";


function TMagnel() {
  
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TMagnel">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutotMagnel">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="Magnel">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Diagrama de Magnel</h3>
        <p>texto faltando na ferramenta</p>
</div>
    );
}export default TMagnel