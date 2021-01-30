import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
// import Button from "../src/components/Button/Button";
import GitHubCorner from "../src/components/GitHubCorner/GitHubCorner";
import Background from "../src/components/Background/Background";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../src/components/Inputs/Input";

// import Box from './Box';

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Card = styled(Col)`
  background-color: white;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

const LoginArea = styled(Col)`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  background-color: rgb(65, 211, 189);
  border: none;

  &:hover,
  :focus,
  :active,
  :visited {
    background-color: rgb(33, 36, 127);
  }

  &:focus {
    border-color: rgb(33, 36, 127);
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(33, 36, 127, 0.6);
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
  font-size: 1.5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (user === "teste" && password === "1234") {
        router.push("/home");
      }
    },
    [user, password]
  );

  return (
    //Se fosse em um caso real eu usaria uma imagem trabalhada e com menor tamanho para não necessitar de muitos dados móveis na hora de carregar a página//
    <Background backgroundImage="https://previews.123rf.com/images/blackzheep/blackzheep1708/blackzheep170800034/84198940-computer-device-on-work-desk-top-view.jpg">
      <LoginContainer>
        <Col xs={2} sm={2} md={4} lg={4}></Col>
        <Card xs={8} sm={8} md={4} lg={4}>
          <StyledForm onSubmit={handleSubmit}>
            <Title>BEM VINDO</Title>
            {/* <Input
              
            ></Input> */}

            <InputGroup className="mb-4 mt-2 pl-4 pr-4">
              <Input
                onChange={(e) => {
                  setUser(e.target.value.trimStart());
                }}
                placeholder="Usuário"
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-4 mt-2 pl-4 pr-4">
              <Input
                onChange={(e) => {
                  setPassword(e.target.value.trimStart());
                }}
                placeholder="Senha"
                type="password"
              />
            </InputGroup>
            <Row>
              <Col xs={2} sm={2} md={3} lg={3}></Col>
              <LoginArea xs={8} sm={8} md={6} lg={6}>
                <LoginButton className="mb-3" type="submit" variant="primary">
                  LOGIN
                </LoginButton>
              </LoginArea>
              <Col xs={2} sm={2} md={3} lg={3}></Col>
            </Row>
          </StyledForm>
        </Card>
        <Col xs={2} sm={2} md={4} lg={4}></Col>
      </LoginContainer>
      <GitHubCorner projectUrl="https://github.com/venturions" />
    </Background>
  );
}
