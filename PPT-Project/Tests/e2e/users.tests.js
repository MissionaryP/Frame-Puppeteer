const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, clickXPath, type, getText, getCount } = require('../Pages/basePage')
const homePage = require('../Pages/homePage')
const loginPage = require("../Pages/loginPage")



describe('User´s Suite', ()=>{
    let browser
    let page
    let context

    beforeEach(async function(){
        //browser = await puppeteer.launch({headless:false, slowMo: 0, devtools:false, args: ['--start-fullscreen'], args: ['--lang=en-US']})
        browser = await puppeteer.launch({
            //args:['--start-fullscreen'],
            args: ['--lang=en-US'],
            //defaultViewport: null,
            headless: false
        })
        //context = await browser.createIncognitoBrowserContext()
        page = await browser.newPage()
        await page.setDefaultTimeout(1200000)
        await page.setDefaultNavigationTimeout(120000)
        await page.setViewport({ width: 1400, height: 1000 })
        
    })

    afterEach(async function(){
        await browser.close()
    })

    it.only('Login and enter to Profiles', async function () {
        await page.goto(loginPage.urlDev)
        await type(page,loginPage.userInput,loginPage.username)
        await type(page,loginPage.passwordInput,loginPage.password)
        await click(page,loginPage.loginButton)
        await page.waitForSelector(loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

    })

    it('Login and enter to Profiles', async function () {
        await page.goto(loginPage.urlDev)
        await type(page,loginPage.userInput,loginPage.username)
        await type(page,loginPage.passwordInput,loginPage.invalidPassword)
        await click(page,loginPage.loginButton)
        expect(loginPage.errorMessage).to.be.a('string','Email o contraseña incorrectos.')
    })
} )