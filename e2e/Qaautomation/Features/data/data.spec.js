import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

  Given("user logged into the application", function () {

    cy.visit('http://localhost:9000/login')
    cy.get('input[name="username"]').type('test@gmail.com');
    cy.get('input[name="password"]').type('test123');
    cy.get('button[type=submit]').click();
    cy.get('div[data-testid="app"] h1').should('have.text', 'Supply Chain');

  });

  When("user creates PO", function() {
  cy.get('span').contains('Purchase Order').click();
    cy.get('.MuiInputBase-root > #purchase_order_type').click();
    cy.get('p').contains('Direct Purchase').click();
    cy.get('input[placeholder="Select DC"]').click();
    cy.get('div').contains('1-Chennai').click();
    cy.get('#buyers').click();
    cy.get('#buyers-option-0').click();
    cy.get('#partner').type('uddes');
    cy.get('div').contains('Uddeshya.Vendor-Alikam, Srikakulam-7200822922(Supplier)').click();
    cy.get('input[placeholder="Select Date"]').type('31/03/2023');
    cy.get('input[placeholder="Select Executives"]').click();
    cy.get('#field_executives-option-0').click();
    cy.get('input[name="buying_in"]').last().click();
    cy.get('input[placeholder="Name"]').click();
    cy.get('.MuiAutocomplete-listbox li >div>div').contains('Apple').click();
    cy.wait(200);
    cy.get('input[placeholder="SKU"]').click();
    cy.wait(200);
    cy.get('.MuiAutocomplete-listbox li div div').contains('KUL-EL-UROYAL').click();
  cy.get('input[name="purchase_items.0.average_weight"]').type('100');
  cy.get('input[name="purchase_items.0.quantity"]').type('100');
  cy.get('input[name="purchase_items.0.agreed_value"]').type('100');
    cy.get('[id="purchase_items.0.packaging_type_id"]').eq(1).click();
    cy.get('p').contains('Crate').click();
   cy.get('span').contains('Save & Close').click();
  
  
  });
  
  When("user complete DC arrivals", function() {

    cy.get('div > button').eq(0).click();
    cy.get('span').contains('DC Arrivals').click();
    cy.get('[aria-label="Select DC"]').click();
    cy.get('ul[class="MuiList-root MuiMenu-list MuiList-padding"] li').eq(8).contains('Chennai').click();
    cy.get('span').contains('Receive Shipments').click();
    cy.get('span').contains('Save & Complete Delivery').click();
    cy.get('span').contains('ok').click();

  
  });
  Then("Dc inventory has materials for LMD creation", function() {

      cy.get('div > button').eq(0).click();
     cy.get('span').contains('Inventory').click();
     cy.get('td[header="Products"]').eq(0).contains('APPL/KUL-EL-UROYAL/V-AP-Uddesh/CRAT/');
     cy.get('td[header="Package"]').eq(0).contains('100 Crate')

  
  });

  Given("user navigated to the baseurl", function() {

    cy.request({
      method:'GET',
      url : 'https://crmstaging.vegrow.in/purchase_orders/21213.json'
    })
    
    // cy.visit('http://localhost:9000/login')
     
     
  });
  
  When("user enter valid username and password", function(){
  //  cy.get('input[name="username"]').type('test@gmail.com');
  //     cy.get('input[name="password"]').type('test123');
  //     cy.get('button[type=submit]').click();
  });
  
  Then("user should be logged in", function() {
  
  //  cy.get('div[data-testid="app"] h1').should('have.text', 'Supply Chain');
  
  });

