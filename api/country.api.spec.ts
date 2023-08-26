import { expect, test } from '@playwright/test'
import { logData } from '../Helper'
import { CountryObject } from '../objects/CountryObject'

test.describe('Get Countries speak English [V3.1]', () => {
	let version_31: 'v3.1'
	let country: CountryObject

	test.beforeEach(async ({ page }) => {
		country = new CountryObject(page)
	})

	test('Lis of the countries which speak english', async ({ page, request }) => {
		await getAllCountriesInEnglishLanguages()
	})

	async function getAllCountriesInEnglishLanguages() {
		const response = await country.getCountriesWithEnglishLanguege(version_31)

		expect(response.status()).toBe(200)

		logData('==> GET list of the countries \n', response.status())
	}
})
