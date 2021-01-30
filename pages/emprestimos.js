import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Background from "../src/components/Background/Background";

const merge = require("lodash.merge");

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
    selector: "valor",
    sortable: true,
  },
];

export default function Lendings(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(merge(props.lendings, props.investors, props.enterprises));
  }, [props.lendings]);

  return (
    <>
      <Background backgroundImage="https://blog.easycredito.com.br/wp-content/uploads/2017/08/diferenca-emprestimo-financiamento-imoveis-1.png">
        <LoginContainer>
          <Col xs={2} sm={2} md={2} lg={2}></Col>
          <Card xs={10} sm={10} md={10} lg={10}>
            <DataTable columns={columns} data={data}></DataTable>
          </Card>
          <Col xs={2} sm={2} md={2} lg={2}></Col>
        </LoginContainer>
      </Background>
    </>
  );
}
