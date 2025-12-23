
import { test } from '@playwright/test';
import { FilterPage } from '../../pages/FilterPage';

test.describe('Filters Feature', () => {

  test('Filter by Hand Tools category', async ({ page }) => {
    const filterPage = new FilterPage(page);
    await filterPage.navigate();
    await page.waitForLoadState('domcontentloaded');
    const category = process.env.FILTER_CATEGORY || 'Hand Tools';
    await filterPage.selectCategory(category);
  });
});