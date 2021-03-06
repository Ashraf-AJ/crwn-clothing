import { api, collectionsPath } from "./paths";
import { httpGet } from "../utils/utils";

const getCollection = async (name) => {
  const response = await httpGet(`${api}${collectionsPath}${name}/`);
  const data = await response.json();
  return data;
};

const transformCollection = (title, collection) => ({
  title,
  routeName: encodeURI(title.toLowerCase()),
  items: collection.map(({ image_url, ...otherProps }) => ({
    ...otherProps,
    imageUrl: image_url,
  })),
});

const COLLECTIONS_INFO = [
  { title: "Hats" },
  { title: "Jackets" },
  { title: "Sneakers" },
  { title: "Mens" },
  { title: "Womens" },
];
export const getCollections = async (collectionsInfo = COLLECTIONS_INFO) =>
  await Promise.all(
    collectionsInfo.map(async ({ title }) => {
      const collection = await getCollection(title.toLowerCase());
      return transformCollection(title, collection);
    })
  );

export const getCollectionsMap = (collections) =>
  collections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
