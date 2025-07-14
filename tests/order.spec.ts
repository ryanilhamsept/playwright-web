import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';

test('test order placement', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);

  await homePage.goto();
  await homePage.clickSignupLogin();
  await loginPage.login('testmoonlay@gmail.com', 'testing123');

  await homePage.selectFirstProduct();
  await homePage.addToCart();
  await homePage.viewCart();

  await cartPage.proceedToCheckout();
  await checkoutPage.enterMessage('test');
  await checkoutPage.placeOrder();

  await paymentPage.enterPaymentDetails('test moonlay', '12343589594859', '311', '08', '2027');
  await paymentPage.payAndConfirm();
  await paymentPage.continue();
});
