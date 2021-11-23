import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div className="content">
      <h2 className="title">
        <FormattedMessage id="home.contentTitle" />
      </h2>
      <p className="paragraph">
        <FormattedMessage id="home.contentParagraph" />
      </p>
    </div>
  );
};

export default Home;
