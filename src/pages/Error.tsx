import React from "react";
import { FormattedMessage } from "react-intl";

const Error = () => {
  return (
    <div className="content">
      <h2 className="title">
        <FormattedMessage id="error.title" />
      </h2>
      <p className="paragraph">
        <FormattedMessage id="error.contentParagraph" />
      </p>
    </div>
  );
};

export default Error;
