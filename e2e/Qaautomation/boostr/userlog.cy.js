
/// <reference types="cypress" />





describe('example to-do app', () => {

    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    
     // cy.request({
  //     method:'GET',
  //     url : 'http://localhost:3000/purchase_orders/1.json',
  //     headers: {
  //       authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjgwMjU2ODc1LCJleHAiOjE2ODAyOTI4NzUsImp0aSI6ImFlZjJhMzk2LWUzMjktNGU1Yy1iMWRlLTYwZTkzZDVlMzA1YSJ9.Krmz_5tJdAK55_yOGn7m6qiTUmsmj86Un5ceWnrcIKY'
  //     }

  //   }).then((resp) =>{
  //     expect(resp.status).to.equal(200)
  //     expect(resp.body).property('id').to.equal(1)
  //     console.log('status printed in console'+ resp.status)
  //     console.log(resp.body)
  //   })

    // cy.request({
    //   method:'POST',
    //   url : 'http://localhost:3000/purchase_orders.json',
    //   headers: {
    //     authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjgwMjU2ODc1LCJleHAiOjE2ODAyOTI4NzUsImp0aSI6ImFlZjJhMzk2LWUzMjktNGU1Yy1iMWRlLTYwZTkzZDVlMzA1YSJ9.Krmz_5tJdAK55_yOGn7m6qiTUmsmj86Un5ceWnrcIKY'
    //   },
    //   body: {
    //     "items": [
    //         {
    //             "product_id": 1,
    //             "agreed_value": 124,
    //             "description": "",
    //             "weight_in_kgs": 123,
    //             "sku_id": 74,
    //             "average_weight": 123,
    //             "packaging_type_id": 1
    //         }
    //     ],
    //     "purchase_order": {
    //         "purchase_order_type": 3,
    //         "dc": {
    //             "id": 1,
    //             "name": "Hyderabad",
    //             "address": "Sy. 689/1, Near Sai Geetha Ashram, Devaryamjal, Shamirpet, Medchal, Telangana - 500078"
    //         },
    //         "address": "Narsapur, Medak, Narsapur, Telangana",
    //         "expected_harvest_date": 1633505160000,
    //         "services_details": {
    //             "labour_cost_rs": 12,
    //             "packaging_cost_rs": 12,
    //             "commision_rs": 12
    //         },
    //         "buyer_ids": [
    //             4312,
    //             4311
    //         ],
    //         "field_executive_ids": [
    //             4312,
    //             4313
    //         ],
    //         "partner_id": 125,
    //         "service_provider_id": 4823,
    //         "dc_id": 1
    //     }
    // }
    // })
   it('log into Velynk with valid credentials', () => {

    cy.visit('http://localhost:9000/login')
    cy.get('input[name="username"]').type('test@gmail.com');
    cy.get('input[name="password"]').type('test123');
    cy.get('button[type=submit]').click();
    cy.get('div[data-testid="app"] h1').should('have.text', 'Supply Chain');
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
    // cy.get('.MuiAutocomplete-listbox >li').first().click()
    cy.wait(500)
    cy.get('input[placeholder="SKU"]').click();
    cy.wait(500)
    cy.get('.MuiAutocomplete-listbox li div div').contains('KUL-EL-UROYAL').click();
  //  cy.get('p').contains('Kgs/unit').parents()
  cy.get('input[name="purchase_items.0.average_weight"]').type('100');
  cy.get('input[name="purchase_items.0.quantity"]').type('100');
  cy.get('input[name="purchase_items.0.agreed_value"]').type('100');
  cy.wait(100)
    cy.get('[id="purchase_items.0.packaging_type_id"]').eq(1).click();
    cy.get('p').contains('Crate').click();
   cy.get('span').contains('Save & Close').click();
    
    cy.get('div > button').eq(0).click();
    cy.wait(200);
    cy.get('span').contains('DC Arrivals').click();
    cy.wait(200);
    cy.get('[aria-label="Select DC"]').click();
//     cy.get('[aria-label="Select DC"]').invoke('show');
    cy.wait(200);
    cy.get('ul[class="MuiList-root MuiMenu-list MuiList-padding"] li').eq(8).contains('Chennai').click();
    cy.get('span').contains('Receive Shipments').click();
    cy.get('span').contains('Save & Complete Delivery').click();
     cy.get('span').contains('ok').click();
     cy.get('div > button').eq(0).click();
     cy.get('span').contains('Inventory').click();
     cy.get('td[header="Products"]').eq(0).contains('APPL/KUL-EL-UROYAL/V-AP-Uddesh/CRAT/');
     cy.get('td[header="Package"]').eq(0).contains('100 Crate')
    console.log('post request')
  })

  
  
  })
    

   