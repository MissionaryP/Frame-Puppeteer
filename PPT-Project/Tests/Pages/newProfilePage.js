module.exports = {
    titleLabel : "//h1[text()=\"General Information\"]",
    nameInput : "#name",
    descriptionInput : "#description",
    accessControlCheckBox : "//div[@class=\"mat-checkbox-background\"]",
    saveButton : "//span[text()=\" save \"]",
    clearButton : "//span[text() =\" clear \"]",
    exportButton : "//span[text() = \"Export\"]",
    selectAccessControlButton : "//div[@class = \"mat-select-value\"]",
    selectOptions: "//span[@class = \"mat-option-text\"]",
    backArrow: "//button[@class=\"mat-icon-button\"]",
    errorMsg: "//snack-bar-container",
    emptyFields :"//mat-error[text()=\"This field is required\"]",
    validateEmptyName : "//label[text()=\"Profile\"]",
    validateEmptyDescription : "//label[text()=\"Description\"]",
    selectElement : async function(page,options,number){
        try{
            const elements = await page.$x(options)
            await elements[number].click()
        }catch(error){
            throw new Error(`Could not select an element`)
        }
    }
}