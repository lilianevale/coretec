import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
let links = ['./calc.txt'];



export default function CalcAncoragem(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({ci_prot: "",ti_prot: "",arma_prot: "", comp_armadura:"", deslizamento:"", melasticidade:""});
  const ci_prot1=formData.ci_prot;
  const ti_prot1=formData.ti_prot;
  const arma_prot1=formData.arma_prot;
  const comp_armadura1=formData.comp_armadura;
  const deslizamento1=formData.deslizamento;
  const melasticidade1=formData.melasticidade;
  


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
 
function handleSubmit(e) {
  e.preventDefault();

   const url = `/ancoragem`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ci_prot1 ,ti_prot1 , arma_prot1, comp_armadura1, deslizamento1, melasticidade1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/ancoragem`, {method:'GET'})
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
      <CDBBtn color="primary" href="TAncoragem">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoAncoragem">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcAncoragem">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    
  <form onSubmit={handleSubmit}>
  <br></br>

     <p> <label >Carga inicial de protensão (kN):</label>
      < input type="text" id="ci_prot" name="ci_prot" value={formData.ci_prot} onChange={handleChange}/>
      </p> 
      <p> <label >Tensão inicial de protensão (MPa)</label>
      < input type="text" id="ti_prot" name="ti_prot" value={formData.ti_prot} onChange={handleChange}/>
      </p> 
       
      <p> <label >Área total de armadura protendida (cm²):</label>
      < input type="text" id="arma_prot" name="arma_prot" value={formData.arma_prot} onChange={handleChange}/>
      </p> 
      
      <p> <label >Comprimento da pista de protensão (m):</label>
      < input type="text" id="comp_armadura" name="comp_armadura" value={formData.comp_armadura} onChange={handleChange}/>
      </p> 
      <p> <label>Previsão do deslizamento do sistema de ancoragem (mm):</label>
      < input type="text" id="deslizamento" name="deslizamento" value={formData.deslizamento} onChange={handleChange}/>
      </p> 
      <p> <label>Módulo de elasticidade do aço protendido (MPa):</label>
      < input type="text" id="melasticidade" name="melasticidade" value={formData.melasticidade} onChange={handleChange}/>    </p>  
      

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