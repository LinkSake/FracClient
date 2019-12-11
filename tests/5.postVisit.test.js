module.exports = {
    "Can you register a visit?": (browser) => {
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
         .click('#visit')
         .waitForElementVisible("body", 1000)
         .assert.urlEquals("http://localhost:8080/visits")
         .setValue('input[name=licensePlate]', 'EDV-SRT-0932')
         .setValue('input[name=color]', 'Gris')
         .setValue('input[name=year]', '2017')
         .setValue('input[name=brand]', 'Honda')
         .setValue('input[name=model]', 'Civic')
         .setValue('input[name=house]', '2')
         .click('button')
         .waitForElementVisible("body", 1000)
         .assert.urlEquals("http://localhost:8080/visits/list")
         .assert.elementPresent('.post-style')
    } 
 }