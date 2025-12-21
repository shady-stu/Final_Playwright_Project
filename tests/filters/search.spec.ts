
import { test } from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage';

test.describe('Search Feature', () => {

  test('Search for a product', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.navigate();
    await page.waitForLoadState('domcontentloaded');
    const keyword = process.env.SEARCH_KEYWORD || 'hammer';
    await searchPage.search(keyword);
    await page.waitForLoadState('domcontentloaded');
  });

});
