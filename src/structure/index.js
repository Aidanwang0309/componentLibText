import {linearLayouts} from "./linearLayouts";
import {views} from "./views";
import {collectionViews} from "./collectionViews";
import {buttons} from "./buttons";
import {texts} from "./texts";
import {segmentViews} from "./segmentViews";

const dynamicUI = {
  views,
  linearLayouts,
  collectionViews,
  buttons,
  texts,
  segmentViews,
};

class Structure {
  constructor(structureData) {
    this.views = structureData.views;
    this.linearLayouts = structureData.linearLayouts;
    this.collectionViews = structureData.collectionViews;
    this.texts = structureData.texts;
    this.buttons = structureData.buttons;
    this.segmentViews = structureData.segmentViews;
  }
}

export {Structure, dynamicUI};
