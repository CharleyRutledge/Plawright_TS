# Playwright TypeScript Test Automation Framework

A modern, scalable test automation framework built with Playwright and TypeScript for end-to-end web application testing.

## 🚀 What This Project Does

This project provides a complete test automation framework using:

- **Playwright**: Microsoft's modern web testing framework for reliable end-to-end testing
- **TypeScript**: Type-safe test development with better IDE support and error catching
- **Page Object Model**: Organized test structure for maintainable and scalable test suites
- **Cross-browser Testing**: Support for Chromium, Firefox, and WebKit browsers
- **CI/CD Integration**: GitHub Actions workflows for automated testing
- **Parallel Test Execution**: Fast test runs with parallel execution
- **Comprehensive Reporting**: HTML reports with screenshots and traces

### Key Features

- ✅ **Type-Safe Testing**: Full TypeScript support with strict type checking
- ✅ **Cross-Browser Compatibility**: Test across Chromium, Firefox, and WebKit
- ✅ **Parallel Execution**: Run tests in parallel for faster execution
- ✅ **Auto-Waiting**: Smart waiting mechanisms for reliable tests
- ✅ **Rich Assertions**: Powerful assertion library for comprehensive validations
- ✅ **Screenshot & Video**: Automatic capture on failures
- ✅ **Trace Collection**: Detailed execution traces for debugging
- ✅ **CI/CD Ready**: Pre-configured GitHub Actions workflows
- ✅ **Environment Support**: dotenv integration for environment variables

## 📦 Installation

### Quick Setup (One Command)

For new clones, you can set up everything with a single command:

```bash
npm run setup
```

This command will:
1. Install all npm dependencies
2. Install Playwright browsers (Chromium, Firefox, WebKit)

### Manual Setup

If you prefer to set up step-by-step:

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install
```

### Prerequisites

- **Node.js**: Version 18 or higher (LTS recommended)
- **npm**: Latest version
- **Git**: For cloning the repository

## 🏃 Running Tests

### All Tests
```bash
npm test
```

### Specific Browsers
```bash
npm run test:chromium  # Run only in Chromium
npm run test:firefox   # Run only in Firefox
npm run test:webkit    # Run only in WebKit
```

### Debug Mode
```bash
npm run test:debug     # Debug mode with browser inspector
```

### UI Mode (Interactive)
```bash
npm run test:ui        # Visual test runner
```

### Headed Mode (Visible Browser)
```bash
npm run test:headed    # Run with visible browser windows
```

### View Reports
```bash
npm run report         # Open HTML test report
```

## 📁 Project Structure

```
├── tests/
│   ├── example.spec.ts     # Example test cases
│   ├── seed.spec.ts        # Seed test for AI agents
│   ├── fixtures/           # Test fixtures and setup
│   ├── pages/              # Page Object Models
│   └── utils/              # Helper utilities
├── specs/                  # Test specifications
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── .env.example           # Environment variables template
```

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.ts`)

The framework is configured for:
- **Parallel Execution**: Tests run in parallel for speed
- **Auto-Retry**: Failed tests retry automatically in CI
- **Cross-Browser**: Chromium, Firefox, and WebKit support
- **Trace Collection**: Automatic traces on test failures
- **HTML Reporting**: Detailed test reports

### TypeScript Configuration (`tsconfig.json`)

- **Strict Mode**: Full type checking enabled
- **ES2020 Target**: Modern JavaScript features
- **DOM Types**: Browser API type definitions
- **Source Maps**: Debug support

### Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Configure your environment variables as needed for your application under test.

## 🧪 Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test('should navigate and verify content', async ({ page }) => {
  // Navigate to your application
  await page.goto('https://your-app.com');

  // Interact with elements
  await page.click('button[type="submit"]');

  // Make assertions
  await expect(page.locator('.success-message')).toBeVisible();
});
```

### Page Object Model

Create reusable page objects in `tests/pages/`:

```typescript
// tests/pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-testid="email"]');
    this.passwordInput = page.locator('[data-testid="password"]');
    this.loginButton = page.locator('[data-testid="login-button"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

Use in tests:

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user@example.com', 'password123');
  await expect(page).toHaveURL('/dashboard');
});
```

## 🔧 Development

### Adding New Tests

1. Create test files in `tests/` directory with `.spec.ts` extension
2. Follow the naming convention: `feature-name.spec.ts`
3. Use descriptive test names
4. Group related tests with `test.describe()`

### Code Generation

Generate test code interactively:

```bash
npm run codegen
```

This opens a browser where you can record interactions and generate test code.

### Building the Project

```bash
npm run build
```

Compiles TypeScript to JavaScript in the `dist/` directory.

## 🚀 CI/CD

### GitHub Actions

The project includes two GitHub Actions workflows:

1. **`playwright.yml`**: Runs tests on every push and pull request
2. **`copilot-setup-steps.yml`**: Setup validation workflow

### Local CI Simulation

To simulate CI locally:

```bash
# Run tests with CI configuration
npx playwright test --project=chromium --project=firefox --project=webkit
```

## 🐛 Debugging

### Debug a Specific Test

```bash
npx playwright test tests/example.spec.ts --debug
```

### Step-by-Step Debugging

```bash
# Add debugger statements in your test
test('debug example', async ({ page }) => {
  debugger; // Execution will pause here in debug mode
  await page.goto('/');
});
```

### Browser Developer Tools

```bash
# Run in headed mode to see browser interactions
npm run test:headed
```

## 📊 Reporting

### HTML Reports

After test execution, view detailed reports:

```bash
npm run report
```

Reports include:
- Test execution timeline
- Screenshots on failures
- Trace files for debugging
- Performance metrics

### CI Artifacts

In CI, test reports are automatically uploaded as artifacts and can be downloaded for analysis.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add your feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript with strict mode enabled
- Follow the existing code structure and naming conventions
- Add JSDoc comments for public methods
- Write descriptive test names and assertions

## 📝 License

ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/CharleyRutledge/Plawright_TS/issues)
- **Documentation**: [Playwright Docs](https://playwright.dev/docs)
- **TypeScript**: [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🔄 Version History

- **v1.0.0**: Initial release with basic Playwright TypeScript setup
  - Cross-browser testing support
  - CI/CD integration
  - Page Object Model structure
  - TypeScript configuration

---

**Happy Testing!** 🎭
