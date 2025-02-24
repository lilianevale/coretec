import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
let links = ['./calc.txt'];



export default function Magnel(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({areabruta: "",distopo: "",disbase: "", inercia:"", tensmin:"", tensmax:"", fletor:""});
  const areabruta1=formData.areabruta;
  const distopo1=formData.distopo;
  const disbase1=formData.disbase;
  const inercia1=formData.inercia;
  const tensmin1=formData.tensmin;
  const tensmax1=formData.tensmax;
  const fletor1=formData.fletor;

console.log(formData.areabruta)

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
  function placeOrder(form){
    form.submit();
    const url = `/magnel`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ areabruta1, distopo1, disbase1, inercia1, tensmin1, tensmax1, fletor1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
}
function handleSubmit(e) {
  e.preventDefault();

   const url = `/magnel`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ areabruta1, distopo1, disbase1, inercia1, tensmin1, tensmax1, fletor1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/magnel`, {method:'GET'})
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
      <CDBBtn color="primary" href="TMagnel">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutotMagnel">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="Magnel">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    
  <form onSubmit={handleSubmit}>
  <br></br>

     <p> <label >Área bruta da seção transversal (cm²):</label>
      < input type="text" id="areabruta" name="areabruta" value={formData.areabruta} onChange={handleChange}/>
      </p> 
      <p> <label >Distância do topo da seção até o centro de gravidade (cm):</label>
      < input type="text" id="distopo" name="distopo" value={formData.distopo} onChange={handleChange}/>
      </p> 
      <p> <label >Distância da base da seção até o centro de gravidade (cm):</label>
      < input type="text" id="disbase" name="disbase" value={formData.disbase} onChange={handleChange}/>
      </p> 
      <p> <label >Inércia da seção transversal (cm⁴):</label>
      < input type="text" id="inercia" name="inercia" value={formData.inercia} onChange={handleChange}/>
      </p> 
      
      <p> <label >Tensão de mínima no concreto (MPa):</label>
      < input type="text" id="tensmin" name="tensmin" value={formData.tensmin} onChange={handleChange}/>
      </p> 
      <p> <label>Tensão de máxima no concreto (MPa):</label>
      < input type="text" id="tensmax" name="tensmax" value={formData.tensmax} onChange={handleChange}/>
      </p> 
      <p> <label>Momento fletor inicial combinado (kNm):</label>
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