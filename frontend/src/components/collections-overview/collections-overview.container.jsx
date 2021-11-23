import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
