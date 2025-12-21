
import { test } from '@playwright/test';
import { SortPage } from '../../pages/SortPage';

test.describe('Sort Feature', () => {

  test('Sort by Price Low to High', async ({ page }) => {
    const sortPage = new SortPage(page);
    await sortPage.navigate();
    await page.waitForLoadState('domcontentloaded');
    const sortOption = process.env.SORT_OPTION || 'price-asc';
    await sortPage.sortBy(sortOption);
    await page.waitForTimeout(500);
  });

});
