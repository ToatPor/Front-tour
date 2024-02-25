import styled from "styled-components";
import { EGap, ERow } from "../../Ui/IUi/TRow";
import { Row } from "../../Ui/Row";
import { Image } from "../../Ui/Image";

import { Star } from "../../Ui/Star";
import React, { useState } from "react";
import { IOverviewReview } from "../../Services/IService/TCabin";
import { PropRender } from "../../Ui/PropRender";

const StyledOverviewTourReview = styled.section`
  background-image: linear-gradient(
    to right bottom,
    var(--color-primary),
    var(--color-secondary)
  );
  margin-top: calc(10px - var(--section-rotate));
  padding: calc(6rem + var(--section-rotate)) 0;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`;

const StyledCardReview = styled.div`
  background-color: var(--color-grey-100);
  padding: 4rem 3.5rem;
  /* height: 45rem; */
  display: flex;

  width: 40rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  border-radius: 3px;
`;
const NameTag = styled.h5`
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const CardReviewGrid = styled.div`
  padding: 8rem 0;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 6rem;
  overflow-x: scroll;
  user-select: none;
  scroll-snap-align: center;

  &::-webkit-scrollbar {
    width: 10px;
  }
`;

export const OverviewTourReview: React.FC<IOverviewReview> = function (props) {
  const { review } = props;

  const [position, setPosition] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const handleMouseMove = function (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.preventDefault();
    if (!isDrag) return;
    const target = (event.target as HTMLElement).closest(
      ".Review"
    ) as HTMLElement;

    if (!target.classList.contains("Review")) return;
    //how far that we want to scroll
    const scrollX = event.pageX - target?.offsetLeft;
    //get pixel of current mouse that we click first place deduct with position that we click and how far that we drag mouse
    const walk = scrollX - position;
    target.scrollLeft = Number(scrollPosition - walk);
  };

  const handleMouseDown = function (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    setIsDrag(true);
    const target = (event.target as HTMLElement).closest(
      ".Review"
    ) as HTMLElement;
    if (!target.classList.contains("Review")) return;
    //get  position that we click first place
    const newX = event.pageX - target?.offsetLeft;
    setPosition(newX);
    //get number pixel of scroll left edge from scroll parent element
    setScrollPosition(target.scrollLeft);
  };

  //in case mouse leave element
  const handleMouseLeave = function () {
    setIsDrag(false);
  };
  const handleMouseUp = function () {
    setIsDrag(false);
  };

  return (
    <StyledOverviewTourReview>
      <CardReviewGrid
        className="Review"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
      >
        <PropRender
          data={review}
          render={(val) => (
            <StyledCardReview key={`${Math.random()}`}>
              <Row direction={ERow.horizontal} $gap={EGap.medium}>
                <Image
                  src={`http://localhost:8000/img/User/${val.userRating.photo}`}
                  height="6rem"
                  radius="100px"
                />
                <NameTag>{val.userRating.name}</NameTag>
              </Row>
              <p>{val.review}</p>
              <Row direction={ERow.horizontal}>
                {Array.from(
                  { length: Number(import.meta.env.VITE_MAX_RATING) },
                  (_, i) => (
                    <Star
                      starRating={val.rating >= i + 1}
                      key={i + Math.random()}
                    />
                  )
                )}
              </Row>
            </StyledCardReview>
          )}
        />
      </CardReviewGrid>
    </StyledOverviewTourReview>
  );
};
