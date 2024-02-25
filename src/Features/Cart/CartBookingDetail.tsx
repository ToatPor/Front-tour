import { format } from "date-fns";
import { Gridbody } from "../../Ui/Grid";
import { Image } from "../../Ui/Image";
import { FC } from "react";
import { TCart } from "./ICart";
import { formatCurrency } from "../../Utilities/formatCurrency";

const CartBookingDetail: FC<TCart> = (props) => {
  const { cart } = props;
  return (
    <Gridbody>
      <Image
        src={`${import.meta.env.VITE_URL}/img/Tours/${cart?.imageCover}`}
        height="100%"
        width="100%"
      />
      <p>{cart?.name}</p>
      <p>{formatCurrency(cart?.price)}</p>
      <p>{cart?.duration} Days</p>
      <p>{cart?.startLocation.description}</p>
      <p>{format(new Date(cart?.startDates[0]), "dd MMM yy")}</p>
    </Gridbody>
  );
};

export default CartBookingDetail;
