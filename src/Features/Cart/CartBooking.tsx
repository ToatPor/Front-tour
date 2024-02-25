import { GridHead, GridProvider } from "../../Ui/Grid";
import { PropRender } from "../../Ui/PropRender";
import { Spinners } from "../../Ui/Spinnes";
import CartBookingDetail from "./CartBookingDetail";
import { ICart } from "./ICart";
import useCart from "./useCart";

const CartBooking = () => {
  const { cart, isCart } = useCart();

  if (isCart) return <Spinners />;
  return (
    <GridProvider $columns=".6fr 1.25fr 1fr 1fr 1fr 1fr">
      <>
        <GridHead>
          <p>Image</p>
          <p>Tour Name</p>
          <p>Tour price</p>
          <p>Durations</p>
          <p>Location</p>
          <p>Date Departure</p>
        </GridHead>
        <PropRender<ICart>
          data={cart?.data.Bookings}
          render={(el: ICart, i: number) => (
            <CartBookingDetail cart={el} key={el._id + i} />
          )}
        />
      </>
    </GridProvider>
  );
};

export default CartBooking;
