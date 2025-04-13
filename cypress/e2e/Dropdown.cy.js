describe('Drop Downs',()=>{
    it('Handle Drop downs',()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')

     cy.get("label[for='country']").contains('Country:')
     cy.get('#country').select('India').should('contain','India')


  
    })
    it('Select Colors',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    
         cy.get("label[for='colors']").contains('Colors:')
         cy.get('#colors').select('Red').should('contain','Yellow')
    
    
      
        })



})
    
