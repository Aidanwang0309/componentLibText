import React from "react";
import {Factory} from "../../ComponentsWithDynamic/Factory";

export const LocationCard = () => {
  const Type = Factory("LinearLayout");

  return (
    <div>
      <Type
        themeType="LocationCard_LinearLayout"
        name="LocationCard_LinearLayout"
      />
    </div>
  );
};
