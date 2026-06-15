.PHONY: help install dev build preview lint test clean

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the Vite dev server
	npm run dev

build: ## Build for production (type-check + vite build)
	npm run build

preview: ## Preview the production build locally
	npm run preview

lint: ## Run ESLint on TypeScript/TSX files
	npm run lint

test: lint build ## Run lint and build as the test/check step

clean: ## Remove build artifacts and dependencies
	rm -rf dist node_modules
