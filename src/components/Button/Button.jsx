import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;

  cursor: pointer;
  display: block;
  margin: 30px auto;
  padding: 7px 14px;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.secondary.main
      : props.theme.colors.primary.main};

  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary.main
      : props.theme.colors.secondary.main};

  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.colors.secondary.dark
        : props.theme.colors.primary.dark};
  }

  &:before {
    content: "";

    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export default function StyledComponents(props) {
  return (
    <>
      <StyledButton {...props}>{props.text}</StyledButton>
    </>
  );
}
