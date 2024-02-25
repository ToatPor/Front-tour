import { TileLayer, MapContainer, Tooltip } from "react-leaflet";
import pin from "/pin.png";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";
import { MyMarker } from "./MyMarker";
import { OverviewChangeView } from "./OverviewChangeview";
import { FC } from "react";
import { IOverviewMap } from "../../Services/IService/TCabin";
import { PropRender } from "../../Ui/PropRender";

const StyledOverviewMap = styled.section`
  height: 100%;
  width: 100%;
  transform: skewY(-4deg);
  z-index: 1;
`;

export const OverviewTourMap: FC<IOverviewMap> = function (props) {
  const { locations } = props;
  const dayOneLocation = locations?.find((val) => val.day === 1);

  const [lat, lng] = dayOneLocation!.coordinates;

  const customIcon = new Icon({
    iconUrl: pin,
    iconSize: [50, 50],
  });
  return (
    <StyledOverviewMap>
      <MapContainer center={[lng, lat]} scrollWheelZoom={false} zoom={12}>
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        <PropRender
          data={locations}
          render={(val) => (
            <MyMarker
              position={[val.coordinates[1], val.coordinates[0]]}
              key={val._id}
              icon={customIcon}
            >
              <Tooltip
                direction="right"
                offset={[7, -10]}
                opacity={1}
                permanent
                interactive
                eventHandlers={{
                  click: (e) => {
                    e.target.close();
                  },
                }}
              >
                {`Day ${val.day}: ${val.description}`}
              </Tooltip>
            </MyMarker>
          )}
        />

        <OverviewChangeView />
      </MapContainer>
    </StyledOverviewMap>
  );
};
