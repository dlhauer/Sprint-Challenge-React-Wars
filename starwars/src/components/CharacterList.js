import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import TheButton from './TheButton';
import axios from 'axios';

const CharacterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function getRandPageNumber() {
  return Math.floor( Math.random() * 8 + 1)
}

function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState( getRandPageNumber() ); //set page to random number from 1 to 9

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)   
      .then( response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.log('Oh no! ', error));
  },[page]);

  // console.log(characters);
      
  return (
    <div>
      <TheButton function={setPage} page={getRandPageNumber} text='Click for a random page of characters!'></TheButton>
      <CharacterContainer>
          { characters.map( (item, index) => {
            return <CharacterCard 
              key={index}
              name={item.name}
              birth={item.birth_year}
              gender={item.gender}
              mass={item.mass} />
          }) }
      </CharacterContainer>
    </div>
  );
}

export default CharacterList;