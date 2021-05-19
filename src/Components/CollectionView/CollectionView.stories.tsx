import * as React from "react";
import {Factory} from "../../ComponentsWithDynamic/Factory";

const Type = Factory("CollectionView");

const CollectionViewStory = () => (
  <Type
    themeType="LocationCards_CollectionView"
    name="LocationCards_CollectionView"
  />
);

export default {
  title: "ELEMENTS/CollectionView",
};

export const _CollectionView = CollectionViewStory.bind({});

_CollectionView.story = {
  name: "CollectionView",
};
