.DEFAULT_GOAL := help

## This help message
.PHONY: help
help:
	@printf "Usage\n";

	@awk '{ \
			if ($$0 ~ /^.PHONY: [a-zA-Z\-\_0-9]+$$/) { \
				helpCommand = substr($$0, index($$0, ":") + 2); \
				if (helpMessage) { \
					printf "\033[36m%-20s\033[0m %s\n", \
						helpCommand, helpMessage; \
					helpMessage = ""; \
				} \
			} else if ($$0 ~ /^[a-zA-Z\-\_0-9.]+:/) { \
				helpCommand = substr($$0, 0, index($$0, ":")); \
				if (helpMessage) { \
					printf "\033[36m%-20s\033[0m %s\n", \
						helpCommand, helpMessage; \
					helpMessage = ""; \
				} \
			} else if ($$0 ~ /^##/) { \
				if (helpMessage) { \
					helpMessage = helpMessage"\n                     "substr($$0, 3); \
				} else { \
					helpMessage = substr($$0, 3); \
				} \
			} else { \
				if (helpMessage) { \
					print "\n                     "helpMessage"\n" \
				} \
				helpMessage = ""; \
			} \
		}' \
		$(MAKEFILE_LIST)


###################################################################################################
#########################            PLAYWRIGHR MAKE COMMANDS             #########################
###################################################################################################

APP_DOCKER_E2E_NAME = "playwright-test-blueprint"

INSTALLING_MESSAGE = "🚀🚀 Let's install test application! 🥳🥳 \n"
PRETTY_MESSAGE = "🧹🧹 Let's make codes pretty! 😅😅 \n"
TEST_MESSAGE = "🧪🧪 Let's test the application! \n"

## Installing Playwright Docker Container
.PHONY: install
install:
	@echo $(INSTALLING_MESSAGE)
	npm install
	cp .env.example .env
	cd deployment && docker-compose up $(APP_DOCKER_E2E_NAME) -d --force-recreate
	exit 0

.PHONY: pretty
pretty: ## Make Code Style Pretty
	@echo $(PRETTY_MESSAGE)
	npx prettier --write .
	@echo "\n"
	exit 0

## Executing API Tests
.PHONY: test-api
test-api:
	@echo $(TEST_MESSAGE)
	@echo "\n"	
	docker exec -it $(APP_DOCKER_E2E_NAME) npm run test-api
	exit 0

## Executing E2E Tests
.PHONY: test-e2e
test-e2e:
	@echo $(TEST_MESSAGE)
	@echo "\n"	
	docker exec -it $(APP_DOCKER_E2E_NAME) npm run test-e2e
	exit 0


## Executing E2E Tests Headed
.PHONY: test-e2e-h 
test-e2e-h:
	@echo $(TEST_MESSAGE)
	@echo "\n"	
	npx playwright test e2e/ --config=playwright.config.ts --headed --reporter=html
	exit 0	