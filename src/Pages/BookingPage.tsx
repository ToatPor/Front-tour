import useRedirectStripe from "../Features/Stripe/useRedirectStripe";
import useSession from "../Features/Stripe/useSession";
import { Spinners } from "../Ui/Spinnes";

const BookingPage = () => {
  const { stripeResult } = useSession();
  useRedirectStripe(stripeResult?.data.session.id);
  return <Spinners />;
};

export default BookingPage;
