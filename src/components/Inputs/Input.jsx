import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 0.9rem;
  color: #9b9b9b;
`;

const StyledForm = styled.div`
  position: relative;
  padding: 15px 2rem 0 2rem;
  margin-top: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 1rem;
    cursor: text;
    top: 25px;
  }

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.9rem;
      color: #11998e;
    }
    padding-bottom: 6px;
    border-width: 3px;
    border-image: linear-gradient(to right, #7fd7dd, #6fd7df);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export default function StyledComponents(props) {
  return (
    <>
      <StyledForm>
        <StyledInput {...props} placeholder="asd"></StyledInput>
        <StyledLabel>{props.placeholder}</StyledLabel>
      </StyledForm>
    </>
  );
}
