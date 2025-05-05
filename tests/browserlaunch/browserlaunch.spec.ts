import {test, expect} from '@playwright/test';

test('has title', async ({ page}) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(3000)
await page.pause()
});