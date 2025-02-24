import React, { useState, useEffect, useRef } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import teste from './teste.png'
import Figure from 'react-bootstrap/Figure'; 
let links = ['./calc.txt'];



export default function CalcTensaoElastica(){
  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({viga: "", iviga: "",distanciatopo: "", distancia:"", excentricidade:"", protensao:"", fletor:""});
  const viga1=formData.viga;
  const iviga1=formData.iviga;
  const distanciatopo1=formData.distanciatopo;
  const distancia1=formData.distancia;
  const excentricidade1=formData.excentricidade;
  const protensao1=formData.protensao;
  const fletor1=formData.fletor;

  


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
 
function handleSubmit(e) {
  e.preventDefault();

   const url = `/tensaoelastica`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ viga1 ,iviga1 , distanciatopo1, distancia1, excentricidade1, protensao1, fletor1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}



const [data2, setdata] = useState('');




 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/tensaoelastica`, {method:'GET'})
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
      <CDBBtn color="primary" href="Ancoragem">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutotAncoragem">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcTensaoElastica">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
    
  <form onSubmit={handleSubmit}>
  <br></br>

     <p> <label >Área da seção transversal da viga (cm²):</label>
      < input type="text" id="viga" name="viga" value={formData.viga} onChange={handleChange}/>
      </p> 
      <p> <label >Inércia da viga (cm⁴):</label>
      < input type="text" id="iviga" name="iviga" value={formData.iviga} onChange={handleChange}/>
      </p> 
       
      <p> <label >Distância do topo da seção até o centro de gravidade (cm):</label>
      < input type="text" id="distanciatopo" name="distanciatopo" value={formData.distanciatopo} onChange={handleChange}/>
      </p> 
      
      <p> <label >Distância da base da seção até o centro de gravidade (cm):</label>
      < input type="text" id="distancia" name="distancia" value={formData.distancia} onChange={handleChange}/>
      </p> 
      <p> <label>Excentricidade de protensão (cm):</label>
      < input type="text" id="excentricidade" name="excentricidade" value={formData.excentricidade} onChange={handleChange}/>
      </p> 
      <p> <label>Valor da protensão de cálculo na seção (kN):</label>
      < input type="text" id="protensao" name="protensao" value={formData.protensao} onChange={handleChange}/>    </p>  
      
      <p> <label>Momento fletor de cálculo (kNm):</label>
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
          <Figure> 
        <Figure.Image 
          width={500} 
          height={500} 
          alt="200x200"
src={teste}
        /> 
        
      </Figure>
   
        </div>
      </Collapse>   

    </CDBContainer>
   
    </div>

 
  );
} 