import { BasePage } from './BasePage';

export class SortPage extends BasePage {
  
  async sortBy(option: string) {
   
    const sortDropdown = this.page.locator('select').first();
    
   
    await sortDropdown.waitFor({ state: 'visible', timeout: 5000 });
    
   
    await this.page.waitForTimeout(500);
    

    try {
 
      await sortDropdown.selectOption(option, { timeout: 3000 });
    } catch (e1) {
      try {
      
        await sortDropdown.click({ timeout: 3000 });
        await this.page.waitForTimeout(300);
        const option_element = this.page.locator(`option:has-text("${option}")`).first();
        await option_element.click({ timeout: 3000 });
      } catch (e2) {
   
        await sortDropdown.focus();
        await sortDropdown.press('ArrowDown');
        await sortDropdown.press('Enter');
      }
    }
  }
}