module.exports = {
    "Can you login?": (browser) => {
        browser
         .url('http://localhost:8080/')
         .waitForElementVisible("body", 1000)
         .assert.elementPresent('#login')
         .click('#login')
         .waitForElementVisible("body", 1000)
         .setValue('input[name=email]', 'jerry@gmail.com')
         .setValue('input[name=password]', '123456')
         .click('button')
         .assert.urlEquals("http://localhost:8080/home")
    } 
 }