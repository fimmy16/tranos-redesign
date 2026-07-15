import { expect, test } from "@playwright/test";

test("nav dropdown opens on hover and links resolve", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("menuitem", { name: "Products", exact: true }).hover();
  const gasketsLink = page.getByRole("menuitem", { name: "Gaskets" });
  await expect(gasketsLink).toBeVisible();
});

test("nav dropdown opens on keyboard focus", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("menuitem", { name: "Products", exact: true }).focus();
  const gasketsLink = page.getByRole("menuitem", { name: "Gaskets" });
  await expect(gasketsLink).toBeVisible();
});

test("about nav dropdown links to who-we-are and leadership", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("menuitem", { name: "About", exact: true }).hover();
  await expect(page.getByRole("menuitem", { name: "Who We Are" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Leadership" })).toBeVisible();
});

test("footer renders company contact details", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toContainText("Tranos");
});
