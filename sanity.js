import {
  CreateImageUrlBuilder,
  CreateCurrentUserHook,
  CreateClient,
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV === "production",
};

// this is a function we use to make query and request to sanityCMs backend
export const sanityClient = CreateClient(config);
//helper function that extract the url from the image
export const urlfor = (source) => CreateImageUrlBuilder(config).image(source);

//Helper function for using the current logged in user account
export const useCurrentUser = CreateCurrentUserHook(config);
