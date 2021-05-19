export const buttons = {
  LocationOrder_Button: {
    padding: [5, 8, 5, 8],
    fontSize: 16,
    fontWeight: 500,
    // width:"100%",
    // height:
  },
  LocationCard_Button: {
    padding: [8, 13, 8, 13],
    background: "#fac623",
    renderChildren: ["LocationCardButtonLabel_Text"],
  },
  DeliveryTab_Button: {
    padding: [5, 8, 5, 8],
    width: "33%",
    renderChildren: ["LocationTabDeliveryButtonLabel_Text"],
  },
  PickupTab_Button: {
    padding: [5, 8, 5, 8],
    fontSize: 16,
    width: "33%",
    fontWeight: 500,
    renderChildren: ["LocationTabPickupButtonLabel_Text"],
  },
  DineInTab_Button: {
    padding: [5, 8, 5, 8],
    fontSize: 16,
    width: "33%",
    fontWeight: 500,
    renderChildren: ["LocationTabDineInButtonLabel_Text"],
  },
};
