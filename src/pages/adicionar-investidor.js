import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Background from '../components/Background/Background';
import CurrencyInput from '../components/Inputs/CurrencyInput';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Select from '../components/Select/Select';
import Button from '../components/Button/FormButton';
import { useSnackbar } from 'notistack';

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Typography = styled.h6`
  font-size: 1rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
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

export default function addInvestor(props) {
  const [valorMascara, setValorMascara] = useState(0);
  const [value, setValue] = useState(0);
  const [enterprise, setEnterprise] = useState('');
  const [investor, setInvestor] = useState('');

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

  const handleChange = (event, value, valorMascara) => {
    setValorMascara(valorMascara);
    setValue(value);
    value;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const aux = [];

      if (props.lendings.length !== 0) {
        for (let i = 0; i < props.lendings.length; i++) {
          aux.push(props.lendings[i]);
        }
      }

      if (enterprise !== '' && investor !== '' && valorMascara !== 0) {
        aux.push({
          investidor: investor,
          razaoSocial: enterprise,
          valorMascara: valorMascara,
          valor: value,
        });

        props.setLendings(aux);
        props.setStep(3);

        setNotification('Investimento feito com sucesso.', 'success');
      } else {
        setNotification('Preencha todos os campos corretamente.', 'error');
      }
    },
    [valorMascara, investor, enterprise, props.lendings]
  );

  return (
    //Se fosse em um caso real eu usaria uma imagem trabalhada e com menor tamanho para não necessitar de muitos dados móveis na hora de carregar a página//
    <Background backgroundImage="https://blog.easycredito.com.br/wp-content/uploads/2017/08/diferenca-emprestimo-financiamento-imoveis-1.png">
      <LoginContainer>
        <Col xs={1} sm={1} md={1} lg={3}></Col>
        <Card xs={10} sm={10} md={10} lg={6}>
          <StyledForm onSubmit={handleSubmit}>
            <Title>Adicionar investidor ao empréstimo</Title>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Form.Label>Selecione o investidor</Form.Label>
              <Select
                as="select"
                onChange={(e) => {
                  setInvestor(e.target.value);
                }}
                disabled={props.investors.length === 0}
              >
                <option hidden>Escolha um</option>
                {props.investors &&
                  props.investors.map((e, key) => {
                    return (
                      <option key={key} value={e.nome}>
                        {e.nome}
                      </option>
                    );
                  })}
              </Select>
            </Col>
            <Col className="mt-4" xs={12} sm={12} md={12} lg={12}>
              <Form.Label>Selecione a Empresa</Form.Label>
              <Select
                as="select"
                value={enterprise}
                onChange={(e) => {
                  setEnterprise(e.target.value);
                }}
                disabled={props.enterprises.length === 0}
              >
                <option hidden>Escolha um</option>
                {props.enterprises &&
                  props.enterprises.map((e, key) => {
                    return (
                      <option key={key} value={e.razaoSocial}>
                        {e.razaoSocial}
                      </option>
                    );
                  })}
              </Select>
            </Col>
            <Col className="mt-4" xs={12} sm={12} md={12} lg={12}>
              <Typography>
                Valor que o investidor irá aportar no empréstimo selecionado:
              </Typography>
              <CurrencyInput
                value={valorMascara}
                onChange={handleChange}
              ></CurrencyInput>
            </Col>
            <Row>
              <Col xs={2} sm={2} md={2} lg={2}></Col>
              <Col xs={8} sm={8} md={8} lg={8}>
                <Button type="submit" className="mb-4 mt-4">
                  Investir
                </Button>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}></Col>
            </Row>
          </StyledForm>
        </Card>

        <Col xs={1} sm={1} md={1} lg={3}></Col>
      </LoginContainer>
    </Background>
  );
}
