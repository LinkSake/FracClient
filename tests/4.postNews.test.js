module.exports = {
    "Can you post a new news?": (browser) => {
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
         .click('#news')
         .waitForElementVisible("body", 1000)
         .assert.urlEquals("http://localhost:8080/announcements")
         .setValue('input[name=title]', "Hey y'all")
         .setValue('input[name=description]', 'This is a test')
         .setValue('input[name=details]', 'A nightwatch test :p')
         .click('button')
         .waitForElementVisible("body", 1000)
         .assert.urlEquals("http://localhost:8080/home")
    } 
 }