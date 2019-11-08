import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: steelblue;
  padding: 10px;
  width: 220px;
  color: white;
  text-align: left;
  margin: 10px;
  border: 5px solid white;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;

  h2 {
    letter-spacing: 1px;
  }
`;

function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <p>Born in: {props.birth}</p>
      <p>Gender: {props.gender}</p>
      <p>Mass: {props.mass}</p>
    </Card>
  )
}

export default CharacterCard;