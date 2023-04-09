import React from "react";
import { ReactComponent as IncomeSvg } from "./income.svg";
import { ReactComponent as SpendingSvg } from "./spending.svg";
import { ReactComponent as WalletSvg } from "./wallet.svg";
import { ReactComponent as SunSvg } from "./sun.svg";
import { ReactComponent as MoonSvg } from "./moon.svg";
import { ReactComponent as PlusSvg } from "./plus.svg";

const Icons = () => {
  return {
    income: <IncomeSvg />,
    expense: <SpendingSvg />,
    wallet: <WalletSvg />,
    sun: <SunSvg />,
    moon: <MoonSvg />,
    plus: <PlusSvg />,
  };
};

export default Icons;
