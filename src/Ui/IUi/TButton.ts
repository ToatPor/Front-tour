export enum ESize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum EVariation {
  primary = "primary",
  confirm = "confirm",
  danger = "danger",
}

export interface IButton {
  size: ESize;
  $variation?: EVariation;
  onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
}
