module.exports = {
    "Does it render the landing ok?": (browser) => {
        browser
         .url('http://localhost:8080/')
         .waitForElementVisible("body", 1000)
         .assert.elementPresent('#login')
         .assert.elementPresent('#news')
    } 
 }