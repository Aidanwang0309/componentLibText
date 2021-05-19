import React from "react";
import * as DynamicUIContext from "../src/DynamicUI/Contexts";
import * as ActionsContext from "../src/Context/ActionsContext";
import * as DataContext from "../src/Context/DataContext";

import "../src/global.scss";

const withThemeProvider = (Story, context) => {
  return (
    <DataContext.DataProvider>
      <ActionsContext.ActionsProvider>
        <DynamicUIContext.DynamicUIProvider>
          <Story {...context} />
        </DynamicUIContext.DynamicUIProvider>
      </ActionsContext.ActionsProvider>
    </DataContext.DataProvider>
  );
};

export const decorators = [withThemeProvider];
