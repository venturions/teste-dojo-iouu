import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 9rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid rgb(65, 211, 189);
  border-radius: 0.6em;
  color: #3b46c4;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 0.8em 1em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;

  &:hover,
  &:focus,
  &:active {
    color: black;
    outline: 0;
  }
`;

export default function StyledComponents(props) {
  return (
    <>
      <StyledButton {...props}>{props.text}</StyledButton>
    </>
  );
}
