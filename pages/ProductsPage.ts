import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  firstProduct(): Locator {
    return this.page.locator('.card').first();
  }

  addToCartButton(): Locator {
    return this.page.locator('button:has-text("Add to cart")');
  }

  cartLink(): Locator {
    return this.page.getByRole('link', { name: 'Cart' });
  }

  removeFromCartButton(): Locator {
    return this.page.locator('table tbody tr a.btn-danger').first();
  }

  async openFirstProduct() {
    await this.firstProduct().click();
  }

  async addToCart() {
    await this.addToCartButton().waitFor({ state: 'visible' });
    await this.addToCartButton().click();
  }

  async openCart() {
    await this.cartLink().click();
  }

  async removeProductFromCart() {
    await this.removeFromCartButton().waitFor({ state: 'visible' });
    await this.removeFromCartButton().click();
  }
  
}