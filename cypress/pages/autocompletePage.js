const legumes = ['Tomato', 'Potato', 'Cucumber', 'Onion', 'Carrot'];
export default class AutocompletePage {
    constructor(){
       this.selector= 'button#AllMeals-awed div'
       this.dropDownOptions='div.o-itsc ul > li'
       this.dropDownOptionsOne='div.o-itsc ul > li'
       this.dropDownOptionsTwo='.o-itm o-v o-ditm'
       this.combobox='button.o-cbxbtn i'
       this.dropDownList='#ChildDd-awed > .o-cptn'
    }
       navigateForm(){
       cy.visit('/');
    }
    

   addAutocomplete(){
       cy.get('#Meal').click().type('Hello, world');
   }
   addFruitDropDownList(){
       cy.get(this.selector).click({ multiple: true })
       cy.get(this.dropDownOptions).then($options => {
           const randomIndex = Math.floor(Math.random() * $options.length)
           cy.wrap($options[randomIndex]).click({force: true})
       })
   }
   selectFruitCombobox(){
    cy.get(this.combobox).click();
    cy.get(this.dropDownOptionsOne).then($options => {
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

    selectVegetablesDropDownList() {
        cy.get(this.dropDownList).click();
        cy.get('.o-menu.o-pu.open .o-mnits .o-itm').should('be.visible').then($options => {
            const optionsCount = $options.length;
            const randomIndex = Math.floor(Math.random() * optionsCount);
            cy.wrap($options[randomIndex]).click();
        });
    }
   
   }