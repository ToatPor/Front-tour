import { IChildren } from "./TGrid";

export interface Iimage {
  height?: string;
  radius?: string;
  width?: string;
  $margin?: string;
  $index?: number;
}

export interface IImageProvider extends IChildren, Iimage {}
