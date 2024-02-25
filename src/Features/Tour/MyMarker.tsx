import React, { useEffect, useRef } from "react";
import propTypes from "prop-types";
import { Icon, LeafletMouseEvent, Marker as markerType } from "leaflet";
import { Marker } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import { IMarker } from "./IOverview/IMarker";

export const MyMarker: React.FC<IMarker> = function (props) {
  const [searchParam, setSearchParams] = useSearchParams();
  const { position, icon, children } = props;
  const ref = useRef<markerType>(null);

  useEffect(
    function () {
      function handleLeafletClick(e: LeafletMouseEvent) {
        if (ref.current && !ref.current.isTooltipOpen())
          return ref.current?.openTooltip();
        searchParam.set("lat", String(e.latlng.lat));
        searchParam.set("lng", String(e.latlng.lng));
        setSearchParams(searchParam);
      }
      ref.current?.addEventListener("click", handleLeafletClick);

      // return () =>
      //   ref.current?.removeEventListener("click", handleLeafletClick);
    },
    [setSearchParams, searchParam]
  );

  return (
    <Marker position={position} ref={ref} icon={icon}>
      {children}
    </Marker>
  );
};

MyMarker.propTypes = {
  icon: propTypes.instanceOf(Icon).isRequired,
  children: propTypes.element,
};
