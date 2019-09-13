import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./CharCard"
import {Container, Row} from "reactstrap"

let page;

for(let i = 1; page > 10; page++){
        
    page++;
}

export default function Characters(){

    const [chars, setChars] = useState("");
    
    const pages = [1,2,3,4,5,6,7,8,9];
    
  
    

    useEffect(()=>{

        
 
        axios
        .get(`https://swapi.co/api/people/?page=1`)



        .then(response=>{
            
            const starChars = Object.values(response.data.results);
            setChars(starChars); 
        })

        .catch(error=>{
            console.log("Something went wrong -->", error)
        });
    },[])

    return(
        <Container>
            <Row>
                {Object.values(chars).map((person,i)=>{
                    console.log(person);
                    return <CharCard key={person.id} name={person.name} gender={person.gender} birth_year={person.birth_year} height={person.height} mass={person.mass}/>;
                })}
            </Row>
            
        </Container>

        
    )
    
}

