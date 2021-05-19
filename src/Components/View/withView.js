import {useActions} from "../../Context/ActionsContext/useActions";

const withView = (Component) => (props) => {
  // const {getCollectionData} = useData();
  // const [buttonType, component] = props.name.split("_");
  // const data = getCollectionData(buttonType, props.collectionUnit);

  // const {getStructureValue} = useDynamicUI();
  // const structureValues = getStructureValue(props.themeType);

  const {currentIndex} = useActions();

  // const isTabContent = props.name === "LocationCards_View";

  // const tabMap = {
  //   pickup: "LocationCards_View",
  //   delivery: "LocationDelivery_View",
  //   dinein: "LocationDineIn_View",
  // };

  // const notActive = isTabContent && props.name !== tabMap[currentIndex];

  // console.log(currentIndex, props.name, tabMap[currentIndex], notActive);

  return <Component {...props} />;
};

export {withView};
