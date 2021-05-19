import {Factory} from "../../ComponentsWithDynamic/Factory";

export const Location = (props) => {
  const Type = Factory("View");

  return (
    <div>
      <Type themeType="Location_View" name="Location_View"></Type>
    </div>
  );
};
