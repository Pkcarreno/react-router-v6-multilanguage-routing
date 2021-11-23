export enum AppRoute {
	HomePage = 'routes.home',
	SummaryPage = 'routes.summary',
	ExtraPage = 'routes.extra',
}

export const AppRouteTitles = new Map([
  [AppRoute.HomePage, 'home.title'],
  [AppRoute.SummaryPage, 'summary.title'],
  [AppRoute.ExtraPage, 'extra.title'],
]);