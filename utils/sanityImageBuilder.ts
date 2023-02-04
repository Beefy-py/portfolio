import myConfiguredSanityClient from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

type SourceImage = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export const urlForSanityImage = (source: any) => {
  return builder.image(source);
};
