import { Page } from '@playwright/test'

export class ObjectAbstraction {
	readonly page: Page
	apiBaseUrl: string
	appBaseUrl: string

	constructor(page: Page) {
		this.page = page
		this.apiBaseUrl = String(process.env.API_BASE_URL)
		this.appBaseUrl = String(process.env.APP_BASE_URL)
	}

	getHeadersOption() {
		const headers = {
			headers: {
				'Content-Type': process.env.CONTENT_TYPE,
				'ACCEPT': process.env.ACCEPT,
			},
			ignoreHTTPSErrors: true,
		}

		return headers
	}
}
