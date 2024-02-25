import React, { createContext, useContext } from "react";
import styled from "styled-components";
import { IGrid } from "./IUi/TGrid";

import PropTypes from "prop-types";

const GridContainer = styled.div<IGrid>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  grid-column-gap: 2.4rem;
  grid-row-gap: 4rem;
  transform: skewY(${(props) => props.skew || 0});
`;

const GridHeader = styled(GridContainer)`
  text-align: center;
  background-image: linear-gradient(
    to left bottom,
    var(--color-secondary),
    var(--color-primary)
  );
  color: var(--color-grey-100);
  padding: 1.2rem 3rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  grid-column-gap: 1rem;

  & :not(:last-child):where(p) {
    border-right: 0.1px solid var(--color-grey-100);
  }
`;

const GridBody = styled(GridContainer)`
  padding: 1.2rem 2.4rem;
  justify-items: center;
  grid-column-gap: 1rem;
  align-items: center;
  border-bottom: 0.5px solid var(--color-grey-200);

  &:nth-child(odd) {
    background-color: var(--color-grey-200);
  }

  & :where(p) {
    color: var(--color-grey-500);
  }
`;

const CardContext = createContext<IGrid>({
  $columns: undefined,
  children: undefined,
});

export const GridProvider: React.FC<IGrid> = function (props) {
  const { $columns, children } = props;
  return (
    <CardContext.Provider value={{ $columns }}>{children}</CardContext.Provider>
  );
};

export const Grid: React.FC<IGrid> = function (props) {
  const { children, skew } = props;
  const { $columns } = useContext(CardContext);

  return (
    <GridContainer $columns={$columns} skew={skew}>
      {children}
    </GridContainer>
  );
};

export const GridHead: React.FC<IGrid> = function (props) {
  const { children, skew } = props;
  const { $columns } = useContext(CardContext);

  return (
    <GridHeader $columns={$columns} skew={skew}>
      {children}
    </GridHeader>
  );
};

export const Gridbody: React.FC<IGrid> = function (props) {
  const { children, skew } = props;
  const { $columns } = useContext(CardContext);

  return (
    <GridBody $columns={$columns} skew={skew}>
      {children}
    </GridBody>
  );
};

GridProvider.propTypes = {
  $columns: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
