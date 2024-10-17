import AutocompletePage from "../../page/autocompletePage";
 

const autocompletePage = new AutocompletePage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Pruebas de la categoria de Completar datos', () => {
    beforeEach(() => { autocompletePage.navigateForm()  
  });

  it('Mostrar los campos a llenar', () => {
    autocompletePage.addAutocomplete();
    autocompletePage.addDropDownList();
  });

    });