import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import GitHubCorner from "../src/components/GitHubCorner/GitHubCorner";
import Background from "../src/components/Background/Background";
import Input from "../src/components/Inputs/Input";
import Head from "next/head";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Card = styled.div`
  width: 100%;
  min-width: 20rem;
  background-color: white;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
  font-size: 1.5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
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
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
        <title>Dojo - Iouu</title>
      </Head>
      <LoginContainer>
        <Card>
          <StyledForm onSubmit={handleSubmit}>
            <Title>BEM VINDO</Title>
            <Input
              onChange={(e) => {
                setUser(e.target.value.trimStart());
              }}
              placeholder="Usuário"
            ></Input>
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value.trimStart());
              }}
              placeholder="Senha"
            ></Input>
            <Button
              style={{ marginTop: "4rem" }}
              primary
              type="submit"
              text="LOGIN"
            ></Button>
          </StyledForm>
        </Card>
      </LoginContainer>
      <GitHubCorner projectUrl="https://github.com/venturions" />
    </Background>
  );
}
