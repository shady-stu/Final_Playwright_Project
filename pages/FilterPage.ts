
import { BasePage } from './BasePage';

export class FilterPage extends BasePage {

  async selectCategory(name: string) {
    
    await this.page.locator('input[type="checkbox"]').first().waitFor({ state: 'visible', timeout: 10000 });
    
   
    const checkboxes = this.page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    
    for (let i = 0; i < count; i++) {
      const sibling = checkboxes.nth(i).locator('..');
      const text = await sibling.textContent();
      if (text && text.includes(name)) {
        await checkboxes.nth(i).click();
        return;
      }
    }
  }

  async selectBrand(name: string) {
    
    await this.page.locator('input[type="checkbox"]').first().waitFor({ state: 'visible', timeout: 10000 });
   
    const checkboxes = this.page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    
    for (let i = 0; i < count; i++) {
      const sibling = checkboxes.nth(i).locator('..');
      const text = await sibling.textContent();
      if (text && text.includes(name)) {
        await checkboxes.nth(i).click();
        return;
      }
    }
  }
}
