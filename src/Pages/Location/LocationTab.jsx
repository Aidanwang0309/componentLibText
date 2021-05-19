import {useState, useEffect} from "react";
import {Factory} from "../../ComponentsWithDynamic/Factory";
import {useActions} from "../../Context/ActionsContext";

export const LocationTab = (props) => {
  const View = Factory("View");
  const {pushButtonActions} = useActions();
  const [currentIndex, setCurrentIndex] = useState("pickup");

  useEffect(() => {
    pushButtonActions({
      DeliveryTab_Button: () => setCurrentIndex("delivery"),
      PickupTab_Button: () => setCurrentIndex("pickup"),
      DineInTab_Button: () => setCurrentIndex("dineIn"),
    });
  }, []);

  const tabMap = {
    pickup: "LocationCards_View",
    delivery: "LocationDelivery_View",
    dineIn: "LocationDineIn_View",
  };

  return (
    <>
      <View themeType="LocationTab_View" name="LocationTab_View" />
      <View themeType={tabMap[currentIndex]} name={tabMap[currentIndex]} />
    </>
  );
};
