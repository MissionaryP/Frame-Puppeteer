const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, clickXPath, type, getText, getCount } = require('../Pages/basePage')
const homePage = require('../Pages/loginPage')

describe('Login Suite', ()=>{
    let browser
    let page
    let context

    beforeEach(async function(){
        browser = await puppeteer.launch({headless:true, slowMo: 0, devtools:false})
        context = await browser.createIncognitoBrowserContext()
        page = await context.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    afterEach(async function(){
        await browser.close()
    })

    it('Should Loguin with valid credentials', async function () {
        await page.goto(homePage.urlDev)
        await type(page,homePage.userInput,homePage.username)
        await type(page,homePage.passwordInput,homePage.password)
        await click(page,homePage.loginButton)
    })

    it('Should Loguin with invalid credentials', async function () {
        await page.goto(homePage.urlDev)
        await type(page,homePage.userInput,homePage.username)
        await type(page,homePage.passwordInput,homePage.invalidPassword)
        await click(page,homePage.loginButton)
        expect(homePage.errorMessage).to.be.a('string','Email o contraseña incorrectos.')
    })
} )