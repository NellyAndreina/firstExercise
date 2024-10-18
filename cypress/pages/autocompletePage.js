export default class AutocompletePage {
    constructor(){
       this.selector= 'button#AllMeals-awed div'
       this.dropDownOptions='div.o-itsc ul > li'
    }
       navigateForm(){
       cy.visit('/');
    }
   addAutocomplete(){
       cy.get('#Meal').click().type('Hello, world');
   } 
   addDropDownList(){
       cy.get(this.selector).click({ multiple: true })
       cy.get(this.dropDownOptions).then($options => {
           const randomIndex = Math.floor(Math.random() * $options.length)
           cy.wrap($options[randomIndex]).click({force: true})
       })
   }
   clickButtonGroup(){
    cy.get('.o-disp > [data-index="1"]').click();
   }
   addDateTimePicker(){
   cy.get(':nth-child(1) > :nth-child(2) > .einput > .awe-datepicker-field > .awe-elcont > .awe-btn > .awe-icon').click();
   cy.get('.o-selday > div').click();
    }
   }