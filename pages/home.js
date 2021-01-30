import React, { useState } from "react";
import Menu from "../src/components/Menu/Menu";

import RegisterEnterprise from "../pages/cadastro-empresa";
import RegisterInvestor from "../pages/cadastro-investidor";
import AddInvestor from "../pages/adicionar-investidor";
import Lendings from "../pages/emprestimos";

export default function Home() {
  const [step, setStep] = useState(0);

  const [enterprises, setEnterprises] = useState([]);
  const [investors, setInvestors] = useState([]);
  const [lendings, setLendings] = useState([]);

  const renderSwitch = () => {
    enterprises;
    switch (step) {
      case 0:
        return (
          <RegisterEnterprise
            setStep={setStep}
            enterprises={enterprises}
            setEnterprises={setEnterprises}
          ></RegisterEnterprise>
        );
      case 1:
        return (
          <RegisterInvestor
            investors={investors}
            setInvestors={setInvestors}
            setStep={setStep}
          ></RegisterInvestor>
        );
      case 2:
        return (
          <AddInvestor
            setStep={setStep}
            enterprises={enterprises}
            investors={investors}
            setLendings={setLendings}
            lendings={lendings}
          ></AddInvestor>
        );
      case 3:
        return (
          <Lendings
            setStep={setStep}
            enterprises={enterprises}
            investors={investors}
            setLendings={setLendings}
            lendings={lendings}
          ></Lendings>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Menu setStep={setStep}></Menu>
      {renderSwitch()}
    </>
  );
}
