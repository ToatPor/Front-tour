import styled from "styled-components";
import { Overlay } from "../../Ui/Overlay";
import { Header } from "../../Ui/Heading";
import { Row } from "../../Ui/Row";
import { LuClock, LuMapPin } from "react-icons/lu";
import { EGap, ERow } from "../../Ui/IUi/TRow";
import { IHeaderTour } from "./IOverview/IHeadTour";

import PropTypes from "prop-types";
import { IOverviewHeader } from "../../Services/IService/TCabin";

const HeaderSection = styled.section<IHeaderTour>`
  height: 85vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => props.$image};

  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  margin-bottom: -7rem;
`;
const HeaderContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  /* bottom: 13vw; */
  transform: translate(-50%, -50%);
  /* margin: 0 auto; */
  text-align: center;
  padding: 1.2rem 2.4rem;
  width: 25%;
  z-index: 1;
  color: var(--color-grey-100);

  & h2 span {
    padding: 1.2rem 2.4rem;
    letter-spacing: 1.5px;
    line-height: 1;
    background-image: linear-gradient(
      to bottom right,
      rgba(125, 213, 111, 0.85),
      rgba(40, 180, 135, 0.85)
    );
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

const HeaderOverView = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const OverviewTourHead: React.FC<IOverviewHeader> = function (props) {
  const { name, imageCover, duration, startLocation } = props;

  return (
    <HeaderSection
      $image={`url(http://localhost:8000/img/Tours/${imageCover})`}
    >
      <Overlay height="100%" />
      <HeaderContent>
        <Header as="h2">
          <span>{name}</span>
        </Header>
        <HeaderOverView>
          <Row direction={ERow.horizontal} $gap={EGap.small}>
            <LuClock />
            <p>{duration} Days</p>
          </Row>
          <Row direction={ERow.horizontal} $gap={EGap.small}>
            <LuMapPin />
            <p>{startLocation.description}</p>
          </Row>
        </HeaderOverView>
      </HeaderContent>
    </HeaderSection>
  );
};

OverviewTourHead.propTypes = {
  name: PropTypes.string.isRequired,
  imageCover: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  startLocation: PropTypes.shape({
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

HeaderSection.propTypes = {
  $image: PropTypes.string.isRequired,
};
