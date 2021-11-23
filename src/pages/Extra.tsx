import React from "react";
import { FormattedMessage } from "react-intl";

const Extra = () => {
  return (
    <div className="content">
      <h2 className="title">
        <FormattedMessage id="extra.contentTitle" />
      </h2>
      <p className="paragraph">
        <FormattedMessage id="extra.contentParagraph" />
      </p>
      {/* <a className="link" href="/" target="_blank">
        <FormattedMessage id="extra.devtoLink" />
      </a> */}
      <a
        className="link"
        rel="noreferrer"
        href="https://github.com/Pkcarreno/react-router-v6-multilanguage-routing"
        target="_blank"
      >
        <FormattedMessage id="extra.githubLink" />
      </a>
    </div>
  );
};

export default Extra;
