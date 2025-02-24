import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
let links = ['./calc.txt'];



export default function CalcConcreto(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({areabruta: "",cargain: "",tensinit: "", totalarmadura:"", umidade:"", slump:"", perimex:"", tempin:"", temp:"", young:""});
  const areabruta1=formData.areabruta;
  const cargain1=formData.cargain;
  const tensinit1=formData.tensinit;
  const totalarmadura1=formData.totalarmadura;
  const umidade1=formData.umidade;
  const slump1=formData.slump;
  const perimex1=formData.perimex;
  const tempin1=formData.tempin;
  const temp1=formData.temp;
  const young1=formData.young;

console.log(formData.areabruta)

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
  function placeOrder(form){
    form.submit();
    const url = `/concreto`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ cargain1, tensinit1, totalarmadura1, umidade1, slump1, areabruta1, perimex1, tempin1, temp1, young1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
}
function handleSubmit(e) {
  e.preventDefault();

   const url = `/concreto`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ cargain1, tensinit1, totalarmadura1, umidade1, slump1, areabruta1, perimex1, tempin1, temp1, young1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/concreto`, {method:'GET'})
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

 

  function clickMe () {
    alert(data2)

}


     
  return (
    
<div>
<CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TPerdaConcreto">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoPerdaConcreto">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcConcreto">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    
  <form onSubmit={handleSubmit}>
  <br></br>

     <p> <label >Carga inicial de protensão (kN):</label>
      < input type="text" id="cargain" name="cargain" value={formData.cargain} onChange={handleChange}/>
      </p> 
      <p> <label >Tensão inicial de protensão (MPa):</label>
      < input type="text" id="tensinit" name="tensinit" value={formData.tensinit} onChange={handleChange}/>
      </p> 
      <p> <label >Área total de armadura protendida (cm²):</label>
      < input type="text" id="totalarmadura" name="totalarmadura" value={formData.totalarmadura} onChange={handleChange}/>
      </p> 
      <p> <label >Umidade do ambiente no intervalo de tempo de análise (%):</label>
      < input type="text" id="umidade" name="umidade" value={formData.umidade} onChange={handleChange}/>
      </p> 
      
      <p> <label >Abatimento ou slump test do concreto (cm):</label>
      < input type="text" id="slump" name="slump" value={formData.slump} onChange={handleChange}/>
      </p> 
      <p> <label>Área bruta da seção (cm²):</label>
      < input type="text" id="areabruta" name="areabruta" value={formData.areabruta} onChange={handleChange}/>
      </p> 
      <p> <label>Parte do perímetro externo da seção em contato com ar (cm):</label>
      < input type="text" id="perimex" name="perimex" value={formData.perimex} onChange={handleChange}/>    </p>  
      
      <p> <label>Tempo inicial de análise sem correção da temperatura (dias):</label>
      < input type="text" id="tempin" name="tempin" value={formData.tempin} onChange={handleChange}/>    </p>  
      
      <p> <label>Temperatura de projeto (°C):</label>
      < input type="text" id="temp" name="temp" value={formData.temp} onChange={handleChange}/>    </p>  
      
      <p> <label>Módulo de Young do aço protendido (MPa):</label>
      < input type="text" id="young" name="young" value={formData.young} onChange={handleChange}/>    </p>  
      


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