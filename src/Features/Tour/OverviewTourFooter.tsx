import styled from "styled-components";
import { StyledCommonContainer } from "../../Ui/Container";
import { Row } from "../../Ui/Row";
import { ERow } from "../../Ui/IUi/TRow";
import { Header } from "../../Ui/Heading";
import { EHeader } from "../../Ui/IUi/THeading";
import { CommonLink } from "../../Ui/Link";
import { ImageProvider, Images } from "../../Ui/ImageCompound";
import { useScrollView } from "../../Hooks/useScrollView";
import { IOverviewFooter } from "../../Services/IService/TCabin";
import { FC } from "react";
import { useIsAuth } from "../Login/useIsAuth";

const StyledSectionFooter = styled.section`
  padding: 10rem 8rem;
`;
const StyledFooterContainer = styled.div`
  overflow: hidden;
  background-color: var(--color-grey-0);
  padding: 10rem 5rem;
  border-radius: 3rem;
  box-shadow:
    var(--color-grey-200) 0px 10px 36px 0px,
    var(--color-grey-100) 0px 0px 0px 1px;
  align-items: center;
  position: relative;

  & img {
    box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
  }
`;
const StyledRowImage = styled.div`
  display: flex;
  position: absolute;
  margin-left: -5rem;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;
const StyledContentFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(min-content, 14rem));

  & p {
    font-size: 2rem;
    color: var(--color-grey-400);
  }
`;

const OverviewTourFooter: FC<IOverviewFooter> = (props) => {
  const { user } = useIsAuth();
  const { images, duration, _id } = props;
  const ref = useScrollView();

  return (
    <StyledSectionFooter>
      <StyledCommonContainer>
        <StyledFooterContainer>
          <StyledRowImage>
            <ImageProvider
              height="17rem"
              radius="50%"
              width="17rem"
              $margin="11rem"
            >
              <Images isLogo={true} src="/logo-green-round.png" index={3} />
              <Images
                src={`http://localhost:8000/img/Tours/${images[0]}`}
                index={2}
              />
              <Images
                src={`http://localhost:8000/img//Tours/${images[1]}`}
                index={1}
              />
            </ImageProvider>
          </StyledRowImage>
          <StyledContentFooter>
            <Row direction={ERow.vertical} $column="3/7">
              <Header as={EHeader.h4}>What are you waiting for ?</Header>
              <p>
                {`${duration} days, 1 adventure. infinite memories. Make it yours today`}
              </p>
            </Row>
            <Row direction={ERow.horizontal} $column="8/-1">
              {user?.data.data.users._id ? (
                <CommonLink to={`/booking/${_id}`} ref={ref}>
                  Book Tour Now
                </CommonLink>
              ) : (
                <CommonLink to={"/login"}>Login to book tour</CommonLink>
              )}
            </Row>
          </StyledContentFooter>
        </StyledFooterContainer>
      </StyledCommonContainer>
    </StyledSectionFooter>
  );
};

OverviewTourFooter.propTypes = {};

export default OverviewTourFooter;
