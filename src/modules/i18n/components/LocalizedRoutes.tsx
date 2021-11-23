/* eslint-disable */
import React from 'react'
import { Routes } from 'react-router-dom'
import { useIntl } from 'react-intl'

export const LocalizedRoutes: React.FC = ({ children }) => {
	/**
	 * inject params and formatMessage through hooks, so we can localize the route
	 */
	const { formatMessage, locale } = useIntl()

	/**
	 *
	 * @param path can be string, undefined or string array
	 * @returns Localized string path or path array
	 */
	function localizeRoutePath(path?: string | string[]) {
		switch (typeof path) {
			case 'undefined':
				return undefined
			case 'object':
				return path.map(key => `/${locale}${formatMessage({ id: key })}`)
			default:
				const isFallbackRoute = path === '*'
				return isFallbackRoute ? path : `/${locale}${formatMessage({ id: path })}`
		}
	}

	/**
	 * Apply localization to all routes
	 * Also checks if all children elements are <Route /> components
	 */
	return (
		<Routes>
			{React.Children.map(children, child =>
				React.isValidElement<any>(child)
					? React.cloneElement(child, {
							...child.props,
							path: localizeRoutePath(child.props.path),
					  })
					: child
			)}
		</Routes>
	)
}
