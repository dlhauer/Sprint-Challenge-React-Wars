import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import axios from 'axios';

const CharacterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState( Math.floor( Math.random() * 8 + 1) ); //set page to random number from 1 to 9

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)   
      .then( response => {
        // console.log(response.data.results);
        setCharacters(response.data.results);
        // console.log(characters);
      })
      .catch(error => console.log('Oh no! ', error));
  }, []);

  console.log(characters);
      
  return (

    <CharacterContainer>
      {/* <div className='entry'> */}
        { characters.map( (item, index) => {
          return <CharacterCard 
            key={index}
            name={item.name}
            birth={item.birth_year}
            gender={item.gender}
            mass={item.mass} />
        }) }
      {/* </div> */}
    </CharacterContainer>
  );
}

export default CharacterList;