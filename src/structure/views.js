export const views = {
  Location_View: {
    position: "absolute",
    overflow: "hidden",
    top: "0",
    right: "0",
    width: "100%",
    height: "100%",
    background: "#eeeeee",
    renderChildren: [
      "LocationContent_LinearLayout",
      "LocationMap_LinearLayout",
    ],
  },

  LocationTab_View: {
    overflow: "hidden",
    top: "0",
    right: "0",
    height: "30%",
    background: "#FFFFFF",
    margin: 10,
    renderChildren: ["LocationTab_SegmentView"],
  },

  LocationMap_View: {
    top: "10%",
    left: "15%",
    width: "40%",
    height: "70%",
    background: "#2DA59D",
  },

  LocationCards_View: {
    direction: "column",
    overflow: "hidden",
    height: "70%",
    padding: 10,
    background: "#FFFFFF",
    margin: 10,
    renderChildren: ["LocationCards_CollectionView"],
  },

  LocationDelivery_View: {
    direction: "column",
    overflow: "hidden",
    height: "70%",
    padding: 10,
    background: "#cfc3d8",
    margin: 10,
    height: "20rem",
  },

  LocationDineIn_View: {
    direction: "column",
    overflow: "hidden",
    height: "70%",
    padding: 10,
    background: "#d7d8c3",
    margin: 10,
    height: "20rem",
  },

  LocationCard_View: {},

  LocationNav_View: {
    layout: null,
  },
  LocationBody_View: {
    layout: null,
  },
};
