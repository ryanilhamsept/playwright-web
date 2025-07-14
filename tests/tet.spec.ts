import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testasailham1');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('testasailham1@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('testing123');
  await page.locator('#days').selectOption('4');
  await page.locator('#months').selectOption('7');
  await page.locator('#years').selectOption('2010');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Lala');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('SASA');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('ABAc');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Jl Pulo Sih');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('Sasasasdd');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByRole('textbox', { name: 'State *' }).fill('Perth');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Bekasz');
  await page.locator('#zipcode').fill('17148');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('08223294232');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});