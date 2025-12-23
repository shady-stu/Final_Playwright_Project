import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Remove From Cart Feature', () => {

  test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await page.goto('/');

    await productsPage.openFirstProduct();
    await productsPage.addToCart();
    await productsPage.openCart();
  });

  test('Remove product from cart page', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.removeProductFromCart();

    await expect(
      page.locator('text=The cart is empty')
    ).toBeVisible();
  });
  test('Cart table should be empty after removing product', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await page.goto('/');
  await productsPage.openFirstProduct();
  await productsPage.addToCart();
  await productsPage.openCart();

  await productsPage.removeProductFromCart();

  await expect(
    page.locator('table tbody tr')
  ).toHaveCount(0);
});

});