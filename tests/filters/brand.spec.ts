
import { test } from '@playwright/test';
import { FilterPage } from '../../pages/FilterPage';

test.describe('Filters Feature', () => {
  test('Filter by brand', async ({ page }) => {
    const filterPage = new FilterPage(page);
    await filterPage.navigate();
    await page.waitForLoadState('domcontentloaded');
    const brand = process.env.FILTER_BRAND || 'ForgeFlex Tools';
    await filterPage.selectBrand(brand);
  });

});