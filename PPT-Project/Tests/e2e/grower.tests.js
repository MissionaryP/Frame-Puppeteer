const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, clickXPath, type, typeXpath, getText, getCount } = require('../Pages/basePage')
const homePage = require('../Pages/homePage')
const loginPage = require("../Pages/loginPage")
const { login } = require("../Pages/loginPage")
const growerPage = require("../Pages/growerPage")
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

    it('Filter Profiles Input', async function () {

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

        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)
        
        //Click en 'Add New Grower'
        await page.waitForXPath(page,growerPage.buttonAddNewGrower)
        await clickXPath(page,growerPage.buttonAddNewGrower)

        //Llenar formularios


    })

    it('Filter Profiles All Status', async function () {

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

        //Click en Menú 'Grower'
        await page.waitForXPath(homePage.growerOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.growerOption)
        
        //Click en 'Add New Grower'
        await page.waitForXPath(page,growerPage.buttonAddNewGrower)
        await clickXPath(page,growerPage.buttonAddNewGrower)

        //Llenar formularios
        await page.waitForSelector(growerPage.inputDocument)
        const cpf = getCPF()
        await page.waitForTimeout(10000)
        await type(page,growerPage.inputDocument,cpf)
        await type(page,growerPage.inputGrower,"jose")
        await type(page,gowerPage.inputGrowerFantasyName,"maria")
        await type(page,growerPage.inputContactEmail,"juanperez18@gmail.com")

        await click(page,growerPage.checkboxGrower)
        await type(page,growerPage.inputPrimaryPhone,"(54)22361-6599")
        await click(page,growerPage.checkboxStark)
        await click(page,growerPage.checkboxCollaborator)
        await click(page,growerPage.checkboxCooperative)
        await click(page,growerPage.checkboxElected)
        await click(page,growerPage.checkboxCertifiedPartner)

        await type(page,growerPage.inputZipCode,"7600")
        await type(page,growerPage.inputAddress,"independencia 749")
        await type(page,growerPage.inputNumber,"6")
        await type(page,growerPage.inputComplement,"ejemplo")
        await type(page,growerPage.inputNeighborhood,"caballito")
        
        //Contactinformation
        
        await type(page,growerPage.inputPhoneNumber,"1551606621")
        await click(page,growerPage.checkboxBillingAddress)
        await type(page,growerPage.inputZipCode2,"2600")
        await type(page,growerPage.inputAddress2,"acevedo 136")
        await type(page,growerPage.inputNumber2,"4")
        await type(page,growerPage.inputComplement2,"ejemplo2")
        await type(page,growerPage.inputNeighborhood2,"floresta")

        //CONTACT INFORMATION
        await type(page,growerPage.inputPhoneNumber2,"223547789")
        await click(page,growerPage.checkboxStarkCertify)
        await click(page,growerPage.buttonSave)

    })

    it('Filter Profiles All Status', async function () {

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
 
         //Click en Menú 'Grower'
         await page.waitForXPath(homePage.growerOption)
         await page.waitForTimeout(12000)
         await clickXPath(page,homePage.growerOption)
         
         //Click en 'Add New Grower'
         await page.waitForXPath(page,growerPage.buttonAddNewGrower)
         await clickXPath(page,growerPage.buttonAddNewGrower)
 
         //Llenar formularios
         await page.waitForSelector(growerPage.inputDocument)
         const cpf = getCPF()
         await page.waitForTimeout(10000)
         await type(page,growerPage.inputDocument,cpf)
         await type(page,growerPage.inputGrower,"jose")
         await type(page,gowerPage.inputGrowerFantasyName,"maria")
         await type(page,growerPage.inputContactEmail,"juanperez18@gmail.com")
 
         await click(page,growerPage.checkboxGrower)
         await type(page,growerPage.inputPrimaryPhone,"(54)22361-6599")
         await click(page,growerPage.checkboxStark)
         await click(page,growerPage.checkboxCollaborator)
         await click(page,growerPage.checkboxCooperative)
         await click(page,growerPage.checkboxElected)
         await click(page,growerPage.checkboxCertifiedPartner)
 
         await type(page,growerPage.inputZipCode,"7600")
         await type(page,growerPage.inputAddress,"independencia 749")
         await type(page,growerPage.inputNumber,"6")
         await type(page,growerPage.inputComplement,"ejemplo")
         await type(page,growerPage.inputNeighborhood,"caballito")
         
         //Contactinformation
         
         await type(page,growerPage.inputPhoneNumber,"1551606621")
         await click(page,growerPage.checkboxBillingAddress)
         await click(page,growerPage.checkboxStarkCertify)
         await click(page,growerPage.buttonSave)
 
     })

     it('Filter Profiles All Status', async function () {

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
 
         //Click en Menú 'Grower'
         await page.waitForXPath(homePage.growerOption)
         await page.waitForTimeout(12000)
         await clickXPath(page,homePage.growerOption)
         
         //Click en 'Add New Grower'
         await page.waitForXPath(page,growerPage.buttonAddNewGrower)
         await clickXPath(page,growerPage.buttonAddNewGrower)
 
         //Llenar formularios
         await page.waitForSelector(growerPage.inputDocument)
         const cpf = getCPF()
         await page.waitForTimeout(10000)
         await type(page,growerPage.inputDocument,cpf)
         await type(page,growerPage.inputGrower,"jose")
         await type(page,gowerPage.inputGrowerFantasyName,"maria")
         await type(page,growerPage.inputContactEmail,"juanperez18@gmail.com")
 
         await click(page,growerPage.checkboxGrower)
         await type(page,growerPage.inputPrimaryPhone,"(54)22361-6599")
         await click(page,growerPage.checkboxStark)
         await click(page,growerPage.checkboxCollaborator)
         await click(page,growerPage.checkboxCooperative)
         await click(page,growerPage.checkboxElected)
         await click(page,growerPage.checkboxCertifiedPartner)
         await type(page,growerPage.inputStartDate,"18/04/1986")
         await type(page,growerPage.inputEndDate,"05/10/2001")
         await type(page,growerPage.inputZipCode,"7600")
         await type(page,growerPage.inputAddress,"independencia 749")
         await type(page,growerPage.inputNumber,"6")
         await type(page,growerPage.inputComplement,"ejemplo")
         await type(page,growerPage.inputNeighborhood,"caballito")
         
         //Contactinformation
         
         await type(page,growerPage.inputPhoneNumber,"1551606621")
         await click(page,growerPage.checkboxBillingAddress)
         await type(page,growerPage.inputZipCode2,"2600")
         await type(page,growerPage.inputAddress2,"acevedo 136")
         await type(page,growerPage.inputNumber2,"4")
         await type(page,growerPage.inputComplement2,"ejemplo2")
         await type(page,growerPage.inputNeighborhood2,"floresta")
 
         //CONTACT INFORMATION
         await type(page,growerPage.inputPhoneNumber2,"223547789")
         await click(page,growerPage.checkboxStarkCertify)
         await click(page,growerPage.buttonSave)
 
     })
 
     it('Filter Profiles All Status', async function () {

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
 
         //Click en Menú 'Grower'
         await page.waitForXPath(homePage.growerOption)
         await page.waitForTimeout(12000)
         await clickXPath(page,homePage.growerOption)
         
         //Click en 'Add New Grower'
         await page.waitForXPath(page,growerPage.buttonAddNewGrower)
         await clickXPath(page,growerPage.buttonAddNewGrower)
 
         //Llenar formularios
         await page.waitForSelector(growerPage.inputDocument)
         const cpf = getCPF()
         await page.waitForTimeout(10000)
         await type(page,growerPage.inputDocument,cpf)
         await type(page,growerPage.inputGrower,"jose")
         await type(page,gowerPage.inputGrowerFantasyName,"maria")
         await type(page,growerPage.inputContactEmail,"juanperez18@gmail.com")
 
         await click(page,growerPage.checkboxGrower)
         await type(page,growerPage.inputPrimaryPhone,"(54)22361-6599")
         await click(page,growerPage.checkboxStark)
         await click(page,growerPage.checkboxCollaborator)
         await click(page,growerPage.checkboxCooperative)
         await click(page,growerPage.checkboxElected)
         await click(page,growerPage.checkboxCertifiedPartner)
         await type(page,growerPage.inputStartDate,"18/04/1986")
         await type(page,growerPage.inputEndDate,"05/10/2001")
         await type(page,growerPage.inputZipCode,"7600")
         await type(page,growerPage.inputAddress,"independencia 749")
         await type(page,growerPage.inputNumber,"6")
         await type(page,growerPage.inputComplement,"ejemplo")
         await type(page,growerPage.inputNeighborhood,"caballito")
         
         //Contactinformation
         
         await type(page,growerPage.inputPhoneNumber,"1551606621")
         await click(page,growerPage.checkboxBillingAddress)
         await click(page,growerPage.checkboxStarkCertify)
         await click(page,growerPage.buttonSave)
 
     })

     it('Filter Profiles All Status', async function () {

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
 
         //Click en Menú 'Grower'
         await page.waitForXPath(homePage.growerOption)
         await page.waitForTimeout(12000)
         await clickXPath(page,homePage.growerOption)
         
         //Click en 'Add New Grower'
         await page.waitForXPath(page,growerPage.buttonAddNewGrower)
         await clickXPath(page,growerPage.buttonAddNewGrower)
        
         //
         await click(page,growerPage.inputDocument)
         await click(page,growerPage.inputGrower)
         expect(growerPage.labelErrorDocument).to.exist
         await click(page,growerPage.inputPrimaryPhone)
         expect(growerPage.labelErrorGrower).to.exist
         await click(page,growerPage.inputZipCode)
         expect(growerPage.labelErrorPrimaryPhone).to.exist
         await click(page,growerPage.inputAddress)
        expect(growerPage.labelErrorZipCode).to.exist
         await click(page,growerPage.inputNumber)
        expect(growerPage.labelErrorAddress).to.exist
         await click(page,growerPage.inputNeighborhood)
        expect(growerPage.labelErrorNumber).to.exist
         //await click(page,growerPage.inputNumber)
        

        await click(page,growerPage.inputZipCode2)
        expect(growerPage.labelErrorNeighborhood).to.exist
        await click(page,growerPage.inputAddress2)
        expect(growerPage.labelErrorZipCode2).to.exist
        await click(page,growerPage.inputNumber2)
        expect(growerPage.labelErrorAddress2).to.exist
        await click(page,growerPage.inputNeighborhood2) 
        expect(growerPage.labelErrorNumber2).to.exist
        await click(page,growerPage.inputNumber2)
        expect(growerPage.labelErrorNeighborhood2).to.exist
     })
})