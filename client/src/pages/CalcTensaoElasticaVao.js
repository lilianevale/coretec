import React, { useState, useEffect, useRef, Component } from "react";
import { CDBCollapse, CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import * as XLSX from "xlsx";


//import "./styles.css";

const fileTypes = ["CSV", "XLSX"];


export default function CalcTensaoElasticaVao(){
  const [open, setOpen] = useState(false);


  const [file, setFile] = useState(null);
  /*const handlerChange = (file) => {
    setFile(file);

  };*/

  const handlerChange = (file) => {
    if (file && file.length > 0) {
      setFile(file[0]); // Armazena o primeiro arquivo do FileList
    } else {
      setFile(null); // Caso não haja arquivo, define como null
    }
  };

  let links = [{file}];

  const [formData, setFormData] = useState({viga: "", iviga: "",distanciatopo: "", distancia:"", arq:""});
  const viga1=formData.viga;
  const iviga1=formData.iviga;
  const distanciatopo1=formData.distanciatopo;
  const distancia1=formData.distancia;
  const arq1=file;

  //console.log(arq1)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    
  };
 /*
function handleSubmit(e) {
  e.preventDefault();

   const url = `/tensaoelasticavao`;
   fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ viga1 ,iviga1 , distanciatopo1, distancia1, arq1 }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));

           
  
}*/
function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("viga1", viga1);
  formData.append("iviga1", iviga1);
  formData.append("distanciatopo1", distanciatopo1);
  formData.append("distancia1", distancia1);
  formData.append("arq1", file); // Adiciona o arquivo ao FormData
  console.log(viga1);
  console.log(iviga1);
  console.log(distanciatopo1);
  console.log(distancia1);



  const url = `/tensaoelasticavao`;
  fetch(url, {
    method: "POST",
    body: formData, // Envia o FormData
  })
    .then((r) => r.json())
    .then((data) => console.log(data)) 
    .catch((error) => console.error("Error:", error));
}



const [data2, setdata] = useState('');

const [data, setData] = useState([]);
  const handleFileLoad = (xlsxData) => {
    setData(xlsxData);
  };

 // Using useEffect for single rendering
 useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  fetch(`/tensaoelasticavao`, {method:'GET'})
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
console.log({texts})

const [selectedFile, setSelectedFile] = useState();
const [isFilePicked, setIsFilePicked] = useState(false);

const changeHandler = (event) => {
    setSelectedFile(event.target.files[0].name);
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = async (event) => { 
          const text = (event.target.result)
          console.log("aqui",text)
          alert(text)
        };
        reader.readAsText(event.target.files[0])
      
    
};

console.log(selectedFile)


function clickMe () {
    alert(data2)

}
const handleSubmission = () => {
    
};
  return (
    
<div>
<CDBContainer>
      <CDBBtnGrp>
      <CDBBtn color="primary" href="TTensaoElasticaVao">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutoTensaoElasticaVao">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="CalcTensaoElasticaVao">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
   <br></br>
   <br></br>

    <Button variant="outline-secondary" href="./tensoes_protensao.xlsx">Baixar Planilha Exemplo</Button> 

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
      <h3> <label>Selecione o arquivo com os dados da peça de concreto protendido
:</label>
      </h3> 
      <FileUploader
        multiple={true}
        handleChange={handlerChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
          
      
<br></br>
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