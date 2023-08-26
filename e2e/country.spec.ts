import { test } from '@playwright/test'
import { logData } from '../Helper'
import { CountryObject } from '../objects/CountryObject'

test.describe('Load List Of The Countries that Speak English', () => {
	let country: CountryObject

	test.beforeEach(async ({ page }) => {
		country = new CountryObject(page)
	})

	test('Load List Of The Countries that Speak English', async ({ page }) => {
		await country.loadListOfTheCountriesSpeakEnglish()

		logData('Load List Of The Countries that Speak English')
	})
})
