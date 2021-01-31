import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Background from '../components/Background/Background';
import InputMask from 'react-input-mask';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from '../components/Button/FormButton';
import Input from '../components/Inputs/Input';
import ClearButton from '../components/Button/ClearButton';
import { useSnackbar } from 'notistack';

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Card = styled(Col)`
  background-color: white;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => {
    return theme.colors.primary;
  }};

  @media only screen and (max-width: 1200px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.5rem;
  }
`;

export default function RegisterInvestor(props) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  //Notificacao

  const { enqueueSnackbar } = useSnackbar();

  const setNotification = useCallback(
    (message, variant) => {
      enqueueSnackbar(message, {
        variant: variant,
      });
    },
    [enqueueSnackbar]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const aux = [];

      if (props.investors.length !== 0) {
        for (let i = 0; i < props.investors.length; i++) {
          aux.push(props.investors[i]);
        }
      }

      if (
        nome !== '' &&
        cpf.replaceAll('.', '').replaceAll('-', '').replaceAll('_', '')
          .length === 11
      ) {
        aux.push({
          nome: nome,
          cpf: cpf,
        });

        props.setInvestors(aux);
        props.setStep(2);
      } else {
        setNotification(`Preencha todos os campos corretamente.`, 'error');
      }
    },
    [nome, cpf, props.investors]
  );

  const ClearInputs = () => {
    setNome('');
    setCpf('');
  };

  return (
    //Se fosse em um caso real eu usaria uma imagem trabalhada e com menor tamanho para não necessitar de muitos dados móveis na hora de carregar a página//
    <Background backgroundImage="https://blog.easycredito.com.br/wp-content/uploads/2017/08/diferenca-emprestimo-financiamento-imoveis-1.png">
      <LoginContainer>
        <Col xs={2} sm={2} md={2} lg={4}></Col>
        <Card xs={8} sm={8} md={8} lg={4}>
          <StyledForm onSubmit={handleSubmit}>
            <Title>Cadastrar investidor</Title>
            <InputGroup className="mb-4 mt-2 pl-4 pr-4">
              <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value.trimStart());
                }}
              />
            </InputGroup>
            <InputGroup className="mb-4 mt-2 pl-4 pr-4">
              <InputMask
                mask="999.999.999-99"
                maskchar
                value={cpf}
                onChange={(e) => {
                  setCpf(e.target.value.trimStart());
                }}
              >
                {() => {
                  return <Input placeholder="CPF"></Input>;
                }}
              </InputMask>
            </InputGroup>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <ClearButton onClick={ClearInputs} className="mb-4 mt-4">
                  Limpar
                </ClearButton>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Button type="submit" className="mb-4 mt-4">
                  Cadastrar
                </Button>
              </Col>
            </Row>
          </StyledForm>
        </Card>
        <Col xs={2} sm={2} md={2} lg={4}></Col>
      </LoginContainer>
    </Background>
  );
}
