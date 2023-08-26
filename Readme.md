# Playwright Test Blueprint

This repository is just a blueprint to help us to start implementing End 2 End test for our projects/ application in a quick and clean way to have more flexibility in the future.

![DEMO Playwright Test Blueprint](https://github.com/Mekaeil/Playwright-Test-Blueprint/blob/main/assets/demo-playwright.gif)


# Install & Commands
You can install the Playwright with Docker and executing all of your test. As you know Playwright support API test (as a black box) and E2E test on different browsers. So in this project we have both API test and E2E test structure.

```
make install
```

### Executing API Tests
``` 
make test-api  // just executing API tests in api directories
OR
npm run test-api
```

### Executing E2E Tests
``` 
make test-e2e  // just executing APP tests in e2e directories without opening browsers
OR
npm run test-e2e


make test-e2e-h
OR
npm run test-e2e-h
```