import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: 'absolute';
  z-index: 1;
  width: 100vw;
  box-shadow: 0 4px 2px -2px gray;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  height: 5rem;
  list-style: none;
`;
const Nav = styled.nav`
  background-color: #ffffff;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 50px;
  transition: background-position-x 0.9s linear;
  text-align: center;
`;

const Logo = styled(Li)`
  background: url('https://www.iouu.com.br/hubfs/raw_assets/public/IOUU_November2020/images/logo-green.svg')
    no-repeat left top;
`;

const A = styled.a`
  font-size: 1.4rem;
  color: #3b46c4;
  font-weight: 600;
  text-decoration: none;

  @media screen and (max-width: 1600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1300px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
  }

  &:hover {
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    color: rgb(65, 211, 189);
  }
`;

export default function StyledComponents(props) {
  return (
    <>
      <Container>
        <Nav>
          <Ul>
            <Logo
              onClick={() => {
                props.setStep(0);
              }}
            ></Logo>
            <Li>
              <A
                onClick={() => {
                  props.setStep(0);
                }}
              >
                Cadastro de Empresa
              </A>
            </Li>
            <Li>
              <A
                onClick={() => {
                  props.setStep(1);
                }}
              >
                Cadastro de Investidor
              </A>
            </Li>
            <Li>
              <A
                onClick={() => {
                  props.setStep(2);
                }}
              >
                Adicionar Investidor
              </A>
            </Li>
            <Li>
              <A
                onClick={() => {
                  props.setStep(3);
                }}
              >
                Empréstimos
              </A>
            </Li>
          </Ul>
        </Nav>
      </Container>
    </>
  );
}
