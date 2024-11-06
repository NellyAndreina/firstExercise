import AutocompletePage from "../../pages/autocompletePage";
 
const autocompletePage = new AutocompletePage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Pruebas de la categoria de Completar datos', () => {
    beforeEach(() => { autocompletePage.navigateForm();  
  });

  it('Interactuar con los campos', () => {
    autocompletePage.addAutocomplete();
    autocompletePage.selectFromFruitsDropdownList();
    autocompletePage.clickButtonGroup();
    autocompletePage.addDateTimePicker();
  });

    });