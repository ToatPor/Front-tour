import React from "react";

interface IPropRender<T> {
  data: T[];
  render: (val: T, i: number) => React.ReactElement;
}

export const PropRender = function <T>(props: IPropRender<T>) {
  const { data, render } = props;
  if (!data.length) return <p>No data to show at this moment</p>;

  return <>{data?.map(render)}</>;
};

export interface IGuide {
  _id: string;
  name: string;
  role: string;
  photo: string;
}
