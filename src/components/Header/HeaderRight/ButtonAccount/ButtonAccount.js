import React, { useState } from "react";
import ButtonAccountHelp from "./ButtonAccountHelp/ButtonAccountHelp";
import ButtonAccountMenuWrapper from "./ButtonAccountMenuWrapper/ButtonAccountMenuWrapper";
import ButtonAccountWrapper from "./ButtonAccountWrapper/ButtonAccountWrapper";

const ButtonAccount = (props) => {
  // ----------Help Account
  const [helpAccountOpacity, setHelpAccountOpacity] = useState(0);
  const [helpAccountVisibility, setHelpAccountVisibility] = useState("hidden");

  const turnOnAccountHelp = () => {
    setHelpAccountOpacity(1);
    setHelpAccountVisibility("visible");
  };

  const turnOffAccountHelp = () => {
    setHelpAccountOpacity(0);
    setHelpAccountVisibility("hidden");
  };

  const toggleAccountHelp = (boolean) => {
    boolean ? turnOnAccountHelp() : turnOffAccountHelp();
  };

  //

  return (
    <>
      <ButtonAccountWrapper {...props} toggleAccountHelp={toggleAccountHelp} />
      <ButtonAccountHelp
        helpAccountOpacity={helpAccountOpacity}
        helpAccountVisibility={helpAccountVisibility}
      />
      <ButtonAccountMenuWrapper {...props} />
    </>
  );
};

export default ButtonAccount;
