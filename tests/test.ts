import { expect, test } from '@playwright/test';

test('page has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Caleb Filburn/);
});

test('main heading exists', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Caleb Filburn' })).toBeVisible();
});

test('resume link', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'See full resume' })).toBeVisible();
});

test('experience heading exists', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Experience' })).toHaveClass(/sr-only/);
});
