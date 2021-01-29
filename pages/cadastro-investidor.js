import React, { useState, useCallback } from "react";
import Background from "../src/components/Background/Background";
import OutlinedInput from "../src/components/Inputs/OutlinedInput";
import Head from "next/head";
import Button from "../src/components/Button/Button";
import InputMask from "react-input-mask";

import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Grid = styled.div`
  display: flex;
  flex-direction: row;
`;

const GridReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 40rem;
  background-color: white;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
  font-size: 1.2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function RegisterEnterprise() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (
        nome !== "" &&
        cpf.replaceAll(".", "").replaceAll("-", "").replaceAll("_", "")
          .length === 11
      ) {
        const data = {
          nome: nome,
          cpf: cpf.replaceAll(".", "").replaceAll("-", ""),
        };
      }
    },
    [nome, cpf]
  );

  const ClearInputs = () => {
    setNome("");
    setCpf("");
  };

  return (
    //Se fosse em um caso real eu usaria uma imagem trabalhada e com menor tamanho para não necessitar de muitos dados móveis na hora de carregar a página//
    <Background backgroundImage="https://blog.easycredito.com.br/wp-content/uploads/2017/08/diferenca-emprestimo-financiamento-imoveis-1.png">
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
            <Title>Cadastrar Investidor</Title>

            <Grid
              style={{
                display: "flex",
                justifyContent: "left",
                paddingLeft: "3rem",
              }}
            >
              <OutlinedInput
                title="Nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value.trimStart());
                }}
              ></OutlinedInput>
              <div style={{ marginLeft: "3rem" }}>
                <InputMask
                  mask="999.999.999-99"
                  maskchar
                  value={cpf}
                  onChange={(e) => {
                    setCpf(e.target.value.trimStart());
                  }}
                >
                  {(inputProps) => <OutlinedInput title="CPF"></OutlinedInput>}
                </InputMask>
              </div>
            </Grid>
            <GridReverse>
              <Button primary type="submit" text="Cadastrar"></Button>
              <Button
                primary
                text="Limpar"
                onClick={() => {
                  ClearInputs();
                }}
              ></Button>
            </GridReverse>
          </StyledForm>
        </Card>
      </LoginContainer>
    </Background>
  );
}
