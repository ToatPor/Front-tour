import { FC } from "react";
import styled from "styled-components";
import { IOverviewImage } from "../../Services/IService/TCabin";
import { PropRender } from "../../Ui/PropRender";

export const StyledTourLocation = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transform: skewY(-4deg);
`;
const TourLocationImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const OverviewLocation: FC<IOverviewImage> = function (props) {
  const { images } = props;

  return (
    <StyledTourLocation>
      <PropRender<string>
        data={images}
        render={(val) => (
          <TourLocationImage
            src={`http://localhost:8000/img/Tours/${val}`}
            key={images + String(Math.random())}
          />
        )}
      />
    </StyledTourLocation>
  );
};
