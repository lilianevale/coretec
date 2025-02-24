import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
let links = ['./calc.txt'];



export default function CalcFluenciaConc(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({protensao: "", ti: "",armprot: "", areabruta:"", ar:"", slump:"",umidade:"", endurecimento:"", correcaotemp:"", fcorrecaotemp:"", tempproj:"", young:"", young28:"", tensaoarm:"", resistencia:"", resistencia28:""});
  const protensao1=formData.protensao;
  const ti1=formData.ti;
  const armprot1=formData.armprot;
  const areabruta1=formData.areabruta;
  const ar1=formData.ar;
  const slump1=formData.slump;
  const endurecimento1=formData.endurecimento;
  const correcaotemp1=formData.correcaotemp;
  const fcorrecaotemp1=formData.fcorrecaotemp;
  const umidade1=formData.umidade;

  const tempproj1=formData.tempproj;
  const young1=formData.young;
  const young281=formData.young28;
  const tensaoarm1=formData.tensaoarm;
  const resistencia1=formData.resistencia;
  const resistencia281=formData.resistencia28;

  



  


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
 
function handleSubmit(e) {
  e.preventDefault();

   const url = `/fluencia`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ protensao1 ,ti1 , armprot1, areabruta1, ar1, slump1, umidade1, endurecimento1, correcaotemp1, fcorrecaotemp1, tempproj1, young1, young281, tensaoarm1, resistencia1, resistencia281, }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/fluencia`, {method:'GET'})
  .then(response => response.text())
  .then(data => setdata(data));
  
},       
[]);
console.log(data2);

let [texts, setTexts] = React.useState('');
React.useEffect(() => {
  async function main() {
    const files = await Promise.all(
      links.map((link) => fetch(link).then((res) => res.text()))
    );
    setTexts(files);

  }
 
  main();
}, [setTexts]);

 
  return (
    
<div>
<CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcFluenciaConc">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    
  <form onSubmit={handleSubmit}>
  <br></br>

     <p> <label >Carga inicial de protensão (kN):</label>
      < input type="text" id="protensao" name="protensao" value={formData.protensao} onChange={handleChange}/>
      </p> 
      <p> <label >Tensão inicial de protensão (MPa):</label>
      < input type="text" id="ti" name="ti" value={formData.ti} onChange={handleChange}/>
      </p> 
       
      <p> <label >Área total de armadura protendida (cm²):</label>
      < input type="text" id="armprot" name="armprot" value={formData.armprot} onChange={handleChange}/>
      </p> 
      
      <p> <label >Área bruta da seção (cm²):</label>
      < input type="text" id="areabruta" name="areabruta" value={formData.areabruta} onChange={handleChange}/>
      </p> 
      <p> <label>Parte do perímetro externo da seção em contato com ar (cm):</label>
      < input type="text" id="ar" name="ar" value={formData.ar} onChange={handleChange}/>
      </p> 
      <p> <label>Abatimento ou slump test do concreto (cm):</label>
      < input type="text" id="slump" name="slump" value={formData.slump} onChange={handleChange}/>    </p>  
      <p> <label>Umidade do ambiente no intervalo de tempo de análise (%):</label>
      < input type="text" id="umidade" name="umidade" value={formData.umidade} onChange={handleChange}/>    </p>  
      
      <p> <label>Tipo de enduricmento do cimento:</label>
      <select id="endurecimento" name="endurecimento" value={formData.endurecimento} onChange={handleChange}>
      <option value="LENTO">LENTO</option>
      <option value="NORMAL">NORMAL</option>
      <option value="RÁPIDO">RÁPIDO</option>

    </select> </p>
    <p> <label>Tempo inicial de análise sem correção da temperatura (dias):</label>
      < input type="text" id="correcaotemp" name="correcaotemp" value={formData.correcaotemp} onChange={handleChange}/>    </p>  
      
      <p> <label>Tempo final de análise sem correção da temperatura (dias):</label>
      < input type="text" id="fcorrecaotemp" name="fcorrecaotemp" value={formData.fcorrecaotemp} onChange={handleChange}/>    </p>  
      
      <p> <label>Temperatura de projeto (°C):</label>
      < input type="text" id="tempproj" name="tempproj" value={formData.tempproj} onChange={handleChange}/>    </p>  
      <p> <label>Módulo de Young do aço protendido (MPa):</label>
      < input type="text" id="young" name="young" value={formData.young} onChange={handleChange}/>    </p>  
      
      <p> <label>Módulo de Young do concreto aos 28 dias (MPa):</label>
      < input type="text" id="young28" name="young28" value={formData.young28} onChange={handleChange}/>    </p>  
      
      <p> <label>Tensão no concreto ao nível da armadura (MPa):</label>
      < input type="text" id="tensaoarm" name="tensaoarm" value={formData.tensaoarm} onChange={handleChange}/>    </p>  
      
      <p> <label>Resistência à compressão do concreto na idade da protensão (MPa):</label>
      < input type="text" id="resistencia" name="resistencia" value={formData.resistencia} onChange={handleChange}/>    </p>  
      
      <p> <label>Resistência à compressão do concreto aos 28 dias (MPa):</label>
      < input type="text" id="resistencia28" name="resistencia28" value={formData.resistencia28} onChange={handleChange}/>    </p>  
      
    </form>
    
    <CDBContainer>
      <CDBBtnGrp size="lg">
        <CDBBtn color="light" type="submit" circle onClick={handleSubmit} >1- Processar dados</CDBBtn>

      </CDBBtnGrp>
      <CDBBtnGrp size="md">
        <CDBBtn color="light"  type="submit"  circle onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>2- Visualizar resultado</CDBBtn>
      </CDBBtnGrp>  
      


      <Collapse in={open}>
        <div id="example-collapse-text">
            <p></p>
            <p></p>

          <p>{data2}</p>
        </div>
      </Collapse>   

    </CDBContainer>
   
   
    </div>

 
  );
} 