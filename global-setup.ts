require('dotenv').config()
import { chromium, FullConfig } from '@playwright/test'
import { isInProductionEnvironment, logData, signIn } from './Helper'

async function globalSetup(_: FullConfig): Promise<void> {
	if (process.env.AUTHENTICATION_ENABLED) {
		
		const browser = await chromium.launch({
			args: [
				'--window-size=1300,570',
				'--window-position=000,000',
				'--disable-dev-shm-usage',
				'--no-sandbox',
				'--disable-web-security',
				'--disable-features=site-per-process',
				'--disable-setuid-sandbox',
				'--disable-accelerated-2d-canvas',
				'--no-first-run',
				'--no-zygote',
				'--use-gl=egl',
				'--disable-blink-features=AutomationControlled',
				'--disable-background-networking',
				'--enable-features=NetworkService,NetworkServiceInProcess',
				'--disable-background-timer-throttling',
				'--disable-backgrounding-occluded-windows',
				'--disable-breakpad',
				'--disable-client-side-phishing-detection',
				'--disable-component-extensions-with-background-pages',
				'--disable-default-apps',
				'--disable-extensions',
				'--disable-features=Translate',
				'--disable-hang-monitor',
				'--disable-ipc-flooding-protection',
				'--disable-popup-blocking',
				'--disable-prompt-on-repost',
				'--disable-renderer-backgrounding',
				'--disable-sync',
				'--force-color-profile=srgb',
				'--metrics-recording-only',
				'--enable-automation',
				'--password-store=basic',
				'--use-mock-keychain',
				'--hide-scrollbars',
				'--mute-audio',
			],
		})
		const page = await browser.newPage()
		await signIn(page)

		// Save auth state to 'storageState.json'.
		await page.context().storageState({ path: 'storageState.json' })
		if (isInProductionEnvironment()) await page.waitForTimeout(30000)
		await browser.close()

		logData('YOU LOGGED IN SUCCESSFULLY WITH THIS ACCOUNT: ' + process.env.AUTH_USER_NAME, '200')
		logData('###############################################', undefined, '\x1b[36m')
		logData('###.......... Starting E2E Tests ...........###', undefined, '\x1b[36m')
		logData('###############################################', undefined, '\x1b[0m')
	}
}

export default globalSetup
