import React from 'react';
import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';

const Input = styled(FormControl)`
  &:focus {
    border-color: rgb(65, 211, 189);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(65, 211, 189, 0.6);
  }
`;

export default function StyledComponents(props) {
  return (
    <>
      <Input {...props}></Input>
    </>
  );
}
