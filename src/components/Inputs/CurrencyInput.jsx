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
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: rgb(65, 211, 189);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(65, 211, 189, 0.6);
  }
  outline: none !important;
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
