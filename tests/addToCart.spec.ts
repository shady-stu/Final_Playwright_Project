import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Add To Cart Feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Add one product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.openFirstProduct();
    await productsPage.addToCart();
    await productsPage.openCart();

    await expect(
      page.locator('table tbody tr')
    ).toHaveCount(1);
  });

  test('Add same product twice increases quantity in cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.openFirstProduct();

    await productsPage.addToCart();
    await productsPage.addToCart();

    await productsPage.openCart();

    const quantityInput = page.locator('input[data-test="product-quantity"]').first();
    await expect(quantityInput).toHaveValue('2');
  });

});
