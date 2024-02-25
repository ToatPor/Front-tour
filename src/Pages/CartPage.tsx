import styled from "styled-components";
import CartBooking from "../Features/Cart/CartBooking";

const StyledCart = styled.div`
  background-color: var(--color-grey-0);
  height: 80vh;
`;

const CartPage = () => {
  return (
    <StyledCart>
      <CartBooking />
    </StyledCart>
  );
};

export default CartPage;
