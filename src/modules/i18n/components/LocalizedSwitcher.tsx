import React from "react";
import { AppLanguages } from "./../../../const";
import { NavLink, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";

import { appStrings } from "./../index";

export const LanguageSwitcher: React.FC = () => {
  const { pathname } = useLocation();
  const { messages } = useIntl();

  function getMatchingRoute(language: string) {
    /**
     * Get the key of the route the user is currently on
     */
    const route = pathname.substring(3); // remove local part '/en' from the pathname /en/contact
    const routeKey =
      Object.keys(messages).find((key) => messages[key] === route) ?? "English";
    /**
     * Find the matching route for the new language
     */
    const matchingRoute = (appStrings as any)[language][routeKey];

    /**
     * Return localized route
     */
    return `/${language}` + matchingRoute;
  }

  return (
    <ul>
      {Object.keys(AppLanguages).map((lang) => (
        <li key={lang}>
          <NavLink
            // className={css(link.primary)}
            // activeClassName={css(link.active)}
            to={getMatchingRoute((AppLanguages as any)[lang])}
          >
            {(AppLanguages as any)[lang]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
