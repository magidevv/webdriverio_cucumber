const Page = require("./page.js");

class LoginPage extends Page {
  get loginBtn() {
    return $("#login-button");
  }
  get errorMsg() {
    return $(".error-message-container");
  }

  async loginButton() {
    await this.loginBtn.click();
  }

  async errorMsgDisplay(msg) {
    await expect(this.errorMsg).toBeExisting();
    await expect(this.errorMsg).toHaveText(msg);
  }

  open() {
    return super.open("");
  }
}

module.exports = new LoginPage();
