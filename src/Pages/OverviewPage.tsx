import { useSearchParams } from "react-router-dom";
import { Overview } from "../Features/Tour/Overview";
import { StyledCardContainer } from "../Ui/Container";
import useCheckoutCart from "../Features/Tour/useCheckoutCart";
import { useEffect } from "react";

export const Overviews = function () {
  const [searchParam] = useSearchParams();
  const { createCart } = useCheckoutCart();

  //useEffect insert data twice check it again
  useEffect(
    function () {
      if (searchParam.size !== 3) return;
      createCart({
        tour: searchParam.get("tour") || undefined,
        user: searchParam.get("user") || undefined,
        price: Number(searchParam.get("price")) || undefined,
      });
      return () =>
        createCart({ tour: undefined, user: undefined, price: undefined });
    },

    [searchParam, createCart]
  );

  return (
    <StyledCardContainer>
      <Overview />
    </StyledCardContainer>
  );
};
