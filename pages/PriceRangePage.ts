import { BasePage } from './BasePage';

export class PriceRangePage extends BasePage {
  minSliderHandle = this.page.locator('.ngx-slider').first().locator('[role="slider"]').first();
  maxSliderHandle = this.page.locator('.ngx-slider').first().locator('[role="slider"]').nth(1);

  async setPriceRange(min: number, max: number) {
    if (min < 0) throw new Error('Min price cannot be negative');
    if (max > 200) throw new Error('Max price cannot exceed 200');
    if (min > max) throw new Error('Min price cannot be greater than max price');

   
    const slider = this.page.locator('.ngx-slider').first();
    await slider.waitFor({ state: 'visible' });

   
    await this.page.evaluate(
      ({ min, max }) => {
        const sliderEl: any = document.querySelector('.ngx-slider');
        if (!sliderEl) return;
        sliderEl.value = [min, max]; 
        sliderEl.dispatchEvent(new Event('change'));
      },
      { min, max }
    );
  }
}
