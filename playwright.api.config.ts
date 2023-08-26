import { PlaywrightTestConfig } from '@playwright/test'

export const config: PlaywrightTestConfig = {
	timeout: 30000,
	retries: 0,
	testDir: 'api',
	use: {
		headless: true,
		actionTimeout: 15000,
		ignoreHTTPSErrors: true,
		video: 'off',
		screenshot: 'off',
	},
	projects: [
		{
			name: 'Chromium',
			use: {
				browserName: 'chromium',
			},
		},
	],
}
