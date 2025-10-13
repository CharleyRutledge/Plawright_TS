# Quick Start Guide

Get up and running with Playwright TypeScript automation in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Install Playwright Browsers

```bash
npx playwright install
```

## Step 3: Run Your First Test

```bash
npm test
```

## Step 4: View the Test Report

```bash
npm run report
```

## Step 5: Run Tests in UI Mode (Interactive)

```bash
npm run test:ui
```

## Next Steps

### Generate a New Test

Use Playwright's codegen tool to record your interactions:

```bash
npm run codegen
```

### Create Your First Page Object

1. Create a new file in `tests/pages/LoginPage.ts`:

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
  }

  async login(username: string, password: string) {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }
}
```

2. Use it in your test:

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto('/login');
  await loginPage.login('testuser', 'password123');
  await expect(page).toHaveURL('/dashboard');
});
```

### Debug a Test

Run a single test in debug mode:

```bash
npx playwright test tests/example.spec.ts --debug
```

### Run Tests in Different Browsers

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Run Tests with Different Viewports

Run mobile tests:

```bash
npm run test:mobile
```

## Common Issues

### Issue: Browsers not installed

**Solution:**
```bash
npx playwright install --with-deps
```

### Issue: Tests timing out

**Solution:** Increase timeout in `playwright.config.ts`:
```typescript
timeout: 60000, // 60 seconds
```

### Issue: Cannot find module errors

**Solution:** Make sure TypeScript can resolve paths:
```bash
npm install
```

## Tips for Writing Tests

1. **Use Auto-waiting**: Playwright automatically waits for elements
   ```typescript
   await page.click('button'); // Waits for button to be clickable
   ```

2. **Use Built-in Locators**: Prefer semantic locators
   ```typescript
   page.getByRole('button', { name: 'Submit' })
   page.getByText('Welcome')
   page.getByLabel('Email')
   ```

3. **Group Related Tests**:
   ```typescript
   test.describe('Login Tests', () => {
     test('successful login', async ({ page }) => { });
     test('failed login', async ({ page }) => { });
   });
   ```

4. **Use Fixtures for Setup**:
   ```typescript
   test.beforeEach(async ({ page }) => {
     await page.goto('/');
   });
   ```

## Resources

- Full README: [README.md](./README.md)
- Playwright Docs: https://playwright.dev
- API Reference: https://playwright.dev/docs/api/class-playwright

