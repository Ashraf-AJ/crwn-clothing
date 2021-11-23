import ShopActionTypes from "./shop.types";
import { getCollections, getCollectionsMap } from "../../utils/collections";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionStart());
    try {
      const collections = await getCollections();
      const collectionsMap = getCollectionsMap(collections);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error));
    }
  };
};
