import { BasePage } from './BasePage';

export class SortPage extends BasePage {
  
  async sortBy(option: string) {
    // Find the sort dropdown
    const sortDropdown = this.page.locator('select').first();
    
    // Wait for dropdown to be visible
    await sortDropdown.waitFor({ state: 'visible', timeout: 5000 });
    
    // Give the page time to fully load
    await this.page.waitForTimeout(500);
    
    // Try multiple approaches
    try {
      // Approach 1: Direct selectOption
      await sortDropdown.selectOption(option, { timeout: 3000 });
    } catch (e1) {
      try {
        // Approach 2: Click and select from dropdown
        await sortDropdown.click({ timeout: 3000 });
        await this.page.waitForTimeout(300);
        const option_element = this.page.locator(`option:has-text("${option}")`).first();
        await option_element.click({ timeout: 3000 });
      } catch (e2) {
        // Approach 3: Using keyboard
        await sortDropdown.focus();
        await sortDropdown.press('ArrowDown');
        await sortDropdown.press('Enter');
      }
    }
  }
}