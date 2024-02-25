import { ITour } from "../../Services/IService/TCabin";
import { Card } from "../../Ui/Card";
import { Error } from "../../Ui/Error";
import { Grid, GridProvider } from "../../Ui/Grid";
import { PropRender } from "../../Ui/PropRender";
import { Spinners } from "../../Ui/Spinnes";
import { useGetAllTour } from "./useGetAllTour";

export const Overview = function () {
  const { isTour, tours, error } = useGetAllTour();
  if (error) return <Error message={error.message} />;
  if (isTour) return <Spinners />;
  return (
    <GridProvider $columns="repeat(3,1fr)">
      <Grid>
        <PropRender<ITour>
          data={tours?.data.data.tours}
          render={(data) => (
            <Card data={data} key={data.name + data.duration} />
          )}
        />
      </Grid>
    </GridProvider>
  );
};
