export interface ITour {
  description: string;
  difficulty: string;
  duration: number;
  durationWeeks: number;
  guides: { _id: string; name: string; role: string; photo: string }[];
  imageCover: string;
  images: string[];
  locations: ILocation[];
  maxGroupSize: number;
  name: string;
  price: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  secretTour: boolean;
  startDates: string[];
  startLocation: {
    type: string;
    address: string;
    description: string;
    coordinates: number[];
  };
  summary: string;
  _id: string;
}

export interface IReviews {
  _id: string;
  review: string;
  rating: number;
  userRating: {
    _id: string;
    name: string;
    photo: string;
  };
}
interface ILocation {
  type: string;
  coordinates: number[];
  description: string;
  day: number;
  _id: string;
}

export type IOverviewInfo = Pick<
  ITour,
  | "startDates"
  | "difficulty"
  | "maxGroupSize"
  | "ratingsAverage"
  | "guides"
  | "name"
  | "description"
  | "summary"
>;

export type IOverviewHeader = Pick<
  ITour,
  "name" | "imageCover" | "duration" | "startLocation"
>;
export type IOverviewReview = { review: IReviews[] };
export type IOverviewImage = Pick<ITour, "images">;
export interface ITours {
  data: ITour;
}

export type IOverviewMap = Pick<ITour, "locations">;

export type IOverviewFooter = Pick<ITour, "duration" | "images" | "_id">;
