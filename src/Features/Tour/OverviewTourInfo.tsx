import styled from "styled-components";
import { Header } from "../../Ui/Heading";
import { EHeader } from "../../Ui/IUi/THeading";
import { EGap, ERow, IGap } from "../../Ui/IUi/TRow";
import { LuCalendar, LuDumbbell, LuStar, LuUser } from "react-icons/lu";
import { sizeGap } from "../../Utilities/sizeGap";
import { RowProvider, Rows } from "../../Ui/RowCompound";
import { IOverviewInfo } from "../../Services/IService/TCabin";
import { format } from "date-fns";
import { IGuide, PropRender } from "../../Ui/PropRender";

const StyledOverviewTourInfo = styled.section`
  display: grid;
  grid-template-columns: 45% 1fr;
  background-color: var(--color-grey-0);
  margin-top: -7rem;
  transform: skewY(-4deg);
`;
const OverallTours = styled.div`
  background-color: var(--color-grey-200);
  grid-column: 1/2;
  padding: 17rem 7rem;
  display: flex;
  flex-direction: column;
  gap: 9rem;
`;
const OverAllToursContent = styled.div<IGap>`
  display: flex;
  flex-direction: column;
  ${(props) => props.$gap && sizeGap[props.$gap]};
  margin: 0 auto;
  transform: skewY(4deg);
`;
const OverAllTourImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
`;

const OverAllDescription = styled.div`
  grid-column: 2/-1;
  background-color: var(--color-grey-100);
  padding: 25rem;
  line-height: 2;
`;
export const OverviewTourInfo: React.FC<IOverviewInfo> = function (props) {
  const {
    startDates,
    difficulty,
    maxGroupSize,
    ratingsAverage,
    guides,
    name,
    description,
    summary,
  } = props;

  return (
    <StyledOverviewTourInfo>
      <RowProvider
        direction={ERow.horizontal}
        $gap={EGap.medium}
        color="var(--color-primary)"
      >
        <OverallTours>
          <OverAllToursContent $gap={EGap.veryLarge}>
            <Rows isVertical={true}>
              <Header as={EHeader.h4}>Quick Facts</Header>
              <Rows>
                <LuCalendar />
                <p>Next Day</p>
                <p>{format(startDates[0], "MMM yyy")}</p>
              </Rows>
              <Rows>
                <LuDumbbell />
                <p>Difficulty</p>
                <p>{difficulty}</p>
              </Rows>
              <Rows>
                <LuUser />
                <p>Participant </p>
                <p>{maxGroupSize}</p>
              </Rows>
              <Rows>
                <LuStar />
                <p>Rating</p>
                <p>{ratingsAverage}</p>
              </Rows>
            </Rows>

            <Rows isVertical={true}>
              <Header as={EHeader.h4}>Your tour guides</Header>
              <PropRender<IGuide>
                data={guides}
                render={(val) => (
                  <Rows key={val.name + val.photo}>
                    <OverAllTourImage
                      src={`http://localhost:8000/img/User/${val.photo}`}
                    />
                    <b style={{ textTransform: "uppercase" }}>{val.role}</b>
                    <p>{val.name as string}</p>
                  </Rows>
                )}
              />
            </Rows>
          </OverAllToursContent>
        </OverallTours>

        <OverAllDescription>
          <OverAllToursContent $gap={EGap.large}>
            <Header as={EHeader.h4}>About {name}</Header>
            <p>{description}</p>
            <p>{summary}</p>
          </OverAllToursContent>
        </OverAllDescription>
      </RowProvider>
    </StyledOverviewTourInfo>
  );
};
