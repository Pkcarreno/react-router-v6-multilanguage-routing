import NavigationLink from "../modules/i18n/components/NavigationLink";
import { LanguageSwitcher } from "../modules/i18n";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      {/* Navigations links */}
      <div className="NavigationButtons">
        <NavigationLink to="HomePage" />
        <NavigationLink to="SummaryPage" />
        <NavigationLink to="ExtraPage" />
      </div>
      {/* language switch */}
      <div className="LanguageSwitcher">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
