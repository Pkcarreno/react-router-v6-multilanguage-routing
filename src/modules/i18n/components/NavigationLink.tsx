import { FC } from "react";
import { useIntl } from "react-intl";
import { AppRoute, AppRouteTitles } from "./../../../const";
import { NavLink } from "react-router-dom";

interface Props {
  to: keyof typeof AppRoute;
  className?: string;
}

const NavigationLink: FC<Props> = ({ to, children, className }) => {
  const { formatMessage, locale } = useIntl();

  function localizeRouteKey(path: string) {
    return `/${locale}${formatMessage({ id: path })}`;
  }

  return (
    <NavLink key={to} to={localizeRouteKey(AppRoute[to])} className={className}>
      {typeof children !== "undefined"
        ? children
        : formatMessage({ id: AppRouteTitles.get(AppRoute[to]) || "" })}
    </NavLink>
  );
};

export default NavigationLink;
