module.exports = {
    "Are there news?": (browser) => {
        browser
         .url('http://localhost:8080/')
         .waitForElementVisible("body", 1000)
         .assert.elementPresent('#news')
         .click('#news')
         .waitForElementVisible("body", 1000)
         .assert.elementPresent('.post-style')
    } 
 }