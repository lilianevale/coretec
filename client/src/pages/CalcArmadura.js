import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
let links = ['./calc.txt'];



export default function CalcArmadura(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({protensao: "", ti: "",sdias: "", tempof:"", tempproj:"", tensao:"", fletor:"", tipoarm:"", tipaco:""});
  const protensao1=formData.protensao;
  const ti1=formData.ti;
  const sdias1=formData.sdias;
  const tempof1=formData.tempof;
  const tempproj1=formData.tempproj;
  const tensao1=formData.tensao;
  const fletor1=formData.fletor;
  const tipoarm1=formData.tipoarm;
  const tipaco1=formData.tipaco



console.log(tipaco1)
  


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
 
function handleSubmit(e) {
  e.preventDefault();

   const url = `/armadura`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ protensao1 ,ti1 , sdias1, tempof1, tempproj1, tensao1, fletor1, tipoarm1, tipaco1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/armadura`, {method:'GET'})
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
      <CDBBtn color="primary" href="TArmadura">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoArmadura">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcArmadura">Calculadora</CDBBtn>
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
       
      <p> <label >Tempo inicial de análise sem correção da temperatura (dias):</label>
      < input type="text" id="sdias" name="sdias" value={formData.sdias} onChange={handleChange}/>
      </p> 
      
      <p> <label >Tempo final de análise sem correção da temperatura (dias):</label>
      < input type="text" id="tempof" name="tempof" value={formData.tempof} onChange={handleChange}/>
      </p> 
      <p> <label>Temperatura de projeto (°C):</label>
      < input type="text" id="tempproj" name="tempproj" value={formData.tempproj} onChange={handleChange}/>
      </p> 
      <p> <label>Tensão última do aço (MPa):</label>
      < input type="text" id="tensao" name="tensao" value={formData.tensao} onChange={handleChange}/>    </p>  
      
      <p> <label>Momento fletor de cálculo (kNm):</label>
      < input type="text" id="fletor" name="fletor" value={formData.fletor} onChange={handleChange}/>    </p>  
      <p> <label>Tipo de armadura de protensão:</label> 
      <select id="tipoarm" name="tipoarm" value={formData.tipoarm} onChange={handleChange}>
      <option value="FIO">fio</option>
      <option value="COR">cordoalha</option>
      <option value="BAR">barra</option>

    </select> </p>
    <p> <label>Tipo de aço:</label> 
      <select id="tipaco" name="tipaco" value={formData.tipaco} onChange={handleChange}>
      <option value="RN">relaxação normal</option>
      <option value="RB">relaxação baixa</option>

    </select> </p>
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