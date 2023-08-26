import { request } from '@playwright/test'

require('dotenv').config()

export function returnFullAppUrl(path: string) {
	let baseUrl = process.env.APP_BASE_URL

	if (path == '/' || path == ""){
		return baseUrl
	}

	if (baseUrl?.substring(baseUrl.length - 1, baseUrl.length) !== '/') {
		baseUrl += '/'
	}

	if (path.substring(0, 1) !== '/') {
		path = '/' + path
	}

	return baseUrl + path
}

export function returnFullApiPath(path: string, version = 'v1.0') {
	let baseUrl = process.env.API_BASE_URL

	if (baseUrl?.substring(baseUrl.length - 1, baseUrl.length) !== '/') {
		baseUrl += '/'
	}

	if (path.substring(0, 1) !== '/') {
		path = '/' + path
	}

	return baseUrl + version + path
}

export function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time)
	})
}

export function isInProductionEnvironment() {
	return process.env.APP_ENV.toLocaleLowerCase() == 'production'
}

export async function signIn(page) {
	await page.goto(process.env.APP_AUTH_URL)
	await page.type('input[name=username]', process.env.AUTH_USER_NAME)
	await page.type('input[name=password]', process.env.AUTH_USER_PASSWORD)
	await page.click('text=sign-in')
}

export function logData(message, status = undefined, color = '\x1b[36m') {
	let icon = '🚀 '

	if (status == '200' || status == '201' || status == '204') {
		color = '\x1b[32m'
		icon = '🎉  '
		// icon = '✓✓ '
	} else if (status != '200' && status != undefined && status != '201' && status != '204') {
		color = '\x1b[31m'
		icon = '❌  '
		message = message + ' [ ' + status + ' ]'
	}

	console.log(color, icon + message)
}
