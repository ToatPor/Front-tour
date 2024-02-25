import { createContext, useContext } from "react";
import { Row } from "./Row";
import { ERow, IRow, IDirection } from "./IUi/TRow";
import { IChildren } from "./IUi/TGrid";

interface IRows extends IRow, IChildren {}
const RowContext = createContext({});

export const RowProvider: React.FC<IRows> = function (props) {
  const { children, $gap, color, direction } = props;
  return (
    <RowContext.Provider value={{ $gap, color, direction }}>
      {children}
    </RowContext.Provider>
  );
};

export const Rows: React.FC<IDirection> = function (prop) {
  const { children, isVertical, isClipPath } = prop;
  const { $gap, color } = useContext<IRow>(RowContext);
  return (
    <Row
      $gap={$gap}
      color={color}
      direction={isVertical ? ERow.vertical : ERow.horizontal}
      clipPath={isClipPath === "true" ? isClipPath : undefined}
    >
      {children}
    </Row>
  );
};
