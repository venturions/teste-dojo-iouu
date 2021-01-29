import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: "1em",
}))`
  color: #3b46c4;
  font-size: 1em;
  font-weight: 600;
  border: 2px solid #3b46c4;
  border-radius: 4px;

  margin: ${(props) => props.size};
  padding: 0.5rem;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2rem;
  font-size: 1rem;
  padding-left: 16px;
  color: black;
`;

export default function StyledComponents(props) {
  return (
    <>
      <div>
        {props.title ? <Title>{props.title}</Title> : null}

        <Input {...props} />
      </div>
    </>
  );
}
