import React, {useState} from "react";
import {DataContext} from "./DataContext";

const defaultCollectionStringMap = {
  LocationCardTitle: ["Loc 1", "Loc 2"],
  LocationCardPhone: ["718-777-7011", "718-777-7011"],
  LocationCardAddress1: ["33-21 31st Ave,", "715 Peachtree St NE,Suite 102,"],
  LocationCardAddress2: ["Long Island City, NY 11103", "Atlanta, GA 30308  "],
  LocationCardButtonLabel: ["ORDER", "PREORDER"],
};

const TextLabelMap = {
  LocationCardTitle: "Loc 1",
  LocationCardPhone: "718-777-7011",
  LocationCardAddress1: "33-21 31st Ave,",
  LocationCardAddress2: "Long Island City, NY 11103",
  LocationCardButtonLabel: "ORDER",
  LocationTabDeliveryButtonLabel: "Delivery",
  LocationTabPickupButtonLabel: "Pickup",
  LocationTabDineInButtonLabel: "Kiosk",
};

const DataProvider = ({children}) => {
  const [CollectionStringMap, setCollectionStringMap] = useState(
    defaultCollectionStringMap
  );

  const getCollectionLabelString = (collectionType, collectionUnit) => {
    return CollectionStringMap[collectionType][collectionUnit];
  };

  const getLabelString = ({labelKey, collectionUnit}) => {
    return collectionUnit != null
      ? getCollectionLabelString(labelKey, collectionUnit)
      : TextLabelMap[labelKey];
  };

  const contextValues = {
    getLabelString,
    CollectionStringMap,
    setCollectionStringMap,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};

export {DataProvider};
