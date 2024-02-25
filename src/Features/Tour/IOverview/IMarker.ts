import { Icon, LatLngExpression } from "leaflet";

export interface IMarker {
  position: LatLngExpression;
  children: React.ReactNode;
  icon: Icon;
}
