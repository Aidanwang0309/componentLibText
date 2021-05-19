import {View} from "../Components/View";
import {LinearLayout} from "../Components/LinearLayout";
import {CollectionView} from "../Components/CollectionView";
import {Text} from "../Components/Text";
import {Button} from "../Components/Button";
import {SegmentView} from "../Components/SegmentView";
import {withView} from "./withView";
import {withText} from "./withText";
import {withLinearLayout} from "./withLinearLayout";
import {withCollectionView} from "./withCollectionView";
import {withButton} from "./withButton";
import {withSegmentView} from "./withSegmentView";

const typeMap = {
  LinearLayout: withLinearLayout(LinearLayout),
  View: withView(View),
  CollectionView: withCollectionView(CollectionView),
  Text: withText(Text),
  Button: withButton(Button),
  SegmentView: withSegmentView(SegmentView),
};

export const Factory = (type) => {
  const Type = typeMap[type];
  return Type;
};
