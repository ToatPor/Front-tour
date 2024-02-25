import { ITour } from "../../Services/IService/TCabin";

export interface IChildren {
  children?: React.ReactNode | React.ReactNode[];
}

export type IProtect = void;
export interface IGrid extends IChildren {
  skew?: string;
  $columns?: string;
}

export interface IProp {
  data: ITour[];
  render: (data: ITour) => React.ReactElement;
}
