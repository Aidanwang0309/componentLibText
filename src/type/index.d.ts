export type PolymorphicType =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;

export type A11yTitleType = string;
export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type AlignContentType =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | "stretch";
export type AlignSelfType = "start" | "center" | "end" | "stretch";
export type AnimateType = boolean;
export type BasisType =
  | 'xxs'
  | 'xs'
  | 's'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'full'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | 'auto'
  | string;
export type BorderType =
  | 'horizontal'
  | 'vertical'
  | 'left'
  | 'top'
  | 'right'
  | "bottom";
export type ElevationType = "none" | "xs" | "s" | "md" | "lg" | "xl" | string;
export type FillType = "horizontal" | "vertical" | boolean;
export type GapType = "none" | "xxs" | "xs" | "s" | "md" | "lg" | "xl" | string;
export type GridAreaType = string;
export type JustifyContentType =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | "stretch";
export type KeyboardType = (event: React.KeyboardEvent<HTMLElement>) => void;
export type MarginType =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'md'
  | 'lg'
  | 'xl'
  | {
      bottom?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      horizontal?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      left?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      right?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      top?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      vertical?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
    }
  | string;
export type OpacityType =
  | 'weak'
  | 'md'
  | 'strong'
  | string
  | true
  | false
  | number;
export type PadType =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'md'
  | 'lg'
  | 'xl'
  | {
      bottom?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      horizontal?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      left?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      right?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      top?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
      vertical?: 'xxs' | 'xs' | 's' | 'md' | 'lg' | 'xl' | string;
    }
  | string;
export type PlaceHolderType = string | JSX.Element | React.ReactNode;
export type TextAlignType = "start" | "center" | "end";
export type DirectionType =
  | 'row'
  | 'column'
  | 'row-responsive'
  | 'row-reverse'
  | 'column-reverse';
export type GirdType = {
  xs?: string | object;
  sm?: string | object;
  md?: string | object;
  lg?: string | object;
  xl?: string | object;
  xxl?: string | object;
};
