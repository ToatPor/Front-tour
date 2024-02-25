export interface ICart {
  _id: string;
  duration: number;
  guides: object[];
  name: string;
  price: number;
  imageCover: string;
  startDates: Date[];
  startLocation: {
    type: "Point";
    address: string;
    coordinates: [number, number];
    description: string;
  };
}

export interface TCart {
  cart: ICart;
}
