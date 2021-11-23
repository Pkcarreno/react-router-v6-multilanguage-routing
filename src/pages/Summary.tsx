import React from "react";
import { FormattedMessage } from "react-intl";

const Summary = () => {
  return (
    <div className="content">
      <h2 className="title">
        <FormattedMessage id="summary.contentTitle" />
      </h2>
      <p className="paragraph">
        <FormattedMessage id="summary.contentParagraph" />
      </p>
    </div>
  );
};

export default Summary;
