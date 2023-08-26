import { Page } from '@playwright/test'
import { returnFullApiPath, returnFullAppUrl } from '../Helper'
import { ObjectAbstraction } from './ObjectAbstraction'

export class CountryObject extends ObjectAbstraction {
	readonly page: Page

	constructor(page: Page) {
		super(page)
		this.page = page
	}

	async loadListOfTheCountriesSpeakEnglish() {
		let docsPageUrl = returnFullAppUrl('/')

		await this.page.goto(docsPageUrl)
		await this.page.waitForSelector('#endpoints-language-link')
		await this.page.click('#endpoints-language-link')
	}

	/*
	|--------------------------------------------------------------------------
	| API
	|--------------------------------------------------------------------------
	*/

	async getCountriesWithEnglishLanguege(version = 'v3.1') {
		let fullUrl = returnFullApiPath('/lang/english', version)
		const options = this.getHeadersOption()

		const response = await this.page.request.get(fullUrl, options)

		return response
	}
}
