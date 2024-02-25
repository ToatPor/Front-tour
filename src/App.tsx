import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Ui/Applayout";
import { GlobalStyled } from "./Styles/GlobalStyles";
import { Overviews } from "./Pages/OverviewPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OverviewTourPage } from "./Pages/OverviewTourPage";
import InformationPage from "./Pages/InformationPage";
import { ProtectRoute } from "./Ui/ProtectRoute";
import AccountSetting from "./Features/Information/AccountSetting";
import AppLayoutLogin from "./Ui/AppLayoutLogin";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import VerifyUser from "./Pages/VerifyUser";
import BookingPage from "./Pages/BookingPage";
import CartPage from "./Pages/CartPage";

function App() {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 0,
      },
    },
    //stale inside react query mean data was old
    //when we change tab or do thing will auto refresh data
    //other use will sync with data
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="overview" element={<Overviews />} />
            <Route path="overview/:id" element={<OverviewTourPage />} />
            <Route index element={<Navigate replace to="overview" />} />
            <Route
              element={
                <ProtectRoute>
                  <InformationPage />
                </ProtectRoute>
              }
            >
              <Route path="information" element={<AccountSetting />} />
              <Route path="bookings" element={<CartPage />} />
            </Route>
          </Route>
          <Route
            path="booking/:id"
            element={
              <ProtectRoute>
                <BookingPage />
              </ProtectRoute>
            }
          />

          {/* any route that use appLayoutlogin will visit login first */}
          <Route element={<AppLayoutLogin />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="verifyUser" element={<VerifyUser />} />
            <Route index element={<Navigate replace to="login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer transition={Slide} autoClose={2000} />
    </QueryClientProvider>
  );
}

export default App;
