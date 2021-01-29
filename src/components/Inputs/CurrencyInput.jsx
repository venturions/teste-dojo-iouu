import React from "react";
import styled from "styled-components";
import IntlCurrencyInput from "react-intl-currency-input";

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

const Input = styled(IntlCurrencyInput)`
  color: #3b46c4;
  font-size: 1em;
  font-weight: 600;
  border: 2px solid #3b46c4;
  border-radius: 4px;
  margin-left: 1rem;
  padding: 0.5rem;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  padding-left: 16px;
  color: black;
`;

export default function StyledComponents(props) {
  return (
    <>
      <div>
        {props.title ? <Title>{props.title}</Title> : null}

        <Input currency="BRL" config={currencyConfig} {...props} />
      </div>
    </>
  );
}
