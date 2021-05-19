export const linearLayouts = {
  LocationTab_LinearLayout: {
    direction: "column",
    padding: 10,
    height: "30%",
    width: "100%",
    background: "#FFFFFF",
  },

  //stop at LocationContent_LinearLayout
  LocationContent_LinearLayout: {
    position: "absolute",
    right: "3%",
    top: "0%",
    direction: "column",
    padding: 10,
    width: "40%",
    height: "100%",
    background: "#FFC1F5",
    // renderChildren: ["LocationTab_View", "LocationCards_View"],
  },

  LocationMap_LinearLayout: {
    position: "absolute",
    direction: "column",
    padding: 10,
    top: "10%",
    left: "15%",
    background: "#2DA59D",
    width: "40%",
    height: "70%",
    renderChildren: [],
  },

  LocationCards_LinearLayout: {
    direction: "column",
    height: "100%",
    renderChildren: ["LocationCard_View"],
  },

  LocationCardTitle_LinearLayout: {
    direction: "row",
    width: "100%",
    align: "center",
    justify: "space-between",
    renderChildren: ["LocationCardTitle_Text", "LocationCard_Button"],
  },

  LocationCardInfo_LinearLayout: {
    direction: "column",
    renderChildren: [
      "LocationCardPhone_Text",
      "LocationCardAddress1_Text",
      "LocationCardAddress2_Text",
    ],
  },

  LocationCardTop_LinearLayout: {
    direction: "column",
    padding: [15, 15, 15, 15],
    renderChildren: [
      "LocationCardTitle_LinearLayout",
      "LocationCardInfo_LinearLayout",
    ],
  },

  LocationCardBottom_LinearLayout: {
    direction: "column",
    padding: [15, 15, 15, 15],
    renderChildren: [],
    height: "7rem",
    background: "#c3d7d8",
  },

  LocationCard_LinearLayout: {
    direction: "column",
    background: "#f5f5f5",
    renderChildren: [
      "LocationCardTop_LinearLayout",
      "LocationCardBottom_LinearLayout",
    ],
  },
};

// "LocationHeader_Text",
// "LocationPhone_Text",
// "LocationAddress1_Text",
// "LocationAddress2_Text",
