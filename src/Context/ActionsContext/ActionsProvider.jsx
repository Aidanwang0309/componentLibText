import React, {useState} from "react";
import {ActionsContext} from "./ActionsContext";

const ActionsProvider = ({children}) => {
  const [buttonActions, setButtonActions] = useState({
    LocationCard_Button: () => console.log("enterMenu"),
  });

  const handleButtonClick = ({clickTarget, clickData}) => {
    return buttonActions[clickTarget]();
  };

  const pushButtonActions = (newActions) => {
    setButtonActions((prev) => {
      return {...prev, ...newActions};
    });
  };

  const contextValues = {
    handleButtonClick,
    pushButtonActions,
  };

  return (
    <ActionsContext.Provider value={contextValues}>
      {children}
    </ActionsContext.Provider>
  );
};

export {ActionsProvider};
