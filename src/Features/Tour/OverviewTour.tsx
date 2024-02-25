import { Spinners } from "../../Ui/Spinnes";
import { OverviewLocation } from "./OverviewLocation";
import OverviewTourFooter from "./OverviewTourFooter";
import { OverviewTourHead } from "./OverviewTourHead";
import { OverviewTourInfo } from "./OverviewTourInfo";
import { OverviewTourMap } from "./OverviewTourMap";

import { OverviewTourReview } from "./OverviewTourReview";
import { useGetTourById } from "./useGetTour";

export const OverviewTour = function () {
  const { tour, isTour } = useGetTourById();
  if (isTour) return <Spinners />;

  return (
    <>
      <OverviewTourHead
        name={tour?.data.data.tours.name}
        imageCover={tour?.data.data.tours.imageCover}
        duration={tour?.data.data.tours.duration}
        startLocation={tour?.data.data.tours.startLocation}
      />
      <OverviewTourInfo
        startDates={tour?.data.data.tours.startDates}
        difficulty={tour?.data.data.tours.difficulty}
        maxGroupSize={tour?.data.data.tours.maxGroupSize}
        ratingsAverage={tour?.data.data.tours.ratingsAverage}
        guides={tour?.data.data.tours.guides}
        name={tour?.data.data.tours.name}
        description={tour?.data.data.tours.description}
        summary={tour?.data.data.tours.summary}
      />
      <OverviewLocation images={tour?.data.data.tours.images} />
      <OverviewTourMap locations={tour?.data.data.tours.locations} />
      <OverviewTourReview review={tour?.data.data.tours.review} />
      <OverviewTourFooter
        _id={tour?.data.data.tours._id}
        images={tour?.data.data.tours.images}
        duration={tour?.data.data.tours.duration}
      />
    </>
  );
};
