import { PlaywrightTestConfig } from '@playwright/test'

export const config: PlaywrightTestConfig = {
	globalSetup: require.resolve('./global-setup'),
	timeout: 30000,
	retries: 0,
	testDir: 'e2e',
	use: {
		storageState: 'storageState.json',
		headless: true,
		viewport: { width: 1880, height: 970 },
		ignoreHTTPSErrors: true,
		video: 'retain-on-failure',
		screenshot: 'only-on-failure',
		trace: 'on',
		browserName: 'chromium',
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
