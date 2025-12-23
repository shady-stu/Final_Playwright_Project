
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  searchInput = this.page.locator('input[data-test="search-query"]').or(this.page.locator('input[placeholder*="search" i]').first());
  searchBtn = this.page.locator('button:has-text("Search")').or(this.page.locator('button[type="submit"]').first());

  async search(keyword: string) {
    try {
      
      await this.searchInput.waitFor({ state: 'visible', timeout: 5000 });
      
      
      await this.searchInput.click();
      await this.searchInput.clear();
      
      
      await this.searchInput.fill(keyword);
      await this.searchInput.press('Enter');
      
    
      try {
        await this.page.waitForLoadState('domcontentloaded');
      } catch {
        await this.searchBtn.waitFor({ state: 'visible', timeout: 3000 });
        await this.searchBtn.click();
      }
      
    } catch (error) {
      console.error('Search error:', error);
      throw error;
    }
  }
}
