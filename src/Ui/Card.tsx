import styled from "styled-components";
import { Header } from "./Heading";
import { EHeader } from "./IUi/THeading";
import { LuMapPin, LuCalendar, LuFlag, LuUser } from "react-icons/lu";
import { Grid, GridProvider } from "./Grid";
import { EGap, ERow } from "./IUi/TRow";
import { CardLink } from "./Link";
import { FC } from "react";
import { ITours } from "../Services/IService/TCabin";
import { format } from "date-fns";
import { formatCurrency } from "../Utilities/formatCurrency";

import { useScrollView } from "../Hooks/useScrollView";
import { RowProvider, Rows } from "./RowCompound";
import { PropTypeCard } from "./IUi/CardProptype";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  position: relative;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

interface ICard {
  $url: string;
}
const CardImage = styled.div<ICard>`
  height: 35rem;
  width: 100%;
  object-fit: cover;
  background-size: cover;
  background-blend-mode: screen;

  background-image: linear-gradient(
      to right bottom,
      var(--color-primary, 0.8),
      var(--color-secondary, 0.8)
    ),
    url(${(props) => props?.$url});
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  background-color: white;
  transform: translateY(-1rem);
  padding: 3rem 3.2rem;
`;

const CardName = styled.span`
  padding: 1rem 1.2rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    to right bottom,
    var(--color-secondary),
    var(--color-primary)
  );
`;
const CardFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background-color: var(--color-grey-100);
  border-top: 1px solid var(--color-grey-100);
  padding: 3rem 4rem;
  border-radius: 5px;
`;

export const Card: FC<ITours> = function (props) {
  const ref = useScrollView();
  const { data } = props;

  return (
    <CardContainer>
      <RowProvider
        direction={ERow.horizontal}
        $gap={EGap.medium}
        color="var(--color-primary)"
      >
        <Rows isClipPath="true">
          <CardImage
            $url={`http://localhost:8000/img/Tours/${data.imageCover}`}
          />
        </Rows>
        <Header as={EHeader.h3} $headerBackGround="card">
          <CardName>{data.name}</CardName>
        </Header>
        <CardContent>
          <Header
            as={EHeader.h4}
          >{`${data.difficulty}-${data.duration}-days tours`}</Header>
          <p>{data.summary}</p>

          <GridProvider $columns={"repeat(2,1fr)"}>
            <Grid>
              <Rows>
                <LuMapPin />
                <p>{data.startLocation?.description}</p>
              </Rows>
              <Rows>
                <LuCalendar />
                <p>{format(new Date(data.startDates[0]), "MMM yyy")}</p>
              </Rows>
              <Rows>
                <LuFlag />
                <p>{data.locations.length}-stops</p>
              </Rows>
              <Rows>
                <LuUser />
                <p>{data.maxGroupSize} people</p>
              </Rows>
            </Grid>
          </GridProvider>
        </CardContent>
      </RowProvider>
      <CardFooter>
        <p>
          <b>{formatCurrency(data.price)}</b> per person
        </p>
        <p>
          <b>{data.ratingsAverage}</b> rating ({data.ratingsQuantity})
        </p>

        <CardLink to={`/overview/${data._id}`} ref={ref}>
          Details
        </CardLink>
      </CardFooter>
    </CardContainer>
  );
};

Card.propTypes = {
  data: PropTypeCard,
};
