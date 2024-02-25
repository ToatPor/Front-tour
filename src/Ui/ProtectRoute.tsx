import { FC } from "react";
import { IChildren } from "./IUi/TGrid";
import { useIsAuth } from "../Features/Login/useIsAuth";
import { Navigate } from "react-router-dom";

export const ProtectRoute: FC<IChildren> = function (props) {
  const { user } = useIsAuth();
  const { children } = props;
  if (!user) return <Navigate to={"/overview"} />;
  return children;
};
