import { IChildren } from "./TGrid";
export enum ERow {
  vertical = "vertical",
  horizontal = "horizontal",
}
export enum EGap {
  small = "small",
  medium = "medium",
  large = "large",
  veryLarge = "veryLarge",
}

export interface IRow extends IGap {
  direction?: ERow;
  clipPath?: string;
  color?: string;
  $column?: string;
}

export interface IGap {
  $gap?: EGap;
}

export interface IDirection extends IChildren {
  isVertical?: boolean;
  isClipPath?: string;
}
