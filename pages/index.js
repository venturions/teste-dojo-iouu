import React, { useState } from "react";
import styled from "styled-components";
import Button from "../src/components/Button/Button";
import GitHubCorner from "../src/components/GitHubCorner/GitHubCorner";
import Background from "../src/components/Background/Background";
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
  /* width: 100%; */
  min-width: 400px;
  background-color: white;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
  font-size: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    //Se fosse em um caso real eu usaria uma imagem trabalhada e com menor tamanho para não necessitar de muitos dados móveis na hora de carregar a página//
    <Background backgroundImage="https://previews.123rf.com/images/blackzheep/blackzheep1708/blackzheep170800034/84198940-computer-device-on-work-desk-top-view.jpg">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Dojo - Iouu</title>
      </Head>
      <LoginContainer>
        <Card>
          <Title>BEM VINDO</Title>
          <Button
            onClick={(e) => {
              console.log("asd");
            }}
            primary
            text="LOGIN"
          ></Button>
        </Card>
      </LoginContainer>
      <GitHubCorner projectUrl="https://github.com/venturions" />
    </Background>
  );
}
