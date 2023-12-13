import { expect, test } from '@playwright/test';

test('page has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Caleb Filburn/);
});
