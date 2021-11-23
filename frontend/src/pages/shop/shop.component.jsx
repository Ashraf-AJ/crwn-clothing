import React, { useEffect } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import "./shop.styles.scss";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, fetchCollectionsAsync }) => {
  useEffect(() => {
    fetchCollectionsAsync();
  }, [fetchCollectionsAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
