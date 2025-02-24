  import React, { useState, useEffect } from "react";


 // <p>{data.name}</p>
   //             <p>{data.age}</p>
     //           <p>{data.date}</p>
       //         <p>{data.programming}</p>
function Contato() {

  const username = "John Doe";
  const email = "john@example.com";
  const teste="hello!";

  
  const url = `/foo`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, teste }),
  })
    .then((r) => r.json())
    .then((data) => console.log(data));

    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);


   // fetch(encodedInput, {
    //  method: "POST",
     // headers: {
      //  "Content-Type": "application/json",
      //},
     // body: JSON.stringify({ encodedInput }),
   // })
     // .then((r) => r.json())
     // .then((encodedInput) => console.log(encodedInput));



     

    return (
     
     <div> <h1>React and flask</h1>
     <p> Caso tenha alguma dúvida ou sugestão, entre em contato conosco através do nosso 
     <a href="mailto:someone@example.com?Subject=ola" target="_top"> email</a></p>

                {/* Calling a data from setdata for showing */}
                </div>
           
     
     
    );
}


export default Contato