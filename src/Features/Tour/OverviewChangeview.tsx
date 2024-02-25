import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";
import { useSearchParams } from "react-router-dom";

export const OverviewChangeView = function () {
  const map = useMap();
  const [searchParam] = useSearchParams();
  if (!searchParam.get("lat") && !searchParam.get("lng")) return;

  const getLocation = [
    Number(searchParam.get("lat")),
    Number(searchParam.get("lng")),
  ] as LatLngExpression;

  map.setView(getLocation, 10);
  return null;
};
