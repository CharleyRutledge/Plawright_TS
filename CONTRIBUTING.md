# Contributing Guide

Thank you for contributing to this Playwright TypeScript test automation project!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Playwright_TS_Starter.git`
3. Install dependencies: `npm install`
4. Install Playwright browsers: `npx playwright install`

## Development Workflow

### Before Making Changes

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make sure all tests pass: `npm test`

### Making Changes

1. Write your code
2. Add or update tests as needed
3. Run tests to ensure they pass
4. Update documentation if needed

### Code Style

This project uses:
- TypeScript for type safety
- EditorConfig for consistent formatting
- ESLint rules (if configured)

#### TypeScript Guidelines

- Use strict TypeScript settings
- Prefer interfaces over types for object shapes
- Use async/await instead of promises
- Add JSDoc comments for public methods

#### Test Guidelines

- One test file per feature or page
- Use descriptive test names
- Group related tests with `test.describe()`
- Use Page Object Model for UI tests
- Keep tests independent and isolated
- Use beforeEach for common setup

#### Example Test Structure

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Login Feature', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login('testuser', 'password123');
    await expect(page).toHaveURL('/dashboard');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await loginPage.login('invalid', 'invalid');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
```

### Commit Messages

Follow conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test changes
- `refactor:` - Code refactoring
- `style:` - Code style changes (formatting)
- `chore:` - Build process or auxiliary tool changes

Examples:
```
feat: add login page object model
fix: resolve timeout issue in checkout tests
docs: update README with API testing examples
test: add visual regression tests for homepage
```

### Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update CHANGELOG.md with your changes
4. Create a pull request with a clear description
5. Link any related issues

#### Pull Request Checklist

- [ ] Tests pass locally
- [ ] Code follows project style guidelines
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] No console errors or warnings
- [ ] Added tests for new features

## Project Structure

```
tests/
├── *.spec.ts       - Test files (kept flat for simplicity)
├── seed.spec.ts    - Seed test for Playwright AI agents
├── pages/          - Page Object Models
├── fixtures/       - Custom fixtures, setup files, and test data
└── utils/          - Helper functions
```

Following Playwright's conventions, test files are kept in the root `tests/` directory with supporting structures (pages, fixtures, utils) in subdirectories.

## Adding New Tests

### UI Tests

1. Create or update page object in `tests/pages/`
2. Write test in appropriate directory
3. Use descriptive test names
4. Add assertions to verify behavior

### API Tests

1. Place in `tests/api/` directory
2. Use Playwright's request context
3. Verify response status and data
4. Mock responses when appropriate

### Mobile Tests

1. Place in `tests/mobile/` directory
2. Use device emulation from `playwright.config.ts`
3. Test responsive behavior
4. Verify mobile-specific features

## Running Tests

```bash
# All tests
npm test

# Specific test file
npx playwright test tests/example.spec.ts

# Specific browser
npm run test:chromium

# Debug mode
npm run test:debug

# UI mode
npm run test:ui

# Headed mode
npm run test:headed
```

## Debugging

### Debug a specific test

```bash
npx playwright test tests/example.spec.ts --debug
```

### Use Playwright Inspector

```bash
npx playwright test --debug
```

### Use console.log

```typescript
test('debug example', async ({ page }) => {
  console.log(await page.title());
  console.log(page.url());
});
```

## Common Issues

### Tests failing intermittently

- Increase timeout values
- Use proper wait conditions
- Avoid hard waits (waitForTimeout)
- Check for race conditions

### Locator not found

- Verify element exists on page
- Check selector specificity
- Use Playwright Inspector to test selectors
- Wait for element to be visible

### Slow tests

- Run tests in parallel
- Use network mocking
- Optimize selectors
- Use proper wait strategies

## Need Help?

- Check existing tests for examples
- Review Playwright documentation
- Ask questions in pull request comments
- Create an issue for bugs or feature requests

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

