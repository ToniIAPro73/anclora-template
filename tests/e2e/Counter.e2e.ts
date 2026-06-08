import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Increment operation', () => {
    test('should display error message when incrementing with negative number', async ({
      page,
    }) => {
      await page.goto('/counter');

      const incrementInput = page.getByLabel('Increment by');
      await incrementInput.fill('-1');

      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Please enter a value between 1 and 100.')).toBeVisible();
    });

    test('should increment the counter and validate the count', async ({ page }) => {
      const e2eRandomId = Math.floor(Math.random() * 1_000_000);
      await page.setExtraHTTPHeaders({
        'x-e2e-random-id': e2eRandomId.toString(),
      });
      await page.goto('/counter');

      const count = page.getByText('Current count:');
      const countText = await count.textContent();
      const countNumber = Number(countText?.split(':')[1]?.trim());

      const incrementInput = page.getByLabel('Increment by');
      await incrementInput.fill('1');

      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText(`Current count: ${countNumber + 1}`)).toBeVisible();
    });
  });
});
