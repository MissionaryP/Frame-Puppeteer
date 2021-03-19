const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, clickXPath, type, typeXpath, getText, getCount } = require('../Pages/basePage')
const homePage = require('../Pages/homePage')
const loginPage = require("../Pages/loginPage")
const { login } = require("../Pages/loginPage")
const checkPage = require("../Pages/checkVolumeBalance.Page")
const { selectElement } = require ("../Pages/newProfilePage")



describe('Grower´s Suite', ()=>{
    let browser
    let page
    let context
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    function getCPF()
    {
        //browser = await puppeteer.launch({headless:false, slowMo: 0, devtools:false, args: ['--start-fullscreen'], args: ['--lang=en-US']})
        browser = await puppeteer.launch({
            //args:['--start-fullscreen'],
            args: ['--lang=en-US'],
            //defaultViewport: null,
            headless: false
        })
        //context = await browser.createIncognitoBrowserContext()
        page = await browser.newPage()
        //page = await context.newPage()
        await page.setDefaultTimeout(1200000)
        await page.setDefaultNavigationTimeout(120000)
        await page.setViewport({ width: 2000, height: 1000 })

        await page.goto("https://theonegenerator.com/generators/documents/cpf-generator/")
        await page.waitForSelector(growerPage.inputGenerator)
        await click(page,growerPage.buttonGenerate)
        const cpfText = getText(page,growerPage.inputGenerator)
        await page.close()
        return cpfText

    }

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
        //page = await context.newPage()
        await page.setDefaultTimeout(1200000)
        await page.setDefaultNavigationTimeout(120000)
        await page.setViewport({ width: 2000, height: 1000 })
        
    })

    afterEach(async function(){
        await browser.close()
    })

    it.only ('', async function () {
        
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Credit Exemption'
        await page.waitForXPath(homePage.creditExemption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.creditExemption)
        
        //
        await typeXpath(page,checkPage.inputNameOrDocumentNumber,"cc")


        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)

        //Fill input and select the first option
        await page.waitForXPath(growerPage.inputName)
        await typeXpath(page,growerPage.inputName,"MAR")
        await page.waitForXPath(growerPage.firstOption)
        expect(growerPage.firstOption).to.exist
        const growerName = await page.$x(growerPage.labelNombre)
        await page.$eval(selector, element => element.innerHTML)
        const compareName = growerName[2].prop('innerHTML')
        await clickXPath(page,growerPage.viewGrowerButton)

        //Compare grower name with previous page
        await page.waitForXPath(growerPage.labelViewGrower)
        await page.waitForTimeout(12000)
        expect(growerPage.labelViewGrower).to.exist
        expect(growerPage.inputGrower).to.have.string(compareName)

    })
it.only ('', async function () {
        
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Credit Exemption'
        await page.waitForXPath(homePage.creditExemption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.creditExemption)
        
        //
        await typeXpath(page,checkPage.inputNameOrDocumentNumber,"ccc")

        
        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)

        //Fill input and select the first option
        await page.waitForXPath(growerPage.inputName)
        await typeXpath(page,growerPage.inputName,"MAR")
        await page.waitForXPath(growerPage.firstOption)
        expect(growerPage.firstOption).to.exist
        const growerName = await page.$x(growerPage.labelNombre)
        await page.$eval(selector, element => element.innerHTML)
        const compareName = growerName[2].prop('innerHTML')
        await clickXPath(page,growerPage.viewGrowerButton)

        //Compare grower name with previous page
        await page.waitForXPath(growerPage.labelViewGrower)
        await page.waitForTimeout(12000)
        expect(growerPage.labelViewGrower).to.exist
        expect(growerPage.inputGrower).to.have.string(compareName)

    })
    it.only ('', async function () {
        
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Credit Exemption'
        await page.waitForXPath(homePage.creditExemption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.creditExemption)
        
        //
        await typeXpath(page,checkPage.inputNameOrDocumentNumber,"LLL")

        
        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)

        //Fill input and select the first option
        await page.waitForXPath(growerPage.inputName)
        await typeXpath(page,growerPage.inputName,"MAR")
        await page.waitForXPath(growerPage.firstOption)
        expect(growerPage.firstOption).to.exist
        const growerName = await page.$x(growerPage.labelNombre)
        await page.$eval(selector, element => element.innerHTML)
        const compareName = growerName[2].prop('innerHTML')
        await clickXPath(page,growerPage.viewGrowerButton)

        //Compare grower name with previous page
        await page.waitForXPath(growerPage.labelViewGrower)
        await page.waitForTimeout(12000)
        expect(growerPage.labelViewGrower).to.exist
        expect(growerPage.inputGrower).to.have.string(compareName)

    })
    it.only ('', async function () {
        
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Credit Exemption'
        await page.waitForXPath(homePage.creditExemption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.creditExemption)
        
        //
        await typeXpath(page,checkPage.inputNameOrDocumentNumber,"ELO")

        
        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)

        //Fill input and select the first option
        await page.waitForXPath(growerPage.inputName)
        await typeXpath(page,growerPage.inputName,"MAR")
        await page.waitForXPath(growerPage.firstOption)
        expect(growerPage.firstOption).to.exist
        const growerName = await page.$x(growerPage.labelNombre)
        await page.$eval(selector, element => element.innerHTML)
        const compareName = growerName[2].prop('innerHTML')
        await clickXPath(page,growerPage.viewGrowerButton)

        //Compare grower name with previous page
        await page.waitForXPath(growerPage.labelViewGrower)
        await page.waitForTimeout(12000)
        expect(growerPage.labelViewGrower).to.exist
        expect(growerPage.inputGrower).to.have.string(compareName)

    })
    it.only ('', async function () {
        
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Credit Exemption'
        await page.waitForXPath(homePage.creditExemption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.creditExemption)
        
        //
        await typeXpath(page,checkPage.inputNameOrDocumentNumber,"ARE")

        
        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)

        //Fill input and select the first option
        await page.waitForXPath(growerPage.inputName)
        await typeXpath(page,growerPage.inputName,"MAR")
        await page.waitForXPath(growerPage.firstOption)
        expect(growerPage.firstOption).to.exist
        const growerName = await page.$x(growerPage.labelNombre)
        await page.$eval(selector, element => element.innerHTML)
        const compareName = growerName[2].prop('innerHTML')
        await clickXPath(page,growerPage.viewGrowerButton)

        //Compare grower name with previous page
        await page.waitForXPath(growerPage.labelViewGrower)
        await page.waitForTimeout(12000)
        expect(growerPage.labelViewGrower).to.exist
        expect(growerPage.inputGrower).to.have.string(compareName)

    })
    it.only ('', async function () {
        
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Credit Exemption'
        await page.waitForXPath(homePage.creditExemption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.creditExemption)
        
        //
        await typeXpath(page,checkPage.inputNameOrDocumentNumber,"MAN")
        await clickXPath(page,checkPage.buttonClose)

        
        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)

        //Fill input and select the first option
        await page.waitForXPath(growerPage.inputName)
        await typeXpath(page,growerPage.inputName,"MAR")
        await page.waitForXPath(growerPage.firstOption)
        expect(growerPage.firstOption).to.exist
        const growerName = await page.$x(growerPage.labelNombre)
        await page.$eval(selector, element => element.innerHTML)
        const compareName = growerName[2].prop('innerHTML')
        await clickXPath(page,growerPage.viewGrowerButton)

        //Compare grower name with previous page
        await page.waitForXPath(growerPage.labelViewGrower)
        await page.waitForTimeout(12000)
        expect(growerPage.labelViewGrower).to.exist
        expect(growerPage.inputGrower).to.have.string(compareName)

    })
})