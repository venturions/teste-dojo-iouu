import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Background from "../src/components/Background/Background";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "../src/components/Button/FormButton";
import Row from "react-bootstrap/Row";

const filter = require("lodash.filter");

const CellButton = styled(Button)`
  height: 30px;
`;

const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: "absolute"; */
  z-index: 1;
  width: 100vw;
  z-index: 0;
  overflow: hidden;
`;

const Card = styled(Col)`
  background-color: white;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

export default function Lendings(props) {
  const [data, setData] = useState([]);
  const [teste, setTeste] = useState([]);

  const popover = (rowData) => {
    const setNames = () => {
      let aux = [];

      for (let i = 0; i < teste.length; i++) {
        aux.push(
          <Col xs={12} sm={12} md={12} lg={12}>
            {teste[i].investidor}
          </Col>
        );
      }
      return <>{aux}</>;
    };

    const setValues = () => {
      let aux = [];

      for (let i = 0; i < teste.length; i++) {
        aux.push(
          <Col xs={12} sm={12} md={12} lg={12}>
            {teste[i].valorMascara}
          </Col>
        );
      }
      return <>{aux}</>;
    };

    rowData;
    return (
      <Popover
        style={{ minWidth: "300px" }}
        className="mt-1"
        id="popover-basic"
      >
        <Popover.Content style={{ display: "flex" }}>
          <Container fluid>
            <Row xs={6} sm={6} md={6} lg={6}>
              {setNames()}
            </Row>
          </Container>
          <Container fluid>
            <Row xs={6} sm={6} md={6} lg={6}>
              {setValues()}
            </Row>
          </Container>
        </Popover.Content>
      </Popover>
    );
  };

  const columns = [
    {
      name: "Nome da Empresa",
      selector: "razaoSocial",
      sortable: true,
    },
    {
      name: "CNPJ",
      selector: "cnpj",
      sortable: true,
    },
    {
      name: "Valor requisitado",
      selector: "valorEmprestimo",
      sortable: true,
    },
    {
      name: "Valor alcançado",
      selector: (rowData) => {
        let aux = 0;
        let index = 0;

        for (index = 0; index < props.lendings.length; index++) {
          if (rowData.razaoSocial === props.lendings[index].razaoSocial) {
            console.log(props.lendings[index].valor);
            aux = aux + props.lendings[index].valor;
          }
        }

        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(aux);
      },
      sortable: true,
    },
    {
      button: true,
      cell: (rowData) => {
        rowData;
        return (
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover(rowData)}
          >
            <CellButton
              onClick={() => {
                setTeste(
                  filter(props.lendings, (obj) => {
                    return obj.razaoSocial === rowData.razaoSocial;
                  })
                );
              }}
            >
              Investidores
            </CellButton>
          </OverlayTrigger>
        );
      },
    },
  ];

  useEffect(() => {
    setData(props.enterprises);
  }, [props.enterprises]);

  return (
    <>
      <Background backgroundImage="https://blog.easycredito.com.br/wp-content/uploads/2017/08/diferenca-emprestimo-financiamento-imoveis-1.png">
        <LoginContainer>
          <Card xs={12} sm={12} md={12} lg={12}>
            <DataTable columns={columns} data={data}></DataTable>
          </Card>
        </LoginContainer>
      </Background>
    </>
  );
}
