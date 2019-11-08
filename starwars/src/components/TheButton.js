import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 10px;
  background-color: steelblue;
  color: white;
  border: 2px solid white;
  font-size: 1.6rem;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 20px;

  &:hover {
    color: steelblue;
    border: 2px solid steelblue;
    background-color: white;
  }
`;

function TheButton(props) {
  return(
    <StyledButton onClick={() => props.function(props.page)}>{props.text}</StyledButton>
  )
}

export default TheButton;