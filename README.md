# Playwright TypeScript Test Automation for QA Practice Site

A comprehensive test automation framework built with Playwright and TypeScript for testing the QA practice website at https://qa-practice.razvanvancea.ro/.

## 🚀 What This Project Does

This project provides end-to-end tests for a feature-rich QA practice site, covering:

- **Ecommerce Flows**: Login, cart management, checkout, logout
- **Bugs Challenge**: Testing intentional bugs in forms, tables, and interactions
- **API Testing**: REST API endpoints (requires Docker)
- **GraphQL Testing**: GraphQL queries and mutations (requires Docker)
- **Visual Testing**: Screenshot comparisons for UI validation
- **Web Elements**: Forms, tables, dialogs, file operations, interactive elements

Built with:
- **Playwright v1.57.0**: Modern web testing framework
- **TypeScript v5.9.3**: Type-safe test development
- **Page Object Model**: Locator-based pattern for maintainable tests
- **Docker Integration**: For API and GraphQL testing environments

### Key Features

- ✅ **Ecommerce Testing**: Complete shopping flow validation
- ✅ **Bug Detection**: Tests designed to expose intentional bugs
- ✅ **API Integration**: REST and GraphQL endpoint testing
- ✅ **Visual Regression**: Automated screenshot comparisons
- ✅ **Cross-Browser**: Chromium, Firefox, WebKit support
- ✅ **Parallel Execution**: Fast test runs
- ✅ **Docker Ready**: Containerized API testing
- ✅ **Comprehensive Reporting**: HTML reports with traces

## 📦 Installation

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Latest version
- **Docker**: For API and GraphQL testing (optional, but required for full test suite)

### Quick Setup

```bash
npm run setup
```

This installs dependencies and Playwright browsers.

### Manual Setup

```bash
npm install
npx playwright install
```

## 🐳 Docker Setup (Required for API/GraphQL Tests)

The QA practice site includes Docker-based API services:

1. **REST API**: Runs on localhost:8887
2. **GraphQL API**: Runs on localhost:5000

To start the services:

```bash
# Start REST API container
docker run -d -p 8887:8887 <rest-api-image>

# Start GraphQL container
docker run -d -p 5000:5000 <graphql-api-image>
```

Note: Check the QA practice site documentation for the exact Docker commands.

## 🏃 Running Tests

### All Tests
```bash
npm test
```

### Specific Modules
```bash
# Ecommerce tests
npx playwright test tests/ecommerce/

# Bugs challenge tests
npx playwright test tests/bugs/

# API tests
npx playwright test tests/api/

# GraphQL tests
npx playwright test tests/graphql/

# Visual tests
npx playwright test tests/visual/

# Web elements tests
npx playwright test tests/elements/
```

### Debug Mode
```bash
npm run test:debug
```

### UI Mode
```bash
npm run test:ui
```

### View Reports
```bash
npm run report
```

## 📁 Project Structure

```
├── tests/
│   ├── qa-practice-test-plan.md    # Comprehensive test plan
│   ├── seed.spec.ts               # Seed test for AI agents
│   ├── fixtures/                  # Test fixtures and setup
│   │   ├── authentication.setup.ts
│   │   ├── customFixtures.ts
│   │   ├── global.setup.ts
│   │   └── global.teardown.ts
│   ├── pages/                     # Page Object Models
│   │   ├── BasePage.ts           # Common utilities
│   │   ├── HomePage.ts           # Site navigation
│   │   ├── EcommercePage.ts      # Ecommerce functionality
│   │   ├── BugsPage.ts           # Bugs challenge
│   │   ├── ApiPage.ts            # REST API testing
│   │   └── GraphqlPage.ts        # GraphQL testing
│   ├── ecommerce/                # Ecommerce test files
│   │   ├── login.spec.ts
│   │   ├── cart.spec.ts
│   │   ├── checkout.spec.ts
│   │   └── logout.spec.ts
│   ├── bugs/                     # Bugs challenge tests
│   ├── api/                      # REST API tests
│   ├── graphql/                  # GraphQL tests
│   ├── visual/                   # Visual regression tests
│   └── elements/                 # Web elements tests
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── .env.example                 # Environment variables
```

## 🧪 Test Modules

### Ecommerce Testing
- User authentication (login/logout)
- Product browsing and cart management
- Checkout process validation
- Order confirmation

### Bugs Challenge
- Form validation with intentional bugs
- Table sorting/filtering issues
- Interactive element problems
- Error handling scenarios

### API Testing
- RESTful endpoint validation
- CRUD operations testing
- Response format verification
- Error code handling

### GraphQL Testing
- Query execution and validation
- Mutation testing
- Variable parameter handling
- Schema exploration

### Visual Testing
- Screenshot baseline creation
- Visual regression detection
- UI consistency validation

### Web Elements
- Form field interactions
- Table data manipulation
- Dialog and popup handling
- File upload/download
- Interactive components (sliders, accordions)

## 🧪 Writing Tests

### Using Page Objects

```typescript
import { test, expect } from '@playwright/test';
import { EcommercePage } from '../pages/EcommercePage';
import { HomePage } from '../pages/HomePage';

test.describe('Ecommerce Login', () => {
  test('successful login', async ({ page }) => {
    const homePage = new HomePage(page);
    const ecommercePage = new EcommercePage(page);

    await page.goto('https://qa-practice.razvanvancea.ro/');
    await homePage.ecommerceLink.click();
    await ecommercePage.navigateToLogin();
    await ecommercePage.login('username', 'password');

    await expect(page.locator('.dashboard')).toBeVisible();
  });
});
```

### API Testing Example

```typescript
import { test, expect } from '@playwright/test';
import { ApiPage } from '../pages/ApiPage';

test('GET request', async ({ page }) => {
  const apiPage = new ApiPage(page);

  await page.goto('https://qa-practice.razvanvancea.ro/');
  await apiPage.navigateToApiTesting();
  await apiPage.selectMethod('GET');
  await apiPage.enterUrl('http://localhost:8887/api/users');
  await apiPage.sendRequest();

  const response = await apiPage.getResponseText();
  expect(response).toContain('users');
});
```

## 🔧 Development

### Adding New Tests

1. Create test files in the appropriate module directory
2. Use `.spec.ts` extension
3. Follow the Page Object Model pattern
4. Update the test plan in `tests/qa-practice-test-plan.md`

### Building
```bash
npm run build
```

## 🚀 CI/CD

Pre-configured GitHub Actions for automated testing on push/PR.

## 📊 Reporting

View HTML reports with screenshots and traces:
```bash
npm run report
```

## 🤝 Contributing

Follow the existing structure and add tests for new features.

## 📝 License

ISC License

---

**Test the QA Practice Site!** 🎭
