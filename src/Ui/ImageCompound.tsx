import { createContext, useContext } from "react";
import { IImageProvider, Iimage } from "./IUi/Timage";
import { Image } from "./Image";

const ImageContext = createContext({});
export const ImageProvider: React.FC<IImageProvider> = function (props) {
  const { height, radius, width, $margin, children } = props;
  return (
    <ImageContext.Provider value={{ height, radius, width, $margin }}>
      {children}
    </ImageContext.Provider>
  );
};

export const Images = function ({
  index,
  src,
  isLogo,
}: {
  index: number;
  src: string;
  isLogo?: boolean;
}) {
  const { height, radius, width, $margin } = useContext<Iimage>(ImageContext);
  return (
    <Image
      height={height}
      radius={radius}
      width={width}
      $margin={isLogo ? undefined : $margin}
      $index={index}
      src={src}
    />
  );
};
