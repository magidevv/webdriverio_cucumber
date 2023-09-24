const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pages/login.page.js");

Given(
  "User is located on the main page of saucedemo website",
  async function () {
    await LoginPage.open();
  }
);

When('User clicks the "Login" button', async function () {
  await LoginPage.loginButton();
});

Then(
  'User should see "Epic sadface: Username is required" error message',
  async function () {
    await LoginPage.errorMsgDisplay("Epic sadface: Username is required");
  }
);
