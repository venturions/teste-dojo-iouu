import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  width: 100%;
  height: 40px;
  background-color: #41d3bd;
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  border: none;

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export default function StyledComponents(props) {
  return (
    <>
      <Button {...props} />
    </>
  );
}
