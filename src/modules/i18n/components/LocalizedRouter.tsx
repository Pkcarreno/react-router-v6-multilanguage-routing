import React from "react";
import { IntlProvider } from "react-intl";
import {
  BrowserRouter as Router,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AppLanguages } from "../../../const";

import { LanguageStrings } from "../localizations";

const getEnumKeyByEnumValue = (myEnum: any, enumValue: string): string => {
  const keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
  return keys.length > 0 ? keys[0] : "";
};

interface Props {
  languages?: any;
  appStrings: { [prop: string]: LanguageStrings };
  defaultLanguage?: AppLanguages;
}

const IntlProviderComponent: React.FC<Props> = ({
  children,
  appStrings,
  defaultLanguage,
  languages,
}) => {
  const { pathname } = useLocation();
  const regexToMatch = new RegExp("/[a-zA-Z]{2}/", "gi");
  const Textmatch = pathname.match(regexToMatch);

  const { lang = defaultLanguage || AppLanguages.English } =
    Textmatch && Textmatch!.length > 0
      ? { lang: Textmatch![0].replaceAll("/", "") }
      : {};

  if (!pathname.includes(`/${lang}/`)) {
    const isBrowserLanguageExistInApp = getEnumKeyByEnumValue(
      AppLanguages,
      languages
    );
    let defaultLang = lang;

    if (isBrowserLanguageExistInApp in AppLanguages) {
      defaultLang = languages;
    }
    return <Navigate to={`/${defaultLang}/`} />;
  }

  document.documentElement.lang = lang;

  return (
    <IntlProvider locale={lang} messages={appStrings[lang]}>
      {children}
    </IntlProvider>
  );
};

export const LocalizedRouter: React.FC<Props> = ({
  children,
  appStrings,
  defaultLanguage,
  languages,
}) => (
  <Router>
    <IntlProviderComponent
      appStrings={appStrings}
      defaultLanguage={defaultLanguage}
      languages={languages}
    >
      {children}
    </IntlProviderComponent>
  </Router>
);
// <Route path="/:lang([a-zA-Z]{2})">
// </Route>
// {({ match, location }: { match: PathMatch, location: Location }) => {
// 	// /**
// 	//  * Get current language
// 	//  * Set default locale to en if base path is used without a language
// 	//  */
// 	const params = match ? match.params : {};
// 	const { lang = defaultLanguage || AppLanguage.English } = params;

// 	// /**
// 	//  * If language is not in route path, redirect to language root
// 	//  */
// 	const { pathname } = location;
// 	if (!pathname.includes(`/${lang}/`)) {
// 		//  <Redirect to={`/${lang}/`} />;
// 		return <Route path="/" element={<Navigate replace to={`/${lang}/`} />} />
// 	}

// 	// /**
// 	//  * Return Intl provider with default language set
// 	//  */
// }}
