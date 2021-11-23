import { Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { AppRoute } from "./const";
import { appStrings, LocalizedRouter, LocalizedRoutes } from "./modules/i18n";
import * as pages from "./pages";

function App() {
  const userLang = navigator.language;

  return (
    <LocalizedRouter languages={userLang} appStrings={appStrings}>
      <Navbar />
      <LocalizedRoutes>
        <Route path={AppRoute.HomePage} element={<pages.HomePage />} />
        <Route path={AppRoute.SummaryPage} element={<pages.SummaryPage />} />
        <Route path={AppRoute.ExtraPage} element={<pages.ExtraPage />} />
        <Route path="*" element={<pages.ErrorPage />} />
      </LocalizedRoutes>
    </LocalizedRouter>
  );
}

export default App;
