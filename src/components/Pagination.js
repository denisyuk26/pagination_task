import React from "react";
import styled from "styled-components";


export default function Pagination(props) {
  return (
    <ButtonsContainer>
      {[...Array(props.pageCount).keys()].map(item => (
        <Button
          onClick={() => {
            props.handleCurrentPage(item + 1);
          }}
          key={item}
          
        >
          {item + 1}
        </Button>
      ))}
    </ButtonsContainer>
  );
}

//styles
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
`;
const Button = styled.button`
  width: 6vw;
  background: #1f3242;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  :hover,
  :active,
  :focus {
    background: #5e5e5e;
  }
`;
