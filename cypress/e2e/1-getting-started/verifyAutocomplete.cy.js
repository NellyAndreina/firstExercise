import AutocompletePage from "../../pages/autocompletePage";
 
const autocompletePage = new AutocompletePage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Pruebas de la categoria de Completar datos', () => {
    beforeEach(() => { autocompletePage.navigateForm();  
  });

  it('Interactuar con los campos', () => {
    autocompletePage.selectFruitCombobox();
    autocompletePage.addAutocomplete();
    autocompletePage.addFruitDropDownList();
    autocompletePage.clickButtonGroup();
    autocompletePage.addDateTimePicker();
    autocompletePage.selectVegetablesDropDownList();
  });

    });