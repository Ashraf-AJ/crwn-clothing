import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName, match }) => {
  const limit = 4;
  return (
    <div className="collection-preview">
      <Link to={`${match.url}/${routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items.slice(0, limit).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
