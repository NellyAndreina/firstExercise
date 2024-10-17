export default class AutocompletePage {
 constructor(){
    this.selector='#AllMeals-awed > .o-slbtn > .o-caret';
    this.dropDownOptions='ul > li'
 }
    navigateForm(){
    cy.visit('/');
 }
addAutocomplete(){
    cy.get('#Meal').click().type('Hello, world');
} 
addDropDownList(){
    const fruit = "Apple"
    cy.get(this.selector).type(fruit).click()
    //cy.get(this.dropDownOptions).contains(fruit).click()
    //cy.get('#AllMeals-awed > .o-slbtn > .o-caret').type('Apple');
}
}