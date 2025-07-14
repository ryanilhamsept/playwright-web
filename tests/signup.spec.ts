import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignupPage } from '../pages/SignupPage';
import { AccountCreationPage } from '../pages/AccountCreationPage';

test('user can signup', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const accountCreationPage = new AccountCreationPage(page);

    // ✅ Generate fake user data
  const fakeName = faker.internet.username();
  const fakeEmail = faker.internet.email({
    firstName: fakeName,
    provider: 'example.com', 
  });

  await signupPage.goto();
  await page.waitForTimeout(10000);
  await signupPage.startSignup(fakeName, fakeEmail);
  await page.waitForTimeout(10000);
  await accountCreationPage.fillAccountInformation();
  await accountCreationPage.createAccount();
});
