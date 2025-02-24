import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
let links = ['./calc.txt'];



export default function CalcPretracao(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({elasticidadeaco: "",elasticidadeconc: "",ci: "", ti:"", armadura:"", secaobruta:"", inerciabruta:"", excentricidade:"", fletor:""});
  const elasticidadeaco1=formData.elasticidadeaco;
  const elasticidadeconc1=formData.elasticidadeconc;
  const ci1=formData.ci;
  const ti1=formData.ti;
  const armadura1=formData.armadura;
  const secaobruta1=formData.secaobruta;
  const fletor1=formData.fletor;
  const inerciabruta1=formData.inerciabruta;
  const excentricidade1=formData.excentricidade;


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
 
function handleSubmit(e) {
  e.preventDefault();

   const url = `/pretracao`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ elasticidadeaco1 ,elasticidadeconc1 , ci1, ti1, armadura1, secaobruta1, inerciabruta1, excentricidade1, fletor1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/pretracao`, {method:'GET'})
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
      <CDBBtn color="primary" href="TPerdaConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoPerdaConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcPretracao">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    
  <form onSubmit={handleSubmit}>
  <br></br>

     <p> <label >Módulo de elasticidade do aço protendido (MPa):</label>
      < input type="text" id="elasticidadeaco" name="elasticidadeaco" value={formData.elasticidadeaco} onChange={handleChange}/>
      </p> 
      <p> <label >Módulo de elasticidade do concreto (MPa):</label>
      < input type="text" id="elasticidadeconc" name="elasticidadeconc" value={formData.elasticidadeconc} onChange={handleChange}/>
      </p> 
      <p> <label >Carga inicial de protensão (kN):</label>
      < input type="text" id="ci" name="ci" value={formData.ci} onChange={handleChange}/>
      </p> 
      <p> <label >Tensão inicial de protensão (MPa):</label>
      < input type="text" id="ti" name="ti" value={formData.ti} onChange={handleChange}/>
      </p> 
      
      <p> <label >Área total de armadura protendida (cm²):</label>
      < input type="text" id="armadura" name="armadura" value={formData.armadura} onChange={handleChange}/>
      </p> 
      <p> <label>Área da seção bruta (cm²):</label>
      < input type="text" id="secaobruta" name="secaobruta" value={formData.secaobruta} onChange={handleChange}/>
      </p> 
      <p> <label>Inércia da seção bruta (cm⁴):</label>
      < input type="text" id="inerciabruta" name="inerciabruta" value={formData.inerciabruta} onChange={handleChange}/>    </p>  
      <p> <label>Excentricidade do cabo de protensão (cm):</label>
      < input type="text" id="excentricidade" name="excentricidade" value={formData.excentricidade} onChange={handleChange}/>    </p>  
      <p> <label>Momento fletor devido ao peso próprio (kN.m):</label>
      < input type="text" id="fletor" name="fletor" value={formData.fletor} onChange={handleChange}/>    </p>  
      

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